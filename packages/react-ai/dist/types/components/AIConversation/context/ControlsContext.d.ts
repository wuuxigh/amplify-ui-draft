import React from 'react';
import { ConversationInputContext } from './ConversationInputContext';
import { SuggestedPrompt } from '../types';
import { ConversationMessage } from '../../../types';
export interface ControlsContextProps {
    Form?: React.ComponentType<{
        handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    } & Required<ConversationInputContext>>;
    MessageList?: React.ComponentType<{
        messages: ConversationMessage[];
    }>;
    PromptList?: React.ComponentType<{
        suggestedPrompts?: SuggestedPrompt[];
        setInput: ConversationInputContext['setInput'];
    }>;
}
export declare const ControlsContext: React.Context<ControlsContextProps | undefined>;
export declare const ControlsProvider: ({ children, controls, }: {
    children?: React.ReactNode;
    controls?: ControlsContextProps | undefined;
}) => JSX.Element;
