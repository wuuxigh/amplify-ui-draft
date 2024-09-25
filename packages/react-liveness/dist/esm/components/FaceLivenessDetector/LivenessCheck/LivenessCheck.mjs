import * as React from 'react';
import { Flex, Text, Button, View } from '@aws-amplify/ui-react';
import '../service/machine/machine.mjs';
import '../service/types/liveness.mjs';
import { LivenessErrorState } from '../service/types/error.mjs';
import '@tensorflow/tfjs-core';
import '@tensorflow-models/face-detection';
import '@tensorflow/tfjs-backend-wasm';
import '@tensorflow/tfjs-backend-cpu';
import '@aws-amplify/core/internals/utils';
import { getLandscapeMediaQuery, isMobileScreen } from '../utils/device.mjs';
import '@aws-sdk/client-rekognitionstreaming';
import '../service/utils/createStreamingClient/createStreamingClient.mjs';
import '../service/utils/freshnessColorDisplay.mjs';
import { LivenessCameraModule } from './LivenessCameraModule.mjs';
import { useLivenessActor } from '../hooks/useLivenessActor.mjs';
import { useLivenessSelector, createLivenessSelector } from '../hooks/useLivenessSelector.mjs';
import '@aws-amplify/ui';
import { CancelButton } from '../shared/CancelButton.mjs';
import { defaultErrorDisplayText } from '../displayText.mjs';
import { LandscapeErrorModal } from '../shared/LandscapeErrorModal.mjs';
import { selectErrorState } from '../shared/Hint.mjs';
import '../types/classNames.mjs';

const CHECK_CLASS_NAME = 'liveness-detector-check';
const CAMERA_ERROR_TEXT_WIDTH = 420;
const selectIsRecordingStopped = createLivenessSelector((state) => state.context.isRecordingStopped);
const LivenessCheck = ({ instructionDisplayText, hintDisplayText, cameraDisplayText, streamDisplayText, errorDisplayText, components, }) => {
    const [state, send] = useLivenessActor();
    const errorState = useLivenessSelector(selectErrorState);
    const isRecordingStopped = useLivenessSelector(selectIsRecordingStopped);
    const isPermissionDenied = state.matches('permissionDenied');
    const isMobile = isMobileScreen();
    const recheckCameraPermissions = () => {
        send({ type: 'RETRY_CAMERA_CHECK' });
    };
    const { cameraMinSpecificationsHeadingText, cameraMinSpecificationsMessageText, cameraNotFoundHeadingText, cameraNotFoundMessageText, retryCameraPermissionsText, } = cameraDisplayText;
    const { cancelLivenessCheckText } = streamDisplayText;
    React.useLayoutEffect(() => {
        if (isMobile) {
            const sendLandscapeWarning = (isLandscapeMatched) => {
                if (isLandscapeMatched) {
                    send({ type: 'MOBILE_LANDSCAPE_WARNING' });
                }
            };
            // Get orientation: landscape media query
            const landscapeMediaQuery = getLandscapeMediaQuery();
            // Send warning based on initial orientation
            sendLandscapeWarning(landscapeMediaQuery.matches);
            // Listen for future orientation changes and send warning
            landscapeMediaQuery.addEventListener('change', (e) => {
                sendLandscapeWarning(e.matches);
            });
            // Remove matchMedia event listener
            return () => {
                landscapeMediaQuery.removeEventListener('change', (e) => sendLandscapeWarning(e.matches));
            };
        }
    }, [isMobile, send]);
    const renderCheck = () => {
        if (errorState === LivenessErrorState.MOBILE_LANDSCAPE_ERROR) {
            const displayText = {
                ...defaultErrorDisplayText,
                ...errorDisplayText,
            };
            const { landscapeHeaderText, portraitMessageText, landscapeMessageText, tryAgainText, } = displayText;
            return (React.createElement(Flex, { backgroundColor: "background.primary", direction: "column", textAlign: "center", alignItems: "center", justifyContent: "center", position: "absolute", width: "100%" },
                React.createElement(LandscapeErrorModal, { header: landscapeHeaderText, portraitMessage: portraitMessageText, landscapeMessage: landscapeMessageText, tryAgainText: tryAgainText, onRetry: () => {
                        send({
                            type: 'CANCEL',
                        });
                    } })));
        }
        else if (isPermissionDenied) {
            return (React.createElement(Flex, { backgroundColor: "background.primary", direction: "column", textAlign: "center", alignItems: "center", justifyContent: "center", width: "100%", height: 480 },
                React.createElement(Text, { fontSize: "large", fontWeight: "bold" }, errorState === LivenessErrorState.CAMERA_FRAMERATE_ERROR
                    ? cameraMinSpecificationsHeadingText
                    : cameraNotFoundHeadingText),
                React.createElement(Text, { maxWidth: CAMERA_ERROR_TEXT_WIDTH }, errorState === LivenessErrorState.CAMERA_FRAMERATE_ERROR
                    ? cameraMinSpecificationsMessageText
                    : cameraNotFoundMessageText),
                React.createElement(Button, { variation: "primary", type: "button", onClick: recheckCameraPermissions }, retryCameraPermissionsText),
                React.createElement(View, { position: "absolute", top: "medium", right: "medium" },
                    React.createElement(CancelButton, { ariaLabel: cancelLivenessCheckText }))));
        }
        else {
            return (React.createElement(LivenessCameraModule, { isMobileScreen: isMobile, isRecordingStopped: isRecordingStopped, instructionDisplayText: instructionDisplayText, streamDisplayText: streamDisplayText, hintDisplayText: hintDisplayText, errorDisplayText: errorDisplayText, cameraDisplayText: cameraDisplayText, components: components }));
        }
    };
    return (React.createElement(Flex, { direction: "column", position: "relative", testId: CHECK_CLASS_NAME, className: CHECK_CLASS_NAME, gap: "xl" }, renderCheck()));
};

export { LivenessCheck, selectIsRecordingStopped };
