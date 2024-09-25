import React from 'react';
import { AIConversationElements } from '../../context';
export declare const PromptControl: PromptControl;
export declare const AutoHidablePromptControl: () => JSX.Element | undefined;
export interface PromptControl {
    (): React.JSX.Element;
    Container: AIConversationElements['View'];
    Header: AIConversationElements['Heading'];
    Icon: AIConversationElements['Icon'];
    PromptGroup: AIConversationElements['View'];
    PromptCard: AIConversationElements['Button'];
}
