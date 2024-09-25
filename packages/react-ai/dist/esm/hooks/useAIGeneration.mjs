import { useDataState } from '@aws-amplify/ui-react-core';

function createUseAIGeneration(client) {
    const useAIGeneration = (routeName) => {
        const handleGenerate = client.generations[routeName];
        const updateAIGenerationStateAction = async (_prev, input) => {
            const result = await handleGenerate(input);
            // handleGenerate returns a Promised wrapper around Schema[Key]['returnType'] which includes data, errors, and clientExtensions
            // The type of data is Schema[Key]['returnType'] which useDataState also wraps in a data return
            // TODO: follow up with how to type handleGenerate to properly return the promise wrapper shape
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            const data = result.data;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            const graphqlErrors = result.errors;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment
            return { ...data, ...(graphqlErrors ? { graphqlErrors } : {}) };
        };
        return useDataState(updateAIGenerationStateAction, {});
    };
    return useAIGeneration;
}

export { createUseAIGeneration };
