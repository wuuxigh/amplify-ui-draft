import React__default from 'react';
import { withBaseElementProps } from '@aws-amplify/ui-react-core/elements';
import { AIConversationElements } from '../../context/elements/definitions.mjs';

const { View, Button, Icon, Text } = AIConversationElements;
const HEADER_BLOCK = 'ai-header';
const HeaderTextBase = withBaseElementProps(Text, {
    className: `${HEADER_BLOCK}__text`,
});
const HeaderText = React__default.forwardRef(function HeaderText(props, ref) {
    return React__default.createElement(HeaderTextBase, { ...props, ref: ref });
});
const CloseIcon = withBaseElementProps(Icon, {
    className: `${HEADER_BLOCK}__icon`,
    variant: 'close',
});
const CloseButtonBase = withBaseElementProps(Button, {
    className: `${HEADER_BLOCK}__button`,
});
const CloseButton = React__default.forwardRef(function CloseButton(props, ref) {
    return React__default.createElement(CloseButtonBase, { ...props, ref: ref });
});
const Container = withBaseElementProps(View, {
    className: `${HEADER_BLOCK}__container`,
});
const HeaderControl = () => (React__default.createElement(Container, null,
    React__default.createElement(HeaderText, null, "Raven Chat"),
    React__default.createElement(CloseButton, null,
        React__default.createElement(CloseIcon, null))));
HeaderControl.Container = Container;
HeaderControl.Text = HeaderText;
HeaderControl.Button = CloseButton;

export { HeaderControl };
