import { formatDate } from './utils.mjs';

const defaultAIConversationDisplayTextEn = {
    getMessageTimestampText: (date) => formatDate(date),
};

export { defaultAIConversationDisplayTextEn };
