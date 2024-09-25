import * as React from 'react';
import { Flex, Button } from '@aws-amplify/ui-react';
import { ComponentClassName } from '@aws-amplify/ui';

const PromptList = ({ setInput, suggestedPrompts = [], }) => {
    return (React.createElement(Flex, null, suggestedPrompts.map((prompt) => {
        return (React.createElement(Button, { className: ComponentClassName.AIConversationPrompt, key: prompt.inputText, onClick: () => {
                setInput?.((prevInput) => ({
                    ...prevInput,
                    text: prompt.inputText,
                }));
            } }, prompt.header));
    })));
};

export { PromptList };
