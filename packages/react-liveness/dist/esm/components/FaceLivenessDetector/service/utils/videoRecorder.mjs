import { isAndroidChromeWithBrokenH264 } from '../../utils/device.mjs';

// Only to be used with Chrome for the Android Chrome H264 Bug - https://issues.chromium.org/issues/343199623
const ALTERNATE_CHROME_MIME_TYPE = 'video/x-matroska;codecs=vp8';
/**
 * Helper wrapper class over the native MediaRecorder.
 */
class VideoRecorder {
    constructor(stream) {
        if (typeof MediaRecorder === 'undefined') {
            throw Error('MediaRecorder is not supported by this browser');
        }
        this._stream = stream;
        this._chunks = [];
        this._recorder = new MediaRecorder(stream, {
            bitsPerSecond: 1000000,
            mimeType: isAndroidChromeWithBrokenH264()
                ? ALTERNATE_CHROME_MIME_TYPE
                : undefined,
        });
        this._setupCallbacks();
    }
    getState() {
        return this._recorder.state;
    }
    start(timeSlice) {
        this.clearRecordedData();
        this.recordingStartApiTimestamp = Date.now();
        this._recorder.start(timeSlice);
    }
    async stop() {
        if (this.getState() === 'recording') {
            this._recorder.stop();
        }
        return this._recorderStopped;
    }
    pause() {
        this._recorder.pause();
    }
    clearRecordedData() {
        this._chunks = [];
    }
    dispatch(event) {
        this._recorder.dispatchEvent(event);
    }
    getVideoChunkSize() {
        return this._chunks.length;
    }
    _setupCallbacks() {
        // Creates a Readablestream of video chunks. Waits to receive a clientSessionInfo event before pushing
        //  a livenessActionDocument to the ReadableStream and finally closing the ReadableStream
        this.videoStream = new ReadableStream({
            start: (controller) => {
                if (!this._recorder) {
                    return;
                }
                this._recorder.ondataavailable = (e) => {
                    if (e.data && e.data.size > 0) {
                        if (this._chunks.length === 0) {
                            this.firstChunkTimestamp = Date.now();
                        }
                        this._chunks.push(e.data);
                        controller.enqueue(e.data);
                    }
                };
                this._recorder.addEventListener('clientSesssionInfo', (e) => {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
                    controller.enqueue(e.data.clientInfo);
                });
                this._recorder.addEventListener('stopVideo', () => {
                    controller.enqueue('stopVideo');
                });
                this._recorder.addEventListener('endStream', () => {
                    controller.close();
                });
                this._recorder.addEventListener('endStreamWithCode', (e) => {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
                    controller.enqueue({
                        type: 'endStreamWithCode',
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                        code: e.data.code,
                    });
                });
            },
        });
        this.recorderStarted = new Promise((resolve) => {
            this._recorder.onstart = () => {
                this.recorderStartTimestamp = Date.now();
                resolve();
            };
        });
        this._recorderStopped = new Promise((resolve) => {
            this._recorder.onstop = () => {
                this.recorderEndTimestamp = Date.now();
                resolve();
            };
        });
        this._recorder.onerror = () => {
            if (this.getState() !== 'stopped') {
                this.stop();
            }
        };
    }
}

export { VideoRecorder };
