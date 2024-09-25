import { createContextUtilities } from '@aws-amplify/ui-react-core';
import { defaultAIConversationDisplayTextEn } from '../displayText.mjs';

const { ConversationDisplayTextContext, ConversationDisplayTextProvider, useConversationDisplayText, } = createContextUtilities({
    contextName: 'ConversationDisplayText',
    defaultValue: defaultAIConversationDisplayTextEn,
});

export { ConversationDisplayTextContext, ConversationDisplayTextProvider, useConversationDisplayText };
