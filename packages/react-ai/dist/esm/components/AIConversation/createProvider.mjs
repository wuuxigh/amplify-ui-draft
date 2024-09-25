import React__default from 'react';
import { ElementsProvider } from '@aws-amplify/ui-react-core/elements';
import { defaultAIConversationDisplayTextEn } from './displayText.mjs';
import { ActionsProvider } from './context/ActionsContext.mjs';
import { AvatarsProvider } from './context/AvatarsContext.mjs';
import { ConversationInputContextProvider } from './context/ConversationInputContext.mjs';
import { MessagesProvider } from './context/MessagesContext.mjs';
import { SuggestedPromptProvider } from './context/SuggestedPromptsContext.mjs';
import { MessageVariantProvider } from './context/MessageVariantContext.mjs';
import { ConversationDisplayTextProvider } from './context/DisplayTextContext.mjs';
import { ControlsProvider } from './context/ControlsContext.mjs';
import { LoadingContextProvider } from './context/LoadingContext.mjs';
import { ResponseComponentsProvider } from './context/ResponseComponentsContext.mjs';
import { SendMessageContextProvider } from './context/SendMessageContext.mjs';
import './context/elements/definitions.mjs';

function createProvider({ elements, actions, suggestedPrompts, responseComponents, variant, controls, displayText, }) {
    return function Provider({ children, messages, avatars, handleSendMessage, isLoading, }) {
        const _displayText = {
            ...defaultAIConversationDisplayTextEn,
            ...displayText,
        };
        return (React__default.createElement(ElementsProvider, { elements: elements },
            React__default.createElement(ControlsProvider, { controls: controls },
                React__default.createElement(SuggestedPromptProvider, { suggestedPrompts: suggestedPrompts },
                    React__default.createElement(ResponseComponentsProvider, { responseComponents: responseComponents },
                        React__default.createElement(ConversationDisplayTextProvider, { ..._displayText },
                            React__default.createElement(ConversationInputContextProvider, null,
                                React__default.createElement(SendMessageContextProvider, { handleSendMessage: handleSendMessage },
                                    React__default.createElement(AvatarsProvider, { avatars: avatars },
                                        React__default.createElement(ActionsProvider, { actions: actions },
                                            React__default.createElement(MessageVariantProvider, { variant: variant },
                                                React__default.createElement(MessagesProvider, { messages: messages },
                                                    React__default.createElement(LoadingContextProvider, { isLoading: isLoading }, children)))))))))))));
    };
}

export { createProvider as default };
