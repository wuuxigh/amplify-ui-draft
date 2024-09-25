import React__default from 'react';
import { useMessage, handleMessageAction } from '@aws-amplify/ui-react-core-notifications';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { useSetUserAgent } from '@aws-amplify/ui-react-core';
import { BannerMessage } from '../BannerMessage/BannerMessage.mjs';
import { FullScreenMessage } from '../FullScreenMessage/FullScreenMessage.mjs';
import { ModalMessage } from '../ModalMessage/ModalMessage.mjs';
import handleMessageLinkAction from './handleMessageLinkAction.mjs';
import { VERSION } from '../../../version.mjs';

// TODO: replace below components incrementally as they become available
function CarouselMessage(_) {
    return null;
}
const platformComponents = {
    BannerMessage,
    CarouselMessage,
    FullScreenMessage,
    ModalMessage,
};
const onMessageAction = ({ action, url }) => {
    handleMessageAction({
        action,
        url,
        handleMessageLinkAction,
    });
};
function InAppMessageDisplay({ components: overrideComponents, }) {
    const components = React__default.useMemo(() => ({ ...platformComponents, ...overrideComponents }), [overrideComponents]);
    const { Component, props } = useMessage({
        components,
        onMessageAction,
    });
    useSetUserAgent({
        componentName: 'InAppMessaging',
        packageName: 'react-notifications',
        version: VERSION,
    });
    // There is currently no way to pass In-App Message payload variants so we
    // will fix the theme around In-App Messaging components to always assume
    // light mode
    return (React__default.createElement(ThemeProvider, { colorMode: "light" },
        React__default.createElement(Component, { ...props })));
}
InAppMessageDisplay.BannerMessage = BannerMessage;
InAppMessageDisplay.CarouselMessage = CarouselMessage;
InAppMessageDisplay.FullScreenMessage = FullScreenMessage;
InAppMessageDisplay.ModalMessage = ModalMessage;

export { InAppMessageDisplay as default };
