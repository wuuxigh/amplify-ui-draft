/// <reference types="react" />
import { FileUploaderDisplayTextDefault as StorageManagerDisplayTextDefault } from '../../../FileUploader/utils';
export interface FileListFooterProps {
    remainingFilesCount: number;
    displayText: StorageManagerDisplayTextDefault;
    onClearAll: () => void;
    onUploadAll: () => void;
}
export declare function FileListFooter({ displayText, remainingFilesCount, onClearAll, onUploadAll, }: FileListFooterProps): JSX.Element;
