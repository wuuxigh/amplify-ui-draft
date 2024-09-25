import { ClientSessionInformationEvent, LivenessResponseStream } from '@aws-sdk/client-rekognitionstreaming';
import { VideoRecorder } from './videoRecorder';
import { AwsCredentialProvider } from '../types';
export interface StartLivenessStreamInput {
    sessionId: string;
}
export interface StartLivenessStreamOutput extends StartLivenessStreamInput {
    stream: WebSocket;
}
interface StreamProviderArgs extends StartLivenessStreamInput {
    region: string;
    stream: MediaStream;
    videoEl: HTMLVideoElement;
    credentialProvider?: AwsCredentialProvider;
    endpointOverride?: string;
    systemClockOffset?: number;
}
export declare class LivenessStreamProvider {
    sessionId: string;
    region: string;
    videoRecorder: VideoRecorder;
    responseStream: AsyncIterable<LivenessResponseStream>;
    credentialProvider?: AwsCredentialProvider;
    endpointOverride?: string;
    systemClockOffset?: number;
    private _reader;
    private videoEl;
    private _client;
    private stream;
    private initPromise;
    constructor({ sessionId, region, stream, videoEl, credentialProvider, endpointOverride, systemClockOffset, }: StreamProviderArgs);
    getResponseStream(): Promise<AsyncIterable<LivenessResponseStream>>;
    startRecordingLivenessVideo(): void;
    sendClientInfo(clientInfo: ClientSessionInformationEvent): void;
    stopVideo(): Promise<void>;
    dispatchStopVideoEvent(): void;
    endStreamWithCode(code?: number): Promise<undefined>;
    private init;
    private getAsyncGeneratorFromReadableStream;
    private startLivenessVideoConnection;
}
export {};
