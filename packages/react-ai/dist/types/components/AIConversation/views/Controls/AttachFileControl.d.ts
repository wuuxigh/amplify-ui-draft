import React from 'react';
import { AIConversationElements } from '../../context/elements';
export declare const AttachFileControl: AttachFileControl;
export interface AttachFileControl {
    (): React.JSX.Element;
    Container: AIConversationElements['View'];
    Icon: AIConversationElements['Icon'];
    Button: AIConversationElements['Button'];
}
