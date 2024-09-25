import React__default from 'react';
import { withBaseElementProps } from '@aws-amplify/ui-react-core/elements';
import '../../context/ActionsContext.mjs';
import '../../context/AvatarsContext.mjs';
import '../../context/ConversationInputContext.mjs';
import { RoleContext, MessagesContext } from '../../context/MessagesContext.mjs';
import '../../context/SuggestedPromptsContext.mjs';
import { MessageVariantContext } from '../../context/MessageVariantContext.mjs';
import { useConversationDisplayText } from '../../context/DisplayTextContext.mjs';
import { ControlsContext } from '../../context/ControlsContext.mjs';
import '../../context/LoadingContext.mjs';
import { ResponseComponentsContext, RESPONSE_COMPONENT_PREFIX } from '../../context/ResponseComponentsContext.mjs';
import '../../context/SendMessageContext.mjs';
import { AIConversationElements } from '../../context/elements/definitions.mjs';
import { convertBufferToBase64 } from '../../utils.mjs';
import { ActionsBarControl } from './ActionsBarControl.mjs';
import { AvatarControl } from './AvatarControl.mjs';

const { Image, Span, Text, View } = AIConversationElements;
const MESSAGES_BLOCK = 'ai-messages';
const MESSAGE_BLOCK = 'ai-message';
const MediaContentBase = withBaseElementProps(Image, {
    alt: 'Image attachment',
});
const MediaContent = React__default.forwardRef(function MediaContent(props, ref) {
    const variant = React__default.useContext(MessageVariantContext);
    const role = React__default.useContext(RoleContext);
    return (React__default.createElement(MediaContentBase, { ref: ref, className: `${MESSAGE_BLOCK}__image ${MESSAGE_BLOCK}__image--${variant} ${MESSAGE_BLOCK}__image--${role}`, ...props }));
});
const TextContent = React__default.forwardRef(function TextContent(props, ref) {
    return React__default.createElement(Text, { ref: ref, className: `${MESSAGE_BLOCK}__text`, ...props });
});
const ContentContainer = React__default.forwardRef(function ContentContainer(props, ref) {
    const variant = React__default.useContext(MessageVariantContext);
    return (React__default.createElement(View, { "data-testid": 'content', className: `${MESSAGE_BLOCK}__content ${MESSAGE_BLOCK}__content--${variant}`, ref: ref, ...props }));
});
const MessageControl = ({ message }) => {
    const responseComponents = React__default.useContext(ResponseComponentsContext);
    return (React__default.createElement(ContentContainer, null, message.content.map((content, index) => {
        if (content.text) {
            return (React__default.createElement(TextContent, { "data-testid": 'text-content', key: index }, content.text));
        }
        else if (content.image) {
            return (React__default.createElement(MediaContent, { "data-testid": 'image-content', key: index, src: convertBufferToBase64(content.image?.source.bytes, content.image?.format) }));
        }
        else if (content.toolUse) {
            // For now tool use is limited to custom response components
            const { name, input } = content.toolUse;
            if (!responseComponents ||
                !name ||
                !name.startsWith(RESPONSE_COMPONENT_PREFIX)) {
                return;
            }
            else {
                const response = responseComponents[name];
                const CustomComponent = response.component;
                return React__default.createElement(CustomComponent, { ...input, key: index });
            }
        }
    })));
};
MessageControl.Container = ContentContainer;
MessageControl.MediaContent = MediaContent;
MessageControl.TextContent = TextContent;
const Separator = withBaseElementProps(Span, {
    'aria-hidden': true,
    children: '|',
    className: `${MESSAGE_BLOCK}__separator`,
});
const Timestamp = withBaseElementProps(Text, {
    className: `${MESSAGE_BLOCK}__timestamp`,
});
const HeaderContainer = React__default.forwardRef(function HeaderContainer(props, ref) {
    const variant = React__default.useContext(MessageVariantContext);
    return (React__default.createElement(View, { ref: ref, className: `${MESSAGE_BLOCK}__header__container ${MESSAGE_BLOCK}__header__container--${variant}`, ...props }));
});
const MessageContainer = React__default.forwardRef(function MessageContainer(props, ref) {
    const variant = React__default.useContext(MessageVariantContext);
    const role = React__default.useContext(RoleContext);
    return (React__default.createElement(View, { ref: ref, className: `${MESSAGE_BLOCK} ${MESSAGE_BLOCK}--${variant} ${MESSAGE_BLOCK}--${role}`, ...props }));
});
const Layout = React__default.forwardRef(function Layout(props, ref) {
    const variant = React__default.useContext(MessageVariantContext);
    return (React__default.createElement(View, { ref: ref, className: `${MESSAGES_BLOCK}__container ${MESSAGES_BLOCK}__container--${variant}`, "aria-live": 'assertive', ...props }));
});
const MessagesControl = ({ renderMessage }) => {
    const messages = React__default.useContext(MessagesContext);
    const controls = React__default.useContext(ControlsContext);
    const { getMessageTimestampText } = useConversationDisplayText();
    const messagesRef = React__default.useRef([]);
    const [focusedItemIndex, setFocusedItemIndex] = React__default.useState(messages ? messages.length - 1 : 0);
    const handleFocus = (index) => setFocusedItemIndex(index);
    const onKeyDown = React__default.useCallback((index, { key }) => {
        let newIndex;
        switch (key) {
            case 'ArrowUp':
                newIndex = Math.max(0, index - 1);
                setFocusedItemIndex(newIndex);
                messagesRef.current[newIndex]?.focus();
                break;
            case 'ArrowDown':
                newIndex = Math.min(index + 1, messages.length - 1);
                setFocusedItemIndex(newIndex);
                messagesRef.current[newIndex]?.focus();
                break;
            case 'Home':
                newIndex = 0;
                setFocusedItemIndex(newIndex);
                messagesRef.current[newIndex]?.focus();
                break;
            case 'End':
                newIndex = messages.length - 1;
                setFocusedItemIndex(newIndex);
                messagesRef.current[newIndex]?.focus();
                break;
        }
        return;
    }, [messages]);
    if (controls?.MessageList) {
        return React__default.createElement(controls.MessageList, { messages: messages });
    }
    const messagesWithRenderableContent = messages?.filter((message) => message.content.some((content) => content.image ??
        content.text ??
        content.toolUse?.name.startsWith(RESPONSE_COMPONENT_PREFIX))) ?? [];
    return (React__default.createElement(Layout, null, messagesWithRenderableContent?.map((message, index) => {
        return renderMessage ? (renderMessage(message)) : (React__default.createElement(RoleContext.Provider, { value: message.role, key: `message-${index}` },
            React__default.createElement(MessageContainer, { "data-testid": `message`, key: `message-${index}`, tabIndex: focusedItemIndex === index ? 0 : -1, onFocus: () => handleFocus(index), onKeyDown: (event) => onKeyDown(index, event), ref: (el) => (messagesRef.current[index] = el) },
                React__default.createElement(HeaderContainer, null,
                    React__default.createElement(AvatarControl, null),
                    React__default.createElement(Separator, null),
                    React__default.createElement(Timestamp, null, getMessageTimestampText(new Date(message.createdAt)))),
                React__default.createElement(MessageControl, { message: message }),
                message.role === 'assistant' ? (React__default.createElement(ActionsBarControl, { message: message, focusable: focusedItemIndex === index })) : null)));
    })));
};
MessagesControl.ActionsBar = ActionsBarControl;
MessagesControl.Avatar = AvatarControl;
MessagesControl.Container = MessageContainer;
MessagesControl.HeaderContainer = HeaderContainer;
MessagesControl.Layout = Layout;
MessagesControl.Message = MessageControl;
MessagesControl.Separator = Separator;

export { MessageControl, MessagesControl };
