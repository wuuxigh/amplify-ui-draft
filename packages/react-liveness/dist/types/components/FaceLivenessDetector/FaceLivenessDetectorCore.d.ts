/// <reference types="react" />
import { FaceLivenessDetectorCoreProps as FaceLivenessDetectorPropsFromUi } from './service';
import { FaceLivenessDetectorComponents } from './shared/DefaultStartScreenComponents';
import { LivenessDisplayText } from './displayText';
export interface FaceLivenessDetectorCoreProps extends FaceLivenessDetectorPropsFromUi {
    components?: FaceLivenessDetectorComponents;
    displayText?: LivenessDisplayText;
}
export default function FaceLivenessDetectorCore(props: FaceLivenessDetectorCoreProps): JSX.Element;
