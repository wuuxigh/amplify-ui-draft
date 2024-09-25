import { LivenessOvalDetails, Face, FaceMatchState } from '../types';
import { SessionInformation } from '@aws-sdk/client-rekognitionstreaming';
interface MatchStateInOvalParams {
    face: Face;
    ovalDetails: LivenessOvalDetails;
    initialFaceIntersection: number;
    sessionInformation: SessionInformation;
    frameHeight: number;
}
/**
 * Returns the state of the provided face with respect to the provided liveness oval.
 */
export declare function getFaceMatchStateInLivenessOval({ face, ovalDetails, initialFaceIntersection, sessionInformation, frameHeight, }: MatchStateInOvalParams): {
    faceMatchState: FaceMatchState;
    faceMatchPercentage: number;
};
export {};
