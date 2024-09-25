import React from 'react';
import { AIConversationElements } from '../../context/elements';
export declare const HeaderControl: HeaderControl;
export interface HeaderControl {
    (): React.JSX.Element;
    Container: AIConversationElements['View'];
    Button: AIConversationElements['Button'];
    Text: AIConversationElements['Text'];
}
