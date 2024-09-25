import * as React from 'react';
import { View, Avatar, Text } from '@aws-amplify/ui-react';
import { MessageControl } from '../Controls/MessagesControl.mjs';
import '../../context/ActionsContext.mjs';
import { AvatarsContext } from '../../context/AvatarsContext.mjs';
import '../../context/ConversationInputContext.mjs';
import { RoleContext } from '../../context/MessagesContext.mjs';
import '../../context/SuggestedPromptsContext.mjs';
import { MessageVariantContext } from '../../context/MessageVariantContext.mjs';
import { useConversationDisplayText } from '../../context/DisplayTextContext.mjs';
import '../../context/ControlsContext.mjs';
import { LoadingContext } from '../../context/LoadingContext.mjs';
import { RESPONSE_COMPONENT_PREFIX } from '../../context/ResponseComponentsContext.mjs';
import '../../context/SendMessageContext.mjs';
import '../../context/elements/definitions.mjs';
import { ComponentClassName, classNames, classNameModifier } from '@aws-amplify/ui';

const MessageMeta = ({ message }) => {
    // need to pass this in as props in order for it to be overridable
    const avatars = React.useContext(AvatarsContext);
    const role = React.useContext(RoleContext);
    const { getMessageTimestampText } = useConversationDisplayText();
    // maybe rename 'avatar' to something else
    const avatar = role === 'assistant' ? avatars?.ai : avatars?.user;
    return (React.createElement(View, { className: ComponentClassName.AIConversationMessageSender },
        React.createElement(Text, { className: ComponentClassName.AIConversationMessageSenderUsername }, avatar?.username),
        React.createElement(Text, { className: ComponentClassName.AIConversationMessageSenderTimestamp }, getMessageTimestampText(new Date(message.createdAt)))));
};
const LoadingMessage = () => {
    const avatars = React.useContext(AvatarsContext);
    const variant = React.useContext(MessageVariantContext);
    const avatar = avatars?.ai;
    return (React.createElement(View, { className: classNames(ComponentClassName.AIConversationMessage, classNameModifier(ComponentClassName.AIConversationMessage, variant), classNameModifier(ComponentClassName.AIConversationMessage, 'assistant')) },
        React.createElement(View, { className: ComponentClassName.AIConversationMessageAvatar },
            React.createElement(Avatar, { isLoading: true }, avatar?.avatar)),
        React.createElement(View, { className: ComponentClassName.AIConversationMessageBody },
            React.createElement(View, { className: ComponentClassName.AIConversationMessageSender },
                React.createElement(Text, { className: ComponentClassName.AIConversationMessageSenderUsername }, avatar?.username)))));
};
const Message = ({ message }) => {
    const avatars = React.useContext(AvatarsContext);
    const variant = React.useContext(MessageVariantContext);
    const avatar = message.role === 'assistant' ? avatars?.ai : avatars?.user;
    return (React.createElement(RoleContext.Provider, { value: message.role },
        React.createElement(View, { className: classNames(ComponentClassName.AIConversationMessage, classNameModifier(ComponentClassName.AIConversationMessage, variant), classNameModifier(ComponentClassName.AIConversationMessage, message.role)) },
            React.createElement(View, { className: ComponentClassName.AIConversationMessageAvatar },
                React.createElement(Avatar, null, avatar?.avatar)),
            React.createElement(View, { className: ComponentClassName.AIConversationMessageBody },
                React.createElement(MessageMeta, { message: message }),
                React.createElement(View, { className: ComponentClassName.AIConversationMessageContent },
                    React.createElement(MessageControl, { message: message }))))));
};
const MessageList = ({ messages, }) => {
    const isLoading = React.useContext(LoadingContext);
    const messagesWithRenderableContent = messages?.filter((message) => message.content.some((content) => content.image ??
        content.text ??
        content.toolUse?.name.startsWith(RESPONSE_COMPONENT_PREFIX))) ?? [];
    return (React.createElement(View, { className: ComponentClassName.AIConversationMessageList },
        messagesWithRenderableContent.map((message, i) => (React.createElement(Message, { key: `message-${i}`, message: message }))),
        isLoading ? React.createElement(LoadingMessage, null) : null));
};

export { MessageList };
