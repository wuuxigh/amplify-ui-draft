import React__default, { useRef, useState } from 'react';
import { classNames } from '@aws-amplify/ui';
import { Loader, View, Flex, Text, Label, SelectField, Button } from '@aws-amplify/ui-react';
import { useColorMode } from '@aws-amplify/ui-react/internal';
import '../service/machine/machine.mjs';
import { FaceMatchState } from '../service/types/liveness.mjs';
import '@tensorflow/tfjs-core';
import '@tensorflow-models/face-detection';
import '@tensorflow/tfjs-backend-wasm';
import '@tensorflow/tfjs-backend-cpu';
import '@aws-amplify/core/internals/utils';
import { drawStaticOval, clearOvalCanvas } from '../service/utils/liveness.mjs';
import '@aws-sdk/client-rekognitionstreaming';
import '../service/utils/createStreamingClient/createStreamingClient.mjs';
import '../service/utils/freshnessColorDisplay.mjs';
import { useLivenessActor } from '../hooks/useLivenessActor.mjs';
import { useLivenessSelector, createLivenessSelector } from '../hooks/useLivenessSelector.mjs';
import { useMediaStreamInVideo } from '../hooks/useMediaStreamInVideo.mjs';
import { LivenessClassNames } from '../types/classNames.mjs';
import { selectErrorState, Hint } from '../shared/Hint.mjs';
import { MatchIndicator } from '../shared/MatchIndicator.mjs';
import { Overlay } from '../shared/Overlay.mjs';
import { renderErrorModal, FaceLivenessErrorModal } from '../shared/FaceLivenessErrorModal.mjs';
import { DefaultRecordingIcon, DefaultCancelButton, DefaultPhotosensitiveWarning } from '../shared/DefaultStartScreenComponents.mjs';

const selectVideoConstraints = createLivenessSelector((state) => state.context.videoAssociatedParams?.videoConstraints);
const selectVideoStream = createLivenessSelector((state) => state.context.videoAssociatedParams?.videoMediaStream);
const selectFaceMatchPercentage = createLivenessSelector((state) => state.context.faceMatchAssociatedParams?.faceMatchPercentage);
const selectFaceMatchState = createLivenessSelector((state) => state.context.faceMatchAssociatedParams?.faceMatchState);
const selectSelectedDeviceId = createLivenessSelector((state) => state.context.videoAssociatedParams?.selectedDeviceId);
const selectSelectableDevices = createLivenessSelector((state) => state.context.videoAssociatedParams?.selectableDevices);
const centeredLoader = (React__default.createElement(Loader, { size: "large", className: LivenessClassNames.Loader, "data-testid": "centered-loader" }));
const showMatchIndicatorStates = [
    FaceMatchState.TOO_FAR,
    FaceMatchState.CANT_IDENTIFY,
    FaceMatchState.FACE_IDENTIFIED,
    FaceMatchState.OFF_CENTER,
];
/**
 * For now we want to memoize the HOC for MatchIndicator because to optimize renders
 * The LivenessCameraModule still needs to be optimized for re-renders and at that time
 * we should be able to remove this memoization
 */
const MemoizedMatchIndicator = React__default.memo(MatchIndicator);
const LivenessCameraModule = (props) => {
    const { isMobileScreen, isRecordingStopped, instructionDisplayText, streamDisplayText, hintDisplayText, errorDisplayText, cameraDisplayText, components: customComponents, testId, } = props;
    const { cancelLivenessCheckText, recordingIndicatorText } = streamDisplayText;
    const { ErrorView = FaceLivenessErrorModal, PhotosensitiveWarning = DefaultPhotosensitiveWarning, } = customComponents ?? {};
    const [state, send] = useLivenessActor();
    const videoStream = useLivenessSelector(selectVideoStream);
    const videoConstraints = useLivenessSelector(selectVideoConstraints);
    const selectedDeviceId = useLivenessSelector(selectSelectedDeviceId);
    const selectableDevices = useLivenessSelector(selectSelectableDevices);
    const faceMatchPercentage = useLivenessSelector(selectFaceMatchPercentage);
    const faceMatchState = useLivenessSelector(selectFaceMatchState);
    const errorState = useLivenessSelector(selectErrorState);
    const colorMode = useColorMode();
    const { videoRef, videoWidth, videoHeight } = useMediaStreamInVideo(videoStream);
    const canvasRef = useRef(null);
    const freshnessColorRef = useRef(null);
    const [isCameraReady, setIsCameraReady] = useState(false);
    const isCheckingCamera = state.matches('cameraCheck');
    const isWaitingForCamera = state.matches('waitForDOMAndCameraDetails');
    const isStartView = state.matches('start') || state.matches('userCancel');
    const isDetectFaceBeforeStart = state.matches('detectFaceBeforeStart');
    const isRecording = state.matches('recording');
    const isCheckSucceeded = state.matches('checkSucceeded');
    const isFlashingFreshness = state.matches({
        recording: 'flashFreshnessColors',
    });
    // Android/Firefox and iOS flip the values of width/height returned from
    // getUserMedia, so we'll reset these in useLayoutEffect with the videoRef
    // element's intrinsic videoWidth and videoHeight attributes
    const [mediaWidth, setMediaWidth] = useState(videoWidth);
    const [mediaHeight, setMediaHeight] = useState(videoHeight);
    const [aspectRatio, setAspectRatio] = useState(() => videoWidth && videoHeight ? videoWidth / videoHeight : 0);
    React__default.useEffect(() => {
        if (canvasRef?.current && videoRef?.current && videoStream && isStartView) {
            drawStaticOval(canvasRef.current, videoRef.current, videoStream);
        }
    }, [canvasRef, videoRef, videoStream, colorMode, isStartView]);
    React__default.useEffect(() => {
        const updateColorModeHandler = (e) => {
            if (e.matches &&
                canvasRef?.current &&
                videoRef?.current &&
                videoStream &&
                isStartView) {
                drawStaticOval(canvasRef.current, videoRef.current, videoStream);
            }
        };
        const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
        const lightModePreference = window.matchMedia('(prefers-color-scheme: light)');
        darkModePreference.addEventListener('change', updateColorModeHandler);
        lightModePreference.addEventListener('change', updateColorModeHandler);
        return () => {
            darkModePreference.removeEventListener('change', updateColorModeHandler);
            lightModePreference.addEventListener('change', updateColorModeHandler);
        };
    }, [canvasRef, videoRef, videoStream, isStartView]);
    React__default.useLayoutEffect(() => {
        if (isCameraReady) {
            send({
                type: 'SET_DOM_AND_CAMERA_DETAILS',
                data: {
                    videoEl: videoRef.current,
                    canvasEl: canvasRef.current,
                    freshnessColorEl: freshnessColorRef.current,
                    isMobile: isMobileScreen,
                },
            });
        }
        if (videoRef.current) {
            setMediaWidth(videoRef.current.videoWidth);
            setMediaHeight(videoRef.current.videoHeight);
            setAspectRatio(videoRef.current.videoWidth / videoRef.current.videoHeight);
        }
    }, [send, videoRef, isCameraReady, isMobileScreen]);
    React__default.useEffect(() => {
        if (isDetectFaceBeforeStart) {
            clearOvalCanvas({ canvas: canvasRef.current });
        }
    }, [isDetectFaceBeforeStart]);
    const photoSensitivityWarning = React__default.useMemo(() => {
        return (React__default.createElement(View, { style: { visibility: isStartView ? 'visible' : 'hidden' } },
            React__default.createElement(PhotosensitiveWarning, { bodyText: instructionDisplayText.photosensitivityWarningBodyText, headingText: instructionDisplayText.photosensitivityWarningHeadingText, infoText: instructionDisplayText.photosensitivityWarningInfoText, labelText: instructionDisplayText.photosensitivityWarningLabelText })));
    }, [PhotosensitiveWarning, instructionDisplayText, isStartView]);
    const handleMediaPlay = () => {
        setIsCameraReady(true);
    };
    const beginLivenessCheck = React__default.useCallback(() => {
        send({
            type: 'BEGIN',
        });
    }, [send]);
    const onCameraChange = React__default.useCallback((e) => {
        const newDeviceId = e.target.value;
        const changeCamera = async () => {
            const newStream = await navigator.mediaDevices.getUserMedia({
                video: {
                    ...videoConstraints,
                    deviceId: { exact: newDeviceId },
                },
                audio: false,
            });
            send({
                type: 'UPDATE_DEVICE_AND_STREAM',
                data: { newDeviceId, newStream },
            });
        };
        changeCamera();
    }, [videoConstraints, send]);
    if (isCheckingCamera) {
        return (React__default.createElement(Flex, { justifyContent: 'center', className: LivenessClassNames.StartScreenCameraWaiting },
            React__default.createElement(Loader, { size: "large", className: LivenessClassNames.Loader, "data-testid": "centered-loader", position: "unset" }),
            React__default.createElement(Text, { fontSize: "large", fontWeight: "bold", "data-testid": "waiting-camera-permission", className: `${LivenessClassNames.StartScreenCameraWaiting}__text` }, cameraDisplayText.waitingCameraPermissionText)));
    }
    // We don't show full screen camera on the pre check screen (isStartView/isWaitingForCamera)
    const shouldShowFullScreenCamera = isMobileScreen && !isStartView && !isWaitingForCamera;
    return (React__default.createElement(React__default.Fragment, null,
        photoSensitivityWarning,
        React__default.createElement(Flex, { className: classNames(LivenessClassNames.CameraModule, shouldShowFullScreenCamera &&
                `${LivenessClassNames.CameraModule}--mobile`), "data-testid": testId, gap: "zero" },
            !isCameraReady && centeredLoader,
            React__default.createElement(Overlay, { horizontal: "center", vertical: isRecording && !isFlashingFreshness ? 'start' : 'space-between', className: LivenessClassNames.InstructionOverlay },
                isRecording && (React__default.createElement(DefaultRecordingIcon, { recordingIndicatorText: recordingIndicatorText })),
                !isStartView && !isWaitingForCamera && !isCheckSucceeded && (React__default.createElement(DefaultCancelButton, { cancelLivenessCheckText: cancelLivenessCheckText })),
                React__default.createElement(Flex, { className: classNames(LivenessClassNames.Hint, shouldShowFullScreenCamera && `${LivenessClassNames.Hint}--mobile`) },
                    React__default.createElement(Hint, { hintDisplayText: hintDisplayText })),
                errorState && (React__default.createElement(ErrorView, { onRetry: () => {
                        send({ type: 'CANCEL' });
                    }, displayText: errorDisplayText }, renderErrorModal({
                    errorState,
                    overrideErrorDisplayText: errorDisplayText,
                }))),
                isRecording &&
                    !isFlashingFreshness &&
                    showMatchIndicatorStates.includes(faceMatchState) ? (React__default.createElement(MemoizedMatchIndicator, { percentage: Math.ceil(faceMatchPercentage) })) : null),
            React__default.createElement(View, { as: "canvas", ref: freshnessColorRef, className: LivenessClassNames.FreshnessCanvas, hidden: true }),
            React__default.createElement(View, { className: LivenessClassNames.VideoAnchor, style: {
                    aspectRatio: `${aspectRatio}`,
                } },
                React__default.createElement("video", { ref: videoRef, muted: true, autoPlay: true, playsInline: true, width: mediaWidth, height: mediaHeight, onCanPlay: handleMediaPlay, "data-testid": "video", className: classNames(LivenessClassNames.Video, isRecordingStopped && LivenessClassNames.FadeOut), "aria-label": cameraDisplayText.a11yVideoLabelText }),
                React__default.createElement(Flex, { className: classNames(LivenessClassNames.OvalCanvas, shouldShowFullScreenCamera &&
                        `${LivenessClassNames.OvalCanvas}--mobile`, isRecordingStopped && LivenessClassNames.FadeOut) },
                    React__default.createElement(View, { as: "canvas", ref: canvasRef })),
                isStartView &&
                    !isMobileScreen &&
                    selectableDevices &&
                    selectableDevices.length > 1 && (React__default.createElement(Flex, { className: LivenessClassNames.StartScreenCameraSelect },
                    React__default.createElement(View, { className: LivenessClassNames.StartScreenCameraSelectContainer },
                        React__default.createElement(Label, { htmlFor: "amplify-liveness-camera-select", className: `${LivenessClassNames.StartScreenCameraSelect}__label` }, "Camera:"),
                        React__default.createElement(SelectField, { id: "amplify-liveness-camera-select", label: "Camera", labelHidden: true, value: selectedDeviceId, onChange: onCameraChange }, selectableDevices?.map((device) => (React__default.createElement("option", { value: device.deviceId, key: device.deviceId }, device.label))))))))),
        isStartView && (React__default.createElement(Flex, { justifyContent: "center" },
            React__default.createElement(Button, { variation: "primary", type: "button", onClick: beginLivenessCheck }, instructionDisplayText.startScreenBeginCheckText)))));
};

export { LivenessCameraModule, selectFaceMatchPercentage, selectFaceMatchState, selectSelectableDevices, selectSelectedDeviceId, selectVideoConstraints, selectVideoStream };
