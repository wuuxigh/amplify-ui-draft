import { DisplayTextTemplate } from '@aws-amplify/ui';
export type ConversationDisplayText = {
    getMessageTimestampText?: (date: Date) => string;
};
export declare const defaultAIConversationDisplayTextEn: Required<AIConversationDisplayText>;
export type AIConversationDisplayText = DisplayTextTemplate<ConversationDisplayText>;
