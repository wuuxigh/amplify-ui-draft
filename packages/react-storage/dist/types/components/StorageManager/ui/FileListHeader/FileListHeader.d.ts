/// <reference types="react" />
import { FileUploaderDisplayTextDefault as StorageManagerDisplayTextDefault } from '../../../FileUploader/utils';
export interface FileListHeaderProps {
    allUploadsSuccessful: boolean;
    displayText: StorageManagerDisplayTextDefault;
    fileCount: number;
    remainingFilesCount: number;
    selectedFilesCount?: number;
}
export declare function FileListHeader({ allUploadsSuccessful, displayText, fileCount, remainingFilesCount, selectedFilesCount, }: FileListHeaderProps): JSX.Element;
