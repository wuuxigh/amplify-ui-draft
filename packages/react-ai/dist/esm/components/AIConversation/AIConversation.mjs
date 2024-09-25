import * as React from 'react';
import { Text, Flex, ScrollView } from '@aws-amplify/ui-react';
import { useIcons, IconAssistant, IconUser } from '@aws-amplify/ui-react/internal';
import { MessagesControl } from './views/Controls/MessagesControl.mjs';
import './context/elements/definitions.mjs';
import './views/Controls/ActionsBarControl.mjs';
import './views/Controls/AvatarControl.mjs';
import './views/Controls/HeaderControl.mjs';
import { FieldControl } from './views/Controls/FieldControl.mjs';
import { AutoHidablePromptControl } from './views/Controls/PromptControl.mjs';
import { MessageList } from './views/default/MessageList.mjs';
import { Form } from './views/default/Form.mjs';
import { PromptList } from './views/default/PromptList.mjs';
import { ComponentClassName } from '@aws-amplify/ui';
import createProvider from './createProvider.mjs';

function AIConversationBase({ actions, avatars, controls, handleSendMessage, messages, responseComponents, suggestedPrompts, variant, isLoading, displayText, }) {
    const icons = useIcons('aiConversation');
    const defaultAvatars = {
        ai: {
            username: 'Assistant',
            avatar: icons?.assistant ?? React.createElement(IconAssistant, null),
        },
        user: {
            username: 'User',
            avatar: icons?.user ?? React.createElement(IconUser, null),
        },
    };
    const Provider = createProvider({
        elements: {
            Text: React.forwardRef(function _Text(props, ref) {
                return React.createElement(Text, { ...props, ref: ref });
            }),
        },
        actions,
        suggestedPrompts,
        responseComponents,
        variant,
        controls: {
            MessageList,
            PromptList,
            Form,
            ...controls,
        },
        displayText,
    });
    const providerProps = {
        messages,
        handleSendMessage,
        avatars: {
            ...defaultAvatars,
            ...avatars,
        },
        isLoading,
    };
    return (React.createElement(Provider, { ...providerProps },
        React.createElement(Flex, { className: ComponentClassName.AIConversation },
            React.createElement(ScrollView, { autoScroll: "smooth", flex: "1" },
                React.createElement(AutoHidablePromptControl, null),
                React.createElement(MessagesControl, null)),
            React.createElement(FieldControl, null))));
}
/**
 * @experimental
 */
const AIConversation = Object.assign(AIConversationBase, {
    MessageList,
    PromptList,
    Form,
});

export { AIConversation };
