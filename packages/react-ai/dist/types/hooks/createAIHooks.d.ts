import { UseAIGenerationHookWrapper } from './useAIGeneration';
import { UseAIConversationHook } from './useAIConversation';
import { getSchema } from '../types';
type UseAIHooks<Client extends Record<'generations' | 'conversations', Record<string, any>>, Schema extends Record<any, any>> = {
    useAIConversation: UseAIConversationHook<Extract<keyof Client['conversations'], string>>;
} & UseAIGenerationHookWrapper<keyof Client['generations'], Schema>;
/**
 * @experimental
 */
export declare function createAIHooks<Client extends Record<'generations' | 'conversations', Record<string, any>>, Schema extends getSchema<Client>>(_client: Client): UseAIHooks<Client, Schema>;
export {};
