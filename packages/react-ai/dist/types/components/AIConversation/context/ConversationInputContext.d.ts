import React from 'react';
export interface ConversationInput {
    text?: string;
    files?: File[];
}
export interface ConversationInputContext {
    input?: ConversationInput;
    setInput?: React.Dispatch<React.SetStateAction<ConversationInput | undefined>>;
}
export declare const ConversationInputContext: React.Context<ConversationInputContext>;
export declare const ConversationInputContextProvider: ({ children, }: {
    children?: React.ReactNode;
}) => JSX.Element;
