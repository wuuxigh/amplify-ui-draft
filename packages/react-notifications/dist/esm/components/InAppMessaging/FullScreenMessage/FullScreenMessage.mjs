import * as React from 'react';
import { classNames } from '@aws-amplify/ui';
import { useBreakpointValue, Flex } from '@aws-amplify/ui-react';
import { withBackdrop } from '../Backdrop/withBackdrop.mjs';
import '../hooks/useMessageImage/useMessageImage.mjs';
import useMessageProps from '../hooks/useMessageProps/useMessageProps.mjs';
import { MessageLayout } from '../MessageLayout/MessageLayout.mjs';
import { BLOCK_CLASS } from './constants.mjs';

function FullScreenMessage(props) {
    const messageProps = useMessageProps(props);
    const shouldBeFullScreen = useBreakpointValue([true, true, false]);
    const { shouldRenderMessage, styles } = messageProps;
    const { onClose: onClick } = props;
    if (!shouldRenderMessage) {
        return null;
    }
    const Message = () => (React.createElement(Flex, { className: classNames(BLOCK_CLASS, {
            [`${BLOCK_CLASS}--fullscreen`]: shouldBeFullScreen,
        }), role: "dialog", testId: "inappmessaging-fullscreen-dialog" },
        React.createElement(MessageLayout, { ...props, ...messageProps, styles: styles })));
    if (shouldBeFullScreen) {
        return React.createElement(Message, null);
    }
    const MessageWithBackdrop = withBackdrop(Message, { onClick });
    return React.createElement(MessageWithBackdrop, null);
}

export { FullScreenMessage };
