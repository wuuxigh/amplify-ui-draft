import { StartFaceLivenessSessionCommand } from '@aws-sdk/client-rekognitionstreaming';
import { VideoRecorder } from './videoRecorder.mjs';
import { createStreamingClient } from './createStreamingClient/createStreamingClient.mjs';

const TIME_SLICE = 1000;
function isBlob(obj) {
    return obj.arrayBuffer !== undefined;
}
function isClientSessionInformationEvent(obj) {
    return obj.Challenge !== undefined;
}
function isEndStreamWithCodeEvent(obj) {
    return obj.code !== undefined;
}
class LivenessStreamProvider {
    constructor({ sessionId, region, stream, videoEl, credentialProvider, endpointOverride, systemClockOffset, }) {
        this.sessionId = sessionId;
        this.region = region;
        this.stream = stream;
        this.videoEl = videoEl;
        this.videoRecorder = new VideoRecorder(stream);
        this.credentialProvider = credentialProvider;
        this.endpointOverride = endpointOverride;
        this.systemClockOffset = systemClockOffset;
        this.initPromise = this.init();
    }
    async getResponseStream() {
        await this.initPromise;
        return this.responseStream;
    }
    startRecordingLivenessVideo() {
        this.videoRecorder.start(TIME_SLICE);
    }
    sendClientInfo(clientInfo) {
        this.videoRecorder.dispatch(new MessageEvent('clientSesssionInfo', { data: { clientInfo } }));
    }
    async stopVideo() {
        await this.videoRecorder.stop();
    }
    dispatchStopVideoEvent() {
        this.videoRecorder.dispatch(new Event('stopVideo'));
    }
    async endStreamWithCode(code) {
        if (this.videoRecorder.getState() === 'recording') {
            await this.stopVideo();
        }
        this.videoRecorder.dispatch(new MessageEvent('endStreamWithCode', { data: { code } }));
        return;
    }
    async init() {
        this._client = await createStreamingClient({
            credentialsProvider: this.credentialProvider,
            endpointOverride: this.endpointOverride,
            region: this.region,
            systemClockOffset: this.systemClockOffset,
        });
        this.responseStream = await this.startLivenessVideoConnection();
    }
    // Creates a generator from a stream of video chunks and livenessActionDocuments and yields VideoEvent and ClientEvents
    getAsyncGeneratorFromReadableStream(stream) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const current = this;
        this._reader = stream.getReader();
        return async function* () {
            while (true) {
                const { done, value } = (await current._reader.read());
                if (done) {
                    return;
                }
                // Video chunks blobs should be sent as video events
                if (value === 'stopVideo') {
                    // sending an empty video chunk signals that we have ended sending video
                    yield {
                        VideoEvent: {
                            VideoChunk: new Uint8Array([]),
                            TimestampMillis: Date.now(),
                        },
                    };
                }
                else if (isBlob(value)) {
                    const buffer = await value.arrayBuffer();
                    const chunk = new Uint8Array(buffer);
                    if (chunk.length > 0) {
                        yield {
                            VideoEvent: {
                                VideoChunk: chunk,
                                TimestampMillis: Date.now(),
                            },
                        };
                    }
                }
                else if (isClientSessionInformationEvent(value)) {
                    yield {
                        ClientSessionInformationEvent: {
                            Challenge: value.Challenge,
                        },
                    };
                }
                else if (isEndStreamWithCodeEvent(value)) {
                    yield {
                        VideoEvent: {
                            VideoChunk: new Uint8Array([]),
                            // this is a custom type that does not match LivenessRequestStream.
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            TimestampMillis: { closeCode: value.code },
                        },
                    };
                }
            }
        };
    }
    async startLivenessVideoConnection() {
        const livenessRequestGenerator = this.getAsyncGeneratorFromReadableStream(this.videoRecorder.videoStream)();
        const mediaSettings = this.stream.getTracks()[0].getSettings();
        const response = await this._client.send(new StartFaceLivenessSessionCommand({
            ChallengeVersions: 'FaceMovementAndLightChallenge_1.0.0',
            SessionId: this.sessionId,
            LivenessRequestStream: livenessRequestGenerator,
            VideoWidth: (mediaSettings.width ?? this.videoEl.width).toString(),
            VideoHeight: (mediaSettings.height ?? this.videoEl.height).toString(),
        }));
        return response.LivenessResponseStream;
    }
}

export { LivenessStreamProvider };
