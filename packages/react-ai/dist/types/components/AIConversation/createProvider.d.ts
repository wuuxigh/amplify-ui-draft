import React from 'react';
import { AIConversationInput, AIConversationProps } from './types';
export default function createProvider({ elements, actions, suggestedPrompts, responseComponents, variant, controls, displayText, }: Pick<AIConversationInput, 'elements' | 'actions' | 'suggestedPrompts' | 'responseComponents' | 'variant' | 'controls' | 'displayText'>): ({ children, messages, avatars, handleSendMessage, isLoading, }: {
    children?: React.ReactNode;
} & Pick<AIConversationProps, "avatars" | "messages" | "isLoading" | "handleSendMessage">) => React.JSX.Element;
