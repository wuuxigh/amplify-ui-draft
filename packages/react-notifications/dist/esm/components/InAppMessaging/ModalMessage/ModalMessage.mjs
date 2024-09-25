import * as React from 'react';
import { classNames } from '@aws-amplify/ui';
import { useBreakpointValue, Flex } from '@aws-amplify/ui-react';
import '../hooks/useMessageImage/useMessageImage.mjs';
import useMessageProps from '../hooks/useMessageProps/useMessageProps.mjs';
import { MessageLayout } from '../MessageLayout/MessageLayout.mjs';
import { BLOCK_CLASS, DIALOG_CLASS } from './constants.mjs';

function ModalMessage(props) {
    const messageProps = useMessageProps(props);
    const shouldBeFullWidth = useBreakpointValue([true, true, false]);
    const { shouldRenderMessage, styles } = messageProps;
    if (!shouldRenderMessage) {
        return null;
    }
    return (React.createElement(Flex, { className: BLOCK_CLASS },
        React.createElement(Flex, { className: classNames(DIALOG_CLASS, {
                [`${DIALOG_CLASS}--full-width`]: shouldBeFullWidth,
            }), role: "dialog", testId: "inappmessaging-modal-dialog" },
            React.createElement(MessageLayout, { ...props, ...messageProps, styles: styles }))));
}

export { ModalMessage };
