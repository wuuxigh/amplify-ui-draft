import React__default from 'react';
import { Flex, View } from '@aws-amplify/ui-react';
import { Backdrop } from './Backdrop.mjs';

function withBackdrop(Content, options = {}) {
    return function ContentWithBackdrop(props) {
        return (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(Backdrop, { ...options }),
            React__default.createElement(Flex, { className: "amplify-inappmessaging-backdrop-content-container" },
                React__default.createElement(View, { className: "amplify-inappmessaging-backdrop-content" },
                    React__default.createElement(Content, { ...props })))));
    };
}

export { withBackdrop };
