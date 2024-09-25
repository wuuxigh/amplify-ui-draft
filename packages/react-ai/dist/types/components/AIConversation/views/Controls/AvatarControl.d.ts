import React from 'react';
import { AIConversationElements } from '../../context/elements';
export declare const AvatarControl: AvatarControl;
export interface AvatarControl {
    (): React.JSX.Element;
    Container: AIConversationElements['View'];
    DisplayName: AIConversationElements['Text'];
    Icon: AIConversationElements['Span'];
}
