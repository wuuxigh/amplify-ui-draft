/// <reference types="react" />
import { FileUploaderDisplayTextDefault } from '../../utils';
export interface FileListFooterProps {
    remainingFilesCount: number;
    displayText: FileUploaderDisplayTextDefault;
    onClearAll: () => void;
    onUploadAll: () => void;
}
export declare function FileListFooter({ displayText, remainingFilesCount, onClearAll, onUploadAll, }: FileListFooterProps): JSX.Element;
