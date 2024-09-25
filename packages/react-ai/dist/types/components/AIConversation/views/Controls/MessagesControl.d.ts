import React from 'react';
import { AIConversationElements } from '../../context/elements';
import { ActionsBarControl } from './ActionsBarControl';
import { AvatarControl } from './AvatarControl';
import { ConversationMessage } from '../../../../types';
export declare const MessageControl: MessageControl;
interface MessageControl<T extends Partial<AIConversationElements> = AIConversationElements> {
    (props: {
        message: ConversationMessage;
    }): JSX.Element;
    Container: T['View'];
    MediaContent: T['Image'];
    TextContent: T['Text'];
}
export declare const MessagesControl: MessagesControl;
export interface MessagesControl {
    (props: {
        renderMessage?: (message: ConversationMessage) => React.ReactNode;
    }): JSX.Element;
    ActionsBar: ActionsBarControl;
    Avatar: AvatarControl;
    Container: AIConversationElements['View'];
    HeaderContainer: AIConversationElements['View'];
    Layout: AIConversationElements['View'];
    Message: MessageControl;
    Separator: AIConversationElements['Span'];
}
export {};
