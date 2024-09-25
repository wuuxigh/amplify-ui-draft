import * as React from 'react';
import { classNames, isEmpty } from '@aws-amplify/ui';
import { Flex, Image, Heading, Text, ButtonGroup, Button } from '@aws-amplify/ui-react';
import { CloseIconButton } from '../CloseIconButton/CloseIconButton.mjs';
import { CLOSE_BUTTON_CLASS, BLOCK_CLASS, MESSAGE_LAYOUT_TEST_ID, CONTENT_CLASS, CONTENT_TEST_ID, IMAGE_CONTAINER_CLASS, IMAGE_CONTAINER_TEST_ID, TEXT_CONTAINER_CLASS, TEXT_CONTAINER_TEST_ID, HEADER_CLASS, HEADER_TEXT_TEST_ID, BODY_TEXT_TEST_ID, BUTTON_GROUP_TEST_ID, BUTTON_CLASS, SECONDARY_BUTTON_TEST_ID, PRIMARY_BUTTON_TEST_ID } from './constants.mjs';
import { getButtonModifier } from './utils.mjs';

const isMessageButton = (button) => !isEmpty(button);
function MessageLayout({ body, buttonSize, hasRenderableImage, header, image, onClose, orientation = 'vertical', primaryButton, secondaryButton, styles, }) {
    const buttonModifiers = React.useMemo(() => ({
        primary: getButtonModifier(styles.primaryButton),
        secondary: getButtonModifier(styles.secondaryButton),
    }), [styles]);
    const isHorizontal = orientation === 'horizontal';
    const closeButton = (React.createElement(CloseIconButton, { className: CLOSE_BUTTON_CLASS, onClick: onClose, style: styles.closeIconButton }));
    const hasPrimaryButton = isMessageButton(primaryButton);
    const hasSecondaryButton = isMessageButton(secondaryButton);
    const hasButtons = hasPrimaryButton || hasSecondaryButton;
    return (React.createElement(Flex, { className: BLOCK_CLASS, "data-testid": MESSAGE_LAYOUT_TEST_ID, style: styles.container },
        !isHorizontal && React.createElement(Flex, { justifyContent: "flex-end" }, closeButton),
        React.createElement(Flex, { className: classNames(CONTENT_CLASS, `${CONTENT_CLASS}--${orientation}`), "data-testid": CONTENT_TEST_ID },
            hasRenderableImage && (React.createElement(Flex, { className: classNames(IMAGE_CONTAINER_CLASS, `${IMAGE_CONTAINER_CLASS}--${orientation}`), "data-testid": IMAGE_CONTAINER_TEST_ID },
                React.createElement(Image, { alt: "In-App Message Image", src: image?.src, style: styles.image }))),
            React.createElement(Flex, { className: classNames(TEXT_CONTAINER_CLASS, `${TEXT_CONTAINER_CLASS}--${orientation}`), "data-testid": TEXT_CONTAINER_TEST_ID },
                header?.content && (React.createElement(Heading, { className: HEADER_CLASS, isTruncated: true, level: 2, style: styles.header, testId: HEADER_TEXT_TEST_ID }, header.content)),
                body?.content && (React.createElement(Text, { style: styles.body, testId: BODY_TEXT_TEST_ID }, body.content))),
            isHorizontal && React.createElement(Flex, { alignItems: "flex-start" }, closeButton)),
        hasButtons && (React.createElement(ButtonGroup, { size: buttonSize, testId: BUTTON_GROUP_TEST_ID },
            hasSecondaryButton && (React.createElement(Button, { className: classNames(BUTTON_CLASS, `${BUTTON_CLASS}--${buttonModifiers.secondary}`), onClick: secondaryButton.onAction, style: styles.secondaryButton, testId: SECONDARY_BUTTON_TEST_ID }, secondaryButton.title)),
            hasPrimaryButton && (React.createElement(Button, { className: classNames(BUTTON_CLASS, `${BUTTON_CLASS}--${buttonModifiers.primary}`), onClick: primaryButton.onAction, style: styles.primaryButton, testId: PRIMARY_BUTTON_TEST_ID }, primaryButton.title))))));
}

export { MessageLayout };
