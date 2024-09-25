import { createUseAIGeneration } from './useAIGeneration.mjs';
import { createUseAIConversation } from './useAIConversation.mjs';

/**
 * @experimental
 */
function createAIHooks(_client) {
    const useAIConversation = createUseAIConversation(_client);
    const useAIGeneration = createUseAIGeneration(_client);
    return { useAIConversation, useAIGeneration };
}

export { createAIHooks };
