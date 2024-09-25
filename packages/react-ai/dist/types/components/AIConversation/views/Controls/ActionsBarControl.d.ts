import React from 'react';
import { AIConversationElements } from '../../context/elements';
import { ConversationMessage } from '../../../../types';
export declare const ActionsBarControl: ActionsBarControl;
export interface ActionsBarControl {
    (props: {
        message: ConversationMessage;
        focusable?: boolean;
    }): React.JSX.Element;
    Button: AIConversationElements['Button'];
    Container: AIConversationElements['View'];
    Icon: AIConversationElements['Span'];
}
