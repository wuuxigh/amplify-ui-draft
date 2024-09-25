import React__default from 'react';
import { InAppMessagingProvider } from '@aws-amplify/ui-react-core-notifications';
import InAppMessageDisplay from '../InAppMessageDisplay/InAppMessageDisplay.mjs';

function withInAppMessaging(Component, options) {
    return function WrappedWithInAppMessaging(props) {
        return (React__default.createElement(InAppMessagingProvider, null,
            React__default.createElement(InAppMessageDisplay, { ...options }),
            React__default.createElement(Component, { ...props })));
    };
}

export { withInAppMessaging as default };
