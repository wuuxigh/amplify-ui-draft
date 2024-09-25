import { PathCallback } from '../../utils';
import { FileUploaderProps } from '../../types';
import { UseFileUploader } from '../useFileUploader';
export interface UseUploadFilesProps extends Pick<FileUploaderProps, 'isResumable' | 'onUploadSuccess' | 'onUploadError' | 'onUploadStart' | 'maxFileCount' | 'processFile' | 'useAccelerateEndpoint'>, Pick<UseFileUploader, 'setUploadingFile' | 'setUploadProgress' | 'setUploadSuccess' | 'files'> {
    accessLevel?: FileUploaderProps['accessLevel'];
    path?: string | PathCallback;
}
export declare function useUploadFiles({ accessLevel, files, isResumable, maxFileCount, onUploadError, onUploadStart, onUploadSuccess, path, processFile, setUploadingFile, setUploadProgress, setUploadSuccess, useAccelerateEndpoint, }: UseUploadFilesProps): void;
