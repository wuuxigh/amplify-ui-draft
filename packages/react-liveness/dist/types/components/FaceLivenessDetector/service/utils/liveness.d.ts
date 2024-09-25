import { LivenessOvalDetails, IlluminationState, Face, FaceMatchState, BoundingBox, ErrorState } from '../types';
import { FaceDetection } from '../types/faceDetection';
import { ClientFreshnessColorSequence } from '../types/service';
import { SessionInformation } from '@aws-sdk/client-rekognitionstreaming';
interface OvalBoundingBox {
    ovalBoundingBox: BoundingBox;
    minOvalX: number;
    maxOvalX: number;
    minOvalY: number;
    maxOvalY: number;
}
/**
 * Returns the bounding box details from an oval
 */
export declare function getOvalBoundingBox(ovalDetails: LivenessOvalDetails): OvalBoundingBox;
/**
 * Returns the ratio of intersection and union of two bounding boxes.
 */
export declare function getIntersectionOverUnion(box1: BoundingBox, box2: BoundingBox): number;
/**
 * Returns the details of a randomly generated liveness oval
 * from SDK
 */
export declare function getOvalDetailsFromSessionInformation({ sessionInformation, videoWidth, }: {
    sessionInformation: SessionInformation;
    videoWidth: number;
}): LivenessOvalDetails;
/**
 * Returns the details of a statically generated liveness oval based on the video dimensions
 */
export declare function getStaticLivenessOvalDetails({ width, height, widthSeed, centerXSeed, centerYSeed, ratioMultiplier, }: {
    width: number;
    height: number;
    widthSeed?: number;
    centerXSeed?: number;
    centerYSeed?: number;
    ratioMultiplier?: number;
}): LivenessOvalDetails;
/**
 * Draws the provided liveness oval on the canvas.
 */
export declare function drawLivenessOvalInCanvas({ canvas, oval, scaleFactor, videoEl, isStartScreen, }: {
    canvas: HTMLCanvasElement;
    oval: LivenessOvalDetails;
    scaleFactor: number;
    videoEl: HTMLVideoElement;
    isStartScreen?: boolean;
}): void;
export declare function drawStaticOval(canvasEl: HTMLCanvasElement, videoEl: HTMLVideoElement, videoMediaStream: MediaStream): void;
export declare function clearOvalCanvas({ canvas, }: {
    canvas: HTMLCanvasElement;
}): void;
export declare function generateBboxFromLandmarks(face: Face, oval: LivenessOvalDetails, frameHeight: number): BoundingBox;
/**
 * Returns the illumination state in the provided video frame.
 */
export declare function estimateIllumination(videoEl: HTMLVideoElement): IlluminationState | undefined;
/**
 * Checks if the provided media device is a virtual camera.
 * @param device
 */
export declare function isCameraDeviceVirtual(device: MediaDeviceInfo): boolean;
export declare const LivenessErrorStateStringMap: {
    CONNECTION_TIMEOUT: string;
    RUNTIME_ERROR: string;
    SERVER_ERROR: string;
    TIMEOUT: string;
    FACE_DISTANCE_ERROR: string;
    MULTIPLE_FACES_ERROR: string;
    CAMERA_FRAMERATE_ERROR: string;
    CAMERA_ACCESS_ERROR: string;
    MOBILE_LANDSCAPE_ERROR: string;
    FRESHNESS_TIMEOUT: string;
};
interface FillOverlayCanvasFractionalInput {
    overlayCanvas: HTMLCanvasElement;
    prevColor: string;
    nextColor: string;
    videoEl: HTMLVideoElement;
    ovalDetails: LivenessOvalDetails;
    heightFraction: number;
    scaleFactor: number;
}
export declare function fillOverlayCanvasFractional({ overlayCanvas, prevColor, nextColor, videoEl, ovalDetails, heightFraction, scaleFactor, }: FillOverlayCanvasFractionalInput): void;
export declare const isClientFreshnessColorSequence: (obj: ClientFreshnessColorSequence | undefined) => obj is ClientFreshnessColorSequence;
export declare function getColorsSequencesFromSessionInformation(sessionInformation: SessionInformation): ClientFreshnessColorSequence[];
export declare function getRGBArrayFromColorString(colorStr: string): number[];
export declare function getFaceMatchState(faceDetector: FaceDetection, videoEl: HTMLVideoElement): Promise<FaceMatchState>;
export declare function isFaceDistanceBelowThreshold({ faceDetector, videoEl, ovalDetails, reduceThreshold, isMobile, }: {
    faceDetector: FaceDetection;
    videoEl: HTMLVideoElement;
    ovalDetails: LivenessOvalDetails;
    reduceThreshold?: boolean;
    isMobile?: boolean;
}): Promise<{
    isDistanceBelowThreshold: boolean;
    error?: ErrorState;
}>;
export declare function getBoundingBox({ deviceHeight, deviceWidth, height, width, top, left, }: {
    deviceHeight: number;
    deviceWidth: number;
    height: number;
    width: number;
    top: number;
    left: number;
}): {
    Height: number;
    Width: number;
    Top: number;
    Left: number;
};
export {};
