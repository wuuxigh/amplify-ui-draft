import { DataState } from '@aws-amplify/ui-react-core';
import { V6Client } from '@aws-amplify/api-graphql';
import { getSchema } from '../types';
export interface UseAIGenerationHookWrapper<Key extends keyof AIGenerationClient<Schema>['generations'], Schema extends Record<any, any>> {
    useAIGeneration: <U extends Key>(routeName: U) => [
        Awaited<DataState<Schema[U]['returnType']>>,
        (input: Schema[U]['args']) => void
    ];
}
export type UseAIGenerationHook<Key extends keyof AIGenerationClient<Schema>['generations'], Schema extends Record<any, any>> = (routeName: Key) => [
    Awaited<DataState<Schema[Key]['returnType']>>,
    (input: Schema[Key]['args']) => void
];
type AIGenerationClient<T extends Record<any, any>> = Pick<V6Client<T>, 'generations'>;
export declare function createUseAIGeneration<Client extends Record<'generations' | 'conversations', Record<string, any>>, Schema extends getSchema<Client>>(client: Client): UseAIGenerationHook<keyof Client['generations'], Client>;
export {};
