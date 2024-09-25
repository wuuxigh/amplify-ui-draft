import React__default from 'react';
import { classNames } from '@aws-amplify/ui';
import { useBreakpointValue, Flex } from '@aws-amplify/ui-react';
import '../hooks/useMessageImage/useMessageImage.mjs';
import useMessageProps from '../hooks/useMessageProps/useMessageProps.mjs';
import { MessageLayout } from '../MessageLayout/MessageLayout.mjs';
import { BLOCK_CLASS } from './constants.mjs';

function BannerMessage(props) {
    const messageProps = useMessageProps(props);
    const shouldBeFullWidth = useBreakpointValue([true, true, false]);
    const { shouldRenderMessage, styles } = messageProps;
    if (!shouldRenderMessage) {
        return null;
    }
    const { alignment = 'right', position = 'top' } = props;
    const isCenterMiddle = alignment === 'center' && position === 'middle';
    return (React__default.createElement(Flex, { className: classNames(BLOCK_CLASS, {
            [`${BLOCK_CLASS}--${position}`]: !isCenterMiddle,
            [`${BLOCK_CLASS}--${alignment}`]: !isCenterMiddle,
            [`${BLOCK_CLASS}--center-middle`]: isCenterMiddle,
            [`${BLOCK_CLASS}--full-width`]: shouldBeFullWidth,
        }), role: "dialog", testId: `inappmessaging-${position}banner-dialog` },
        React__default.createElement(MessageLayout, { ...props, ...messageProps, orientation: "horizontal", buttonSize: "small", styles: styles })));
}

export { BannerMessage };
