import React__default from 'react';

const SuggestedPromptsContext = React__default.createContext(undefined);
const SuggestedPromptProvider = ({ children, suggestedPrompts, }) => {
    return (React__default.createElement(SuggestedPromptsContext.Provider, { value: suggestedPrompts }, children));
};

export { SuggestedPromptProvider, SuggestedPromptsContext };
