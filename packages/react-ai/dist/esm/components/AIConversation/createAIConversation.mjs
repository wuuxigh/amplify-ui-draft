import React__default from 'react';
import Conversation from './views/ConversationView.mjs';
import { ActionsBarControl } from './views/Controls/ActionsBarControl.mjs';
import { AvatarControl } from './views/Controls/AvatarControl.mjs';
import { HeaderControl } from './views/Controls/HeaderControl.mjs';
import { FieldControl } from './views/Controls/FieldControl.mjs';
import { MessagesControl } from './views/Controls/MessagesControl.mjs';
import { PromptControl } from './views/Controls/PromptControl.mjs';
import createProvider from './createProvider.mjs';

/**
 * @experimental
 */
function createAIConversation(input = {}) {
    const { elements, suggestedPrompts, actions, responseComponents, variant, controls, displayText, } = input;
    const Provider = createProvider({
        elements,
        actions,
        suggestedPrompts,
        responseComponents,
        variant,
        controls,
        displayText,
    });
    function AIConversation(props) {
        const { messages, avatars, handleSendMessage, isLoading } = props;
        return (React__default.createElement(Provider, { messages: messages, avatars: avatars, handleSendMessage: handleSendMessage, isLoading: isLoading },
            React__default.createElement(Conversation, null)));
    }
    const Controls = {
        ActionsBar: ActionsBarControl,
        Avatars: AvatarControl,
        Field: FieldControl,
        Header: HeaderControl,
        Messages: MessagesControl,
        SuggestedPrompts: PromptControl,
    };
    AIConversation.Provider = Provider;
    AIConversation.Conversation = Conversation;
    AIConversation.Controls = Controls;
    return { AIConversation };
}

export { createAIConversation };
