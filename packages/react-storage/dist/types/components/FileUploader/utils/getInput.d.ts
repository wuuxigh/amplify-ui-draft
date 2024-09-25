import { StorageAccessLevel } from '@aws-amplify/core';
import { UploadDataWithPathInput, UploadDataInput } from 'aws-amplify/storage';
import { ProcessFile } from '../types';
import { PathCallback, PathInput } from './uploadFile';
export interface GetInputParams {
    accessLevel: StorageAccessLevel | undefined;
    file: File;
    key: string;
    onProgress: NonNullable<UploadDataWithPathInput['options']>['onProgress'];
    path: string | PathCallback | undefined;
    processFile: ProcessFile | undefined;
    useAccelerateEndpoint?: boolean;
}
export declare const getInput: ({ accessLevel, file, key, onProgress, path, processFile, useAccelerateEndpoint, }: GetInputParams) => () => Promise<PathInput | UploadDataInput>;
