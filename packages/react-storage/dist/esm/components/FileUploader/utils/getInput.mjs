import { fetchAuthSession } from 'aws-amplify/auth';
import { isTypedFunction, isString } from '@aws-amplify/ui';
import { resolveFile } from './resolveFile.mjs';

const getInput = ({ accessLevel, file, key, onProgress, path, processFile, useAccelerateEndpoint, }) => {
    return async () => {
        const hasCallbackPath = isTypedFunction(path);
        const hasStringPath = isString(path);
        const hasKeyInput = !!accessLevel && !hasCallbackPath;
        const { file: data, key: processedKey, ...rest } = await resolveFile({ file, key, processFile });
        const contentType = file.type || 'binary/octet-stream';
        // IMPORTANT: always pass `...rest` here for backwards compatibility
        const options = { contentType, onProgress, useAccelerateEndpoint, ...rest };
        let inputResult;
        if (hasKeyInput) {
            // legacy handling of `path` is to prefix to `fileKey`
            const resolvedKey = hasStringPath
                ? `${path}${processedKey}`
                : processedKey;
            inputResult = {
                data,
                key: resolvedKey,
                options: { ...options, accessLevel },
            };
        }
        else {
            const { identityId } = await fetchAuthSession();
            const resolvedPath = `${hasCallbackPath ? path({ identityId }) : path}${processedKey}`;
            inputResult = { data: file, path: resolvedPath, options };
        }
        return inputResult;
    };
};

export { getInput };
