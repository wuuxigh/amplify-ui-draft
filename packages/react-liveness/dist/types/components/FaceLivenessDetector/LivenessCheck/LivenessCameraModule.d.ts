/// <reference types="react" />
import { FaceMatchState } from '../service';
import { InstructionDisplayText, ErrorDisplayText, HintDisplayText, StreamDisplayText, CameraDisplayText } from '../displayText';
import { FaceLivenessDetectorComponents } from '../shared/DefaultStartScreenComponents';
export declare const selectVideoConstraints: import("../hooks").LivenessSelectorFn<MediaTrackConstraints | undefined>;
export declare const selectVideoStream: import("../hooks").LivenessSelectorFn<MediaStream | undefined>;
export declare const selectFaceMatchPercentage: import("../hooks").LivenessSelectorFn<number | undefined>;
export declare const selectFaceMatchState: import("../hooks").LivenessSelectorFn<FaceMatchState | undefined>;
export declare const selectSelectedDeviceId: import("../hooks").LivenessSelectorFn<string | undefined>;
export declare const selectSelectableDevices: import("../hooks").LivenessSelectorFn<MediaDeviceInfo[] | undefined>;
export interface LivenessCameraModuleProps {
    isMobileScreen: boolean;
    isRecordingStopped: boolean;
    instructionDisplayText: Required<InstructionDisplayText>;
    streamDisplayText: Required<StreamDisplayText>;
    hintDisplayText: Required<HintDisplayText>;
    errorDisplayText: Required<ErrorDisplayText>;
    cameraDisplayText: Required<CameraDisplayText>;
    components?: FaceLivenessDetectorComponents;
    testId?: string;
}
export declare const LivenessCameraModule: (props: LivenessCameraModuleProps) => JSX.Element;
