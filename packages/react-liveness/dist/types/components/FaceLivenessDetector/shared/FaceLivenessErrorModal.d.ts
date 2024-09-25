import React from 'react';
import { ErrorState } from '../service';
import { ErrorDisplayText } from '../displayText';
export interface CheckScreenComponents {
    ErrorView?: React.ComponentType<FaceLivenessErrorModalProps>;
}
export interface FaceLivenessErrorModalProps {
    children: React.ReactNode;
    displayText?: Partial<ErrorDisplayText>;
    onRetry: () => void;
}
export declare const renderErrorModal: ({ errorState, overrideErrorDisplayText, }: {
    errorState: ErrorState;
    overrideErrorDisplayText?: Partial<{
        errorLabelText: string;
        connectionTimeoutHeaderText: string;
        connectionTimeoutMessageText: string;
        timeoutHeaderText: string;
        timeoutMessageText: string;
        faceDistanceHeaderText: string;
        faceDistanceMessageText: string;
        multipleFacesHeaderText: string;
        multipleFacesMessageText: string;
        clientHeaderText: string;
        clientMessageText: string;
        serverHeaderText: string;
        serverMessageText: string;
        landscapeHeaderText: string;
        landscapeMessageText: string;
        portraitMessageText: string;
        tryAgainText: string;
    }> | undefined;
}) => JSX.Element | null;
export declare const FaceLivenessErrorModal: React.FC<FaceLivenessErrorModalProps>;
