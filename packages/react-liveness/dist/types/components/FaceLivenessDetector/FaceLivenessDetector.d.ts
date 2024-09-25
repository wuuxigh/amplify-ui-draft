/// <reference types="react" />
import { FaceLivenessDetectorProps as FaceLivenessDetectorPropsFromUi } from './service';
import { LivenessDisplayText } from './displayText';
import { FaceLivenessDetectorComponents } from './shared/DefaultStartScreenComponents';
export interface FaceLivenessDetectorProps extends FaceLivenessDetectorPropsFromUi {
    components?: FaceLivenessDetectorComponents;
    displayText?: LivenessDisplayText;
}
export default function FaceLivenessDetector(props: FaceLivenessDetectorProps): JSX.Element;
