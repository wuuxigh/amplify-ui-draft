import React from 'react';
import { AIConversationElements } from '../../context/elements';
import { AttachFileControl } from './AttachFileControl';
export declare const FieldControl: FieldControl;
export interface FieldControl {
    (): React.JSX.Element;
    AttachFile: AttachFileControl;
    InputContainer: AIConversationElements['View'];
    Label: AIConversationElements['Label'];
    TextInput: AIConversationElements['TextArea'];
    SendButton: AIConversationElements['Button'];
    SendIcon: AIConversationElements['Icon'];
}
