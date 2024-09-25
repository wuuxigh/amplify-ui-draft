import React from 'react';
import { LivenessInterpreter, FaceLivenessDetectorProps } from '../service';
interface FaceLivenessDetectorContextType {
    componentProps: FaceLivenessDetectorProps;
    service: LivenessInterpreter;
}
export interface FaceLivenessDetectorProviderProps extends FaceLivenessDetectorContextType {
    children?: React.ReactNode;
}
export declare function FaceLivenessDetectorProvider({ children, ...props }: FaceLivenessDetectorProviderProps): JSX.Element;
export declare function useFaceLivenessDetector(): FaceLivenessDetectorContextType;
export {};
