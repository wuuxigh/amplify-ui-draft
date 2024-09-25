import { StorageAccessLevel } from '@aws-amplify/core';
import { ImageProps } from '@aws-amplify/ui-react';
export interface StorageImageProps extends Omit<ImageProps, 'src'> {
    /**
     * @deprecated
     * `imgKey` will be replaced with `path` in a future major version of Amplify UI. See https://ui.docs.amplify.aws/react/connected-components/storage/storageimage#props
     */
    imgKey: string;
    /**
     * @deprecated
     * `accessLevel` will be replaced with `path` in a future major version of Amplify UI. See https://ui.docs.amplify.aws/react/connected-components/storage/storageimage#props
     */
    accessLevel: StorageAccessLevel;
    /**
     * @deprecated
     * `identityId` will be replaced with `path` in a future major version of Amplify UI. See https://ui.docs.amplify.aws/react/connected-components/storage/storageimage#props
     */
    identityId?: string;
    fallbackSrc?: string;
    validateObjectExistence?: boolean;
    /**
     * @deprecated use `onGetUrlError`
     *
     * `onStorageGetError` will be replaced with `onGetUrlError` in a future major version of Amplify UI. See https://ui.docs.amplify.aws/react/connected-components/storage/storageimage#props
     */
    onStorageGetError?: (error: Error) => void;
    onGetUrlError?: (error: Error) => void;
    path?: never;
}
type OmittedPropKey = 'accessLevel' | 'imgKey' | 'identityId' | 'onStorageGetError' | 'path';
export interface StorageImagePathProps extends Omit<StorageImageProps, OmittedPropKey> {
    path: string | ((input: {
        identityId?: string;
    }) => string);
    imgKey?: never;
    accessLevel?: never;
    identityId?: never;
    onStorageGetError?: never;
}
export {};
