import * as React from 'react';
import { useInterpret } from '@xstate/react';
import { livenessMachine } from './service/machine/machine.mjs';
import './service/types/liveness.mjs';
import '@tensorflow/tfjs-core';
import '@tensorflow-models/face-detection';
import '@tensorflow/tfjs-backend-wasm';
import '@tensorflow/tfjs-backend-cpu';
import '@aws-amplify/core/internals/utils';
import '@aws-sdk/client-rekognitionstreaming';
import './service/utils/createStreamingClient/createStreamingClient.mjs';
import './service/utils/freshnessColorDisplay.mjs';
import { View, Flex } from '@aws-amplify/ui-react';
import { FaceLivenessDetectorProvider } from './providers/FaceLivenessDetectorProvider.mjs';
import { LivenessCheck } from './LivenessCheck/LivenessCheck.mjs';
import { getDisplayText } from './utils/getDisplayText.mjs';

const DETECTOR_CLASS_NAME = 'liveness-detector';
function FaceLivenessDetectorCore(props) {
    const { components, config, displayText } = props;
    const currElementRef = React.useRef(null);
    const { hintDisplayText, cameraDisplayText, instructionDisplayText, streamDisplayText, errorDisplayText, } = getDisplayText(displayText);
    const service = useInterpret(livenessMachine, {
        devTools: process.env.NODE_ENV === 'development',
        context: {
            componentProps: {
                ...props,
                config: config ?? {},
            },
        },
    });
    return (React.createElement(View, { className: DETECTOR_CLASS_NAME, testId: DETECTOR_CLASS_NAME },
        React.createElement(FaceLivenessDetectorProvider, { componentProps: props, service: service },
            React.createElement(Flex, { direction: "column", ref: currElementRef },
                React.createElement(LivenessCheck, { instructionDisplayText: instructionDisplayText, hintDisplayText: hintDisplayText, cameraDisplayText: cameraDisplayText, streamDisplayText: streamDisplayText, errorDisplayText: errorDisplayText, components: components })))));
}

export { FaceLivenessDetectorCore as default };
