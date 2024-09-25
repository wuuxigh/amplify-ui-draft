'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ui = require('@aws-amplify/ui');
var uiReact = require('@aws-amplify/ui-react');
var uiReactCore = require('@aws-amplify/ui-react-core');
var internal = require('@aws-amplify/ui-react/internal');
var auth = require('aws-amplify/auth');
var storage = require('aws-amplify/storage');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

var FileStatus;
(function (FileStatus) {
    FileStatus["ADDED"] = "added";
    FileStatus["QUEUED"] = "queued";
    FileStatus["UPLOADING"] = "uploading";
    FileStatus["PAUSED"] = "paused";
    FileStatus["ERROR"] = "error";
    FileStatus["UPLOADED"] = "uploaded";
})(FileStatus || (FileStatus = {}));

var FileUploaderActionTypes;
(function (FileUploaderActionTypes) {
    FileUploaderActionTypes[FileUploaderActionTypes["ADD_FILES"] = 0] = "ADD_FILES";
    FileUploaderActionTypes[FileUploaderActionTypes["CLEAR_FILES"] = 1] = "CLEAR_FILES";
    FileUploaderActionTypes[FileUploaderActionTypes["QUEUE_FILES"] = 2] = "QUEUE_FILES";
    FileUploaderActionTypes[FileUploaderActionTypes["REMOVE_UPLOAD"] = 3] = "REMOVE_UPLOAD";
    FileUploaderActionTypes[FileUploaderActionTypes["SET_STATUS"] = 4] = "SET_STATUS";
    FileUploaderActionTypes[FileUploaderActionTypes["SET_PROCESSED_FILE_KEY"] = 5] = "SET_PROCESSED_FILE_KEY";
    FileUploaderActionTypes[FileUploaderActionTypes["SET_STATUS_UPLOADED"] = 6] = "SET_STATUS_UPLOADED";
    FileUploaderActionTypes[FileUploaderActionTypes["SET_STATUS_UPLOADING"] = 7] = "SET_STATUS_UPLOADING";
    FileUploaderActionTypes[FileUploaderActionTypes["SET_UPLOAD_PROGRESS"] = 8] = "SET_UPLOAD_PROGRESS";
})(FileUploaderActionTypes || (FileUploaderActionTypes = {}));

const updateFiles = (files, nextFileData) => files.reduce((files, currentFile) => {
    if (currentFile.id === nextFileData.id) {
        return [...files, { ...currentFile, ...nextFileData }];
    }
    return [...files, currentFile];
}, []);
function fileUploaderStateReducer(state, action) {
    switch (action.type) {
        case FileUploaderActionTypes.ADD_FILES: {
            const { files, status } = action;
            const newUploads = files.map((file) => {
                const errorText = action.getFileErrorMessage(file);
                return {
                    // make sure id is unique,
                    // we only use it internally and don't send it to Storage
                    id: `${Date.now()}-${file.name}`,
                    file,
                    error: errorText,
                    key: file.name,
                    status: errorText ? FileStatus.ERROR : status,
                    isImage: file.type.startsWith('image/'),
                    progress: -1,
                };
            });
            const newFiles = [...state.files, ...newUploads];
            return { ...state, files: newFiles };
        }
        case FileUploaderActionTypes.CLEAR_FILES: {
            return { ...state, files: [] };
        }
        case FileUploaderActionTypes.QUEUE_FILES: {
            const { files } = state;
            const newFiles = files.reduce((files, currentFile) => [
                ...files,
                {
                    ...currentFile,
                    ...(currentFile.status === FileStatus.ADDED
                        ? { status: FileStatus.QUEUED }
                        : {}),
                },
            ], []);
            return { ...state, files: newFiles };
        }
        case FileUploaderActionTypes.SET_STATUS_UPLOADING: {
            const { id, uploadTask } = action;
            const status = FileStatus.UPLOADING;
            const progress = 0;
            const nextFileData = { status, progress, id, uploadTask };
            const files = updateFiles(state.files, nextFileData);
            return { ...state, files };
        }
        case FileUploaderActionTypes.SET_STATUS_UPLOADED: {
            const files = updateFiles(state.files, action);
            return { ...state, files };
        }
        case FileUploaderActionTypes.SET_UPLOAD_PROGRESS: {
            const { id, progress } = action;
            const files = updateFiles(state.files, { id, progress });
            return { ...state, files };
        }
        case FileUploaderActionTypes.SET_STATUS: {
            const { id, status } = action;
            const files = updateFiles(state.files, { id, status });
            return { ...state, files };
        }
        case FileUploaderActionTypes.REMOVE_UPLOAD: {
            const { id } = action;
            const { files } = state;
            const newFiles = files.reduce((files, currentFile) => {
                // remove by not returning currentFile
                return currentFile.id === id ? [...files] : [...files, currentFile];
            }, []);
            return { ...state, files: newFiles };
        }
    }
}

const addFilesAction = ({ files, status, getFileErrorMessage, }) => ({
    type: FileUploaderActionTypes.ADD_FILES,
    files,
    status,
    getFileErrorMessage,
});
const clearFilesAction = () => ({
    type: FileUploaderActionTypes.CLEAR_FILES,
});
const queueFilesAction = () => ({
    type: FileUploaderActionTypes.QUEUE_FILES,
});
const setUploadingFileAction = ({ id, uploadTask, }) => ({
    type: FileUploaderActionTypes.SET_STATUS_UPLOADING,
    id,
    uploadTask,
});
const setUploadProgressAction = ({ id, progress, }) => ({
    type: FileUploaderActionTypes.SET_UPLOAD_PROGRESS,
    id,
    progress,
});
const setUploadStatusAction = ({ id, status, }) => ({
    type: FileUploaderActionTypes.SET_STATUS,
    id,
    status,
});
const setUploadSuccessAction = ({ id, resolvedKey, }) => ({
    type: FileUploaderActionTypes.SET_STATUS_UPLOADED,
    id,
    resolvedKey,
    status: FileStatus.UPLOADED,
});
const removeUploadAction = ({ id }) => ({
    type: FileUploaderActionTypes.REMOVE_UPLOAD,
    id,
});

const isDefaultFile = (file) => !!(ui.isObject(file) && file.key);
const createFileFromDefault = (file) => isDefaultFile(file)
    ? { ...file, id: file.key, status: FileStatus.UPLOADED }
    : undefined;
function useFileUploader(defaultFiles = []) {
    const [{ files }, dispatch] = React__namespace.default.useReducer(fileUploaderStateReducer, {
        files: (Array.isArray(defaultFiles)
            ? defaultFiles.map(createFileFromDefault).filter((file) => !!file)
            : []),
    });
    const dispatchers = React__namespace.default.useMemo(() => ({
        addFiles: (params) => {
            dispatch(addFilesAction(params));
        },
        clearFiles: () => {
            dispatch(clearFilesAction());
        },
        queueFiles: () => {
            dispatch(queueFilesAction());
        },
        setUploadingFile: (params) => {
            dispatch(setUploadingFileAction(params));
        },
        setUploadProgress: (params) => {
            dispatch(setUploadProgressAction(params));
        },
        setUploadSuccess: (params) => {
            dispatch(setUploadSuccessAction(params));
        },
        setUploadPaused: ({ id }) => {
            dispatch(setUploadStatusAction({ id, status: FileStatus.PAUSED }));
        },
        setUploadResumed: ({ id }) => {
            dispatch(setUploadStatusAction({ id, status: FileStatus.UPLOADING }));
        },
        removeUpload: ({ id }) => {
            dispatch(removeUploadAction({ id }));
        },
    }), []);
    return { ...dispatchers, files };
}

const checkMaxFileSize = ({ file, getFileSizeErrorText, maxFileSize, }) => {
    if (maxFileSize === undefined)
        return '';
    if (file.size > maxFileSize) {
        return getFileSizeErrorText(ui.humanFileSize(maxFileSize, true));
    }
    return '';
};

const defaultFileUploaderDisplayText = {
    getFilesUploadedText(count) {
        return `${count} ${count === 1 ? 'file uploaded' : 'files uploaded'}`;
    },
    getFileSizeErrorText(sizeText) {
        return `File size must be below ${sizeText}`;
    },
    getRemainingFilesText(count) {
        return `${count} ${count === 1 ? 'file' : 'files'} uploading`;
    },
    getSelectedFilesText(count) {
        return `${count} ${count === 1 ? 'file' : 'files'} selected`;
    },
    getUploadingText(percentage) {
        return `Uploading${percentage > 0 ? `: ${percentage}%` : ''}`;
    },
    getUploadButtonText(count) {
        return `Upload ${count} ${count === 1 ? 'file' : 'files'}`;
    },
    getMaxFilesErrorText(count) {
        return `Cannot choose more than ${count} ${count === 1 ? 'file' : 'files'}. Remove files before updating`;
    },
    getErrorText(message) {
        return message;
    },
    doneButtonText: 'Done',
    clearAllButtonText: 'Clear all',
    extensionNotAllowedText: 'Extension not allowed',
    browseFilesText: 'Browse files',
    dropFilesText: 'Drop files here or',
    pauseButtonText: 'Pause',
    resumeButtonText: 'Resume',
    uploadSuccessfulText: 'Uploaded',
    getPausedText(percentage) {
        return `Paused: ${percentage}%`;
    },
};

const filterAllowedFiles = (files, acceptedFileTypes) => {
    // Allow any files if acceptedFileTypes is undefined, empty array, or contains '*'
    if (!acceptedFileTypes ||
        acceptedFileTypes.length === 0 ||
        acceptedFileTypes.includes('*')) {
        return files;
    }
    // Remove any files that are not in the accepted file list
    return files.filter((file) => {
        const fileName = file.name || '';
        const mimeType = (file.type || '').toLowerCase();
        const baseMimeType = mimeType.replace(/\/.*$/, '');
        return acceptedFileTypes.some((type) => {
            const validType = type.trim().toLowerCase();
            if (validType.charAt(0) === '.') {
                return fileName.toLowerCase().endsWith(validType);
            }
            else if (validType.endsWith('/*')) {
                // This is something like a image/* mime type
                return baseMimeType === validType.replace(/\/.*$/, '');
            }
            return mimeType === validType;
        });
    });
};

/**
 * Utility function that takes the processFile prop, along with a file a key
 * and returns a Promise that resolves to { file, key, ..rest }
 * regardless if processFile is defined and if it is sync or async
 */
const resolveFile = ({ processFile, ...input }) => {
    return new Promise((resolve, reject) => {
        const result = ui.isFunction(processFile) ? processFile(input) : input;
        if (result instanceof Promise) {
            result.then(resolve).catch(reject);
        }
        else {
            resolve(result);
        }
    });
};

const getInput = ({ accessLevel, file, key, onProgress, path, processFile, useAccelerateEndpoint, }) => {
    return async () => {
        const hasCallbackPath = ui.isTypedFunction(path);
        const hasStringPath = ui.isString(path);
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
            const { identityId } = await auth.fetchAuthSession();
            const resolvedPath = `${hasCallbackPath ? path({ identityId }) : path}${processedKey}`;
            inputResult = { data: file, path: resolvedPath, options };
        }
        return inputResult;
    };
};

async function uploadFile({ input, onError, onStart, onComplete, }) {
    const resolvedInput = await input();
    const uploadTask = storage.uploadData(resolvedInput);
    const key = resolvedInput?.key ??
        resolvedInput?.path;
    if (ui.isFunction(onStart)) {
        onStart({ key, uploadTask });
    }
    uploadTask.result
        .then((result) => {
        if (ui.isFunction(onComplete) && uploadTask.state === 'SUCCESS') {
            onComplete(result);
        }
    })
        .catch((error) => {
        if (ui.isFunction(onError)) {
            onError({ key, error });
        }
    });
    return uploadTask;
}

function useUploadFiles({ accessLevel, files, isResumable, maxFileCount, onUploadError, onUploadStart, onUploadSuccess, path, processFile, setUploadingFile, setUploadProgress, setUploadSuccess, useAccelerateEndpoint, }) {
    React__namespace.useEffect(() => {
        const filesReadyToUpload = files.filter((file) => file.status === FileStatus.QUEUED);
        if (filesReadyToUpload.length > maxFileCount) {
            return;
        }
        for (const { file, key, id } of filesReadyToUpload) {
            const onProgress = (event) => {
                /**
                 * When a file is zero bytes, the progress.total will equal zero.
                 * Therefore, this will prevent a divide by zero error.
                 */
                const progress = event.totalBytes === undefined || event.totalBytes === 0
                    ? 100
                    : Math.floor((event.transferredBytes / event.totalBytes) * 100);
                setUploadProgress({ id, progress });
            };
            if (file) {
                const input = getInput({
                    accessLevel,
                    file,
                    key,
                    onProgress,
                    path,
                    processFile,
                    useAccelerateEndpoint,
                });
                uploadFile({
                    input,
                    onComplete: (event) => {
                        const resolvedKey = event.key ??
                            event.path;
                        if (ui.isFunction(onUploadSuccess)) {
                            onUploadSuccess({ key: resolvedKey });
                        }
                        setUploadSuccess({ id, resolvedKey });
                    },
                    onError: ({ key, error }) => {
                        if (ui.isFunction(onUploadError)) {
                            onUploadError(error.message, { key });
                        }
                    },
                    onStart: ({ key, uploadTask }) => {
                        if (ui.isFunction(onUploadStart)) {
                            onUploadStart({ key });
                        }
                        setUploadingFile({ id, uploadTask });
                    },
                });
            }
        }
    }, [
        files,
        accessLevel,
        isResumable,
        setUploadProgress,
        setUploadingFile,
        onUploadError,
        onUploadSuccess,
        onUploadStart,
        maxFileCount,
        setUploadSuccess,
        processFile,
        path,
        useAccelerateEndpoint,
    ]);
}

function Container$1({ children, className, }) {
    return React__namespace.default.createElement(uiReact.View, { className: className }, children);
}

function DropZone$1({ children, displayText, inDropZone, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop, testId, }) {
    const { dropFilesText } = displayText;
    const icons = internal.useIcons('storageManager');
    return (React__namespace.default.createElement(uiReact.View, { className: ui.classNames(inDropZone &&
            ui.classNameModifier(ui.ComponentClassName.FileUploaderDropZone, 'active'), ui.ComponentClassName.FileUploaderDropZone), "data-testid": testId, onDragStart: onDragStart, onDragEnter: onDragEnter, onDragLeave: onDragLeave, onDrop: onDrop, onDragOver: onDragOver },
        React__namespace.default.createElement(uiReact.View, { as: "span", "aria-hidden": true, className: ui.ComponentClassName.FileUploaderDropZoneIcon }, icons?.upload ?? React__namespace.default.createElement(internal.IconUpload, null)),
        React__namespace.default.createElement(uiReact.Text, { className: ui.ComponentClassName.FileUploaderDropZoneText }, dropFilesText),
        children));
}

const FileStatusMessage$1 = ({ errorMessage, getPausedText, getUploadingText, percentage, status, uploadSuccessfulText, }) => {
    const icons = internal.useIcons('storageManager');
    switch (status) {
        case FileStatus.UPLOADING: {
            return (React__namespace.default.createElement(uiReact.Text, { className: ui.ComponentClassName.FileUploaderFileStatus }, getUploadingText(percentage)));
        }
        case FileStatus.PAUSED:
            return (React__namespace.default.createElement(uiReact.Text, { className: ui.ComponentClassName.FileUploaderFileStatus }, getPausedText(percentage)));
        case FileStatus.UPLOADED:
            return (React__namespace.default.createElement(uiReact.Text, { className: ui.classNames(ui.ComponentClassName.FileUploaderFileStatus, ui.classNameModifier(ui.ComponentClassName.FileUploaderFileStatus, 'success')) },
                React__namespace.default.createElement(uiReact.View, { as: "span", fontSize: "xl" }, icons?.success ?? React__namespace.default.createElement(internal.IconCheck, null)),
                uploadSuccessfulText));
        case FileStatus.ERROR:
            return (React__namespace.default.createElement(uiReact.Text, { className: ui.classNames(ui.ComponentClassName.FileUploaderFileStatus, ui.classNameModifier(ui.ComponentClassName.FileUploaderFileStatus, 'error')) },
                React__namespace.default.createElement(uiReact.View, { as: "span", fontSize: "xl" }, icons?.error ?? React__namespace.default.createElement(internal.IconError, null)),
                errorMessage));
        default:
            return null;
    }
};

const FileRemoveButton$1 = ({ altText, onClick, }) => {
    const icons = internal.useIcons('storageManager');
    return (React__namespace.default.createElement(uiReact.Button, { size: "small", onClick: onClick, testId: "storage-manager-remove-button" },
        React__namespace.default.createElement(uiReact.VisuallyHidden, null, altText),
        React__namespace.default.createElement(uiReact.View, { as: "span", "aria-hidden": true, fontSize: "medium" }, icons?.remove ?? React__namespace.default.createElement(internal.IconClose, null))));
};

const UploadDetails$1 = ({ displayName, fileSize, }) => {
    return (React__namespace.default.createElement(React__namespace.default.Fragment, null,
        React__namespace.default.createElement(uiReact.View, { className: ui.ComponentClassName.FileUploaderFileMain },
            React__namespace.default.createElement(uiReact.Text, { className: ui.ComponentClassName.FileUploaderFileName }, displayName)),
        React__namespace.default.createElement(uiReact.Text, { as: "span", className: ui.ComponentClassName.FileUploaderFileSize }, fileSize ? ui.humanFileSize(fileSize, true) : '')));
};

const FileThumbnail$1 = ({ fileName, isImage, url, }) => {
    const icons = internal.useIcons('storageManager');
    const thumbnail = isImage ? (React__namespace.default.createElement(uiReact.Image, { alt: fileName, src: url })) : (icons?.file ?? React__namespace.default.createElement(internal.IconFile, null));
    return (React__namespace.default.createElement(uiReact.View, { className: ui.ComponentClassName.FileUploaderFileImage }, thumbnail));
};

function FileControl$1({ onPause, onResume, displayName, errorMessage, isImage, isResumable, loaderIsDeterminate, onRemove, progress, showThumbnails = true, size, status, displayText, thumbnailUrl, }) {
    const { getPausedText, getUploadingText, uploadSuccessfulText, pauseButtonText, resumeButtonText, } = displayText;
    return (React__namespace.default.createElement(uiReact.View, { className: ui.ComponentClassName.FileUploaderFile },
        React__namespace.default.createElement(uiReact.View, { className: ui.ComponentClassName.FileUploaderFileWrapper },
            showThumbnails ? (React__namespace.default.createElement(FileThumbnail$1, { isImage: isImage, fileName: displayName, url: thumbnailUrl })) : null,
            React__namespace.default.createElement(UploadDetails$1, { displayName: displayName, fileSize: size }),
            status === FileStatus.UPLOADING ? (React__namespace.default.createElement(uiReact.Loader, { className: ui.ComponentClassName.FileUploaderLoader, variation: "linear", percentage: progress, isDeterminate: loaderIsDeterminate, isPercentageTextHidden: true })) : null,
            isResumable &&
                (status === FileStatus.UPLOADING || status === FileStatus.PAUSED) ? (status === FileStatus.PAUSED ? (React__namespace.default.createElement(uiReact.Button, { onClick: onResume, size: "small", variation: "link" }, resumeButtonText)) : (React__namespace.default.createElement(uiReact.Button, { onClick: onPause, size: "small", variation: "link" }, pauseButtonText))) : null,
            React__namespace.default.createElement(FileRemoveButton$1, { altText: `Remove file ${displayName}`, onClick: onRemove })),
        React__namespace.default.createElement(FileStatusMessage$1, { uploadSuccessfulText: uploadSuccessfulText, getUploadingText: getUploadingText, getPausedText: getPausedText, status: status, errorMessage: errorMessage, percentage: progress })));
}

function FileList$1({ displayText, files, hasMaxFilesError, isResumable, onCancelUpload, onDeleteUpload, onResume, onPause, showThumbnails, maxFileCount, }) {
    if (files.length < 1) {
        return null;
    }
    const { getMaxFilesErrorText } = displayText;
    const headingMaxFiles = getMaxFilesErrorText(maxFileCount);
    return (React__namespace.default.createElement(uiReact.View, { className: ui.ComponentClassName.FileUploaderFileList },
        files.map((storageFile) => {
            const { file, status, progress, error, key, isImage, id, uploadTask } = storageFile;
            const thumbnailUrl = file && isImage ? URL.createObjectURL(file) : '';
            const loaderIsDeterminate = isResumable ? progress > 0 : true;
            const isUploading = status === FileStatus.UPLOADING;
            const onRemove = () => {
                if (isResumable &&
                    (status === FileStatus.UPLOADING || status === FileStatus.PAUSED) &&
                    uploadTask) {
                    onCancelUpload({ id, uploadTask });
                }
                else {
                    onDeleteUpload({ id });
                }
            };
            const handlePauseUpload = () => {
                if (uploadTask) {
                    onPause({ id, uploadTask });
                }
            };
            const handleResumeUpload = () => {
                if (uploadTask) {
                    onResume({ id, uploadTask });
                }
            };
            return (React__namespace.default.createElement(FileControl$1, { displayName: key, errorMessage: error, displayText: displayText, isImage: isImage, isUploading: isUploading, isResumable: isResumable, key: id, loaderIsDeterminate: loaderIsDeterminate, onRemove: onRemove, onPause: handlePauseUpload, onResume: handleResumeUpload, progress: progress, showThumbnails: showThumbnails, size: file?.size, status: status, thumbnailUrl: thumbnailUrl }));
        }),
        hasMaxFilesError && (React__namespace.default.createElement(uiReact.Alert, { variation: "error", heading: headingMaxFiles }))));
}

function FileListHeader$1({ allUploadsSuccessful, displayText, fileCount, remainingFilesCount, selectedFilesCount = 0, }) {
    const { getFilesUploadedText, getRemainingFilesText, getSelectedFilesText } = displayText;
    return (React__namespace.default.createElement(uiReact.Text, { className: ui.ComponentClassName.FileUploaderPreviewerText }, selectedFilesCount
        ? getSelectedFilesText(selectedFilesCount)
        : allUploadsSuccessful
            ? getFilesUploadedText(fileCount)
            : getRemainingFilesText(remainingFilesCount)));
}

function FileListFooter$1({ displayText, remainingFilesCount, onClearAll, onUploadAll, }) {
    const { clearAllButtonText, getUploadButtonText } = displayText;
    return (React__namespace.default.createElement(uiReact.View, { className: ui.ComponentClassName.FileUploaderPreviewerFooter },
        React__namespace.default.createElement(uiReact.View, { className: ui.ComponentClassName.FileUploaderPreviewerActions },
            React__namespace.default.createElement(uiReact.Button, { size: "small", variation: "link", onClick: onClearAll }, clearAllButtonText),
            React__namespace.default.createElement(uiReact.Button, { size: "small", variation: "primary", onClick: onUploadAll }, getUploadButtonText(remainingFilesCount)))));
}

function FilePicker$1({ children, className = ui.ComponentClassName.FileUploaderFilePicker, size = 'small', ...props }) {
    return (React__namespace.default.createElement(uiReact.Button, { ...props, className: className, size: size }, children));
}

const VERSION = '3.3.4';

const logger$1 = ui.getLogger('Storage');
const MISSING_REQUIRED_PROPS_MESSAGE$1 = '`FileUploader` requires a `maxFileCount` prop to be provided.';
const ACCESS_LEVEL_WITH_PATH_CALLBACK_MESSAGE$1 = '`FileUploader` does not allow usage of a `path` callback prop with an `accessLevel` prop.';
const ACCESS_LEVEL_DEPRECATION_MESSAGE$1 = '`accessLevel` has been deprecated and will be removed in a future major version. See migration notes at https://ui.docs.amplify.aws/react/connected-components/storage/FileUploader';
const FileUploaderBase = React__namespace.forwardRef(function FileUploader({ acceptedFileTypes = [], accessLevel, autoUpload = true, components, defaultFiles, displayText: overrideDisplayText, isResumable = false, maxFileCount, maxFileSize, onFileRemove, onUploadError, onUploadStart, onUploadSuccess, path, processFile, showThumbnails = true, useAccelerateEndpoint, }, ref) {
    if (!maxFileCount) {
        // eslint-disable-next-line no-console
        console.warn(MISSING_REQUIRED_PROPS_MESSAGE$1);
    }
    if (accessLevel && typeof path === 'function') {
        throw new Error(ACCESS_LEVEL_WITH_PATH_CALLBACK_MESSAGE$1);
    }
    uiReactCore.useDeprecationWarning({
        message: ACCESS_LEVEL_DEPRECATION_MESSAGE$1,
        shouldWarn: !!accessLevel,
    });
    const Components = {
        Container: Container$1,
        DropZone: DropZone$1,
        FileList: FileList$1,
        FilePicker: FilePicker$1,
        FileListHeader: FileListHeader$1,
        FileListFooter: FileListFooter$1,
        ...components,
    };
    const allowMultipleFiles = maxFileCount === undefined ||
        (typeof maxFileCount === 'number' && maxFileCount > 1);
    const displayText = {
        ...defaultFileUploaderDisplayText,
        ...overrideDisplayText,
    };
    const { getFileSizeErrorText } = displayText;
    const getMaxFileSizeErrorMessage = (file) => {
        return checkMaxFileSize({
            file,
            maxFileSize,
            getFileSizeErrorText,
        });
    };
    const { addFiles, clearFiles, files, removeUpload, queueFiles, setUploadingFile, setUploadPaused, setUploadProgress, setUploadSuccess, setUploadResumed, } = useFileUploader(defaultFiles);
    React__namespace.useImperativeHandle(ref, () => ({ clearFiles }));
    const { dragState, ...dropZoneProps } = internal.useDropZone({
        acceptedFileTypes,
        onDropComplete: ({ acceptedFiles, rejectedFiles }) => {
            if (rejectedFiles && rejectedFiles.length > 0) {
                logger$1.warn('Rejected files: ', rejectedFiles);
            }
            // We need to filter out files by extension here,
            // we don't get filenames on the drag event, only on drop
            const _acceptedFiles = filterAllowedFiles(acceptedFiles, acceptedFileTypes);
            addFiles({
                files: _acceptedFiles,
                status: autoUpload ? FileStatus.QUEUED : FileStatus.ADDED,
                getFileErrorMessage: getMaxFileSizeErrorMessage,
            });
        },
    });
    useUploadFiles({
        accessLevel,
        files,
        isResumable,
        maxFileCount,
        onUploadError,
        onUploadSuccess,
        onUploadStart,
        setUploadingFile,
        setUploadProgress,
        setUploadSuccess,
        processFile,
        path,
        useAccelerateEndpoint,
    });
    const onFilePickerChange = (event) => {
        const { files } = event.target;
        if (!files || files.length === 0) {
            return;
        }
        addFiles({
            files: Array.from(files),
            status: autoUpload ? FileStatus.QUEUED : FileStatus.ADDED,
            getFileErrorMessage: getMaxFileSizeErrorMessage,
        });
    };
    const onClearAll = () => {
        clearFiles();
    };
    const onUploadAll = () => {
        queueFiles();
    };
    const onPauseUpload = ({ id, uploadTask }) => {
        uploadTask.pause();
        setUploadPaused({ id });
    };
    const onResumeUpload = ({ id, uploadTask }) => {
        uploadTask.resume();
        setUploadResumed({ id });
    };
    const onCancelUpload = ({ id, uploadTask }) => {
        // At this time we don't know if the delete
        // permissions are enabled (required to cancel upload),
        // so we do a pause instead and remove from files
        uploadTask.pause();
        removeUpload({ id });
    };
    const onDeleteUpload = ({ id }) => {
        // At this time we don't know if the delete
        // permissions are enabled, so we do a soft delete
        // from file list, but don't remove from storage
        removeUpload({ id });
        if (typeof onFileRemove === 'function') {
            const file = files.find((file) => file.id === id);
            if (file) {
                const key = file.resolvedKey ?? file.key;
                onFileRemove({ key });
            }
        }
    };
    // checks if all downloads completed to 100%
    const allUploadsSuccessful = files.length === 0
        ? false
        : files.every((file) => file?.status === FileStatus.UPLOADED);
    // Displays if over max files
    const hasMaxFilesError = files.filter((file) => file.progress < 100).length > maxFileCount;
    const uploadedFilesLength = files.filter((file) => file?.status === FileStatus.UPLOADED).length;
    const remainingFilesCount = files.length - uploadedFilesLength;
    // number of files selected for upload when autoUpload is turned off
    const selectedFilesCount = autoUpload ? 0 : remainingFilesCount;
    const hasFiles = files.length > 0;
    const hasUploadActions = !autoUpload && remainingFilesCount > 0;
    const hiddenInput = React__namespace.useRef(null);
    function handleClick() {
        if (hiddenInput.current) {
            hiddenInput.current.click();
            hiddenInput.current.value = '';
        }
    }
    uiReactCore.useSetUserAgent({
        componentName: 'FileUploader',
        packageName: 'react-storage',
        version: VERSION,
    });
    return (React__namespace.createElement(Components.Container, { className: `${ui.ComponentClassName.FileUploader} ${hasFiles ? ui.ComponentClassName.FileUploaderPreviewer : ''}` },
        React__namespace.createElement(Components.DropZone, { inDropZone: dragState !== 'inactive', ...dropZoneProps, displayText: displayText },
            React__namespace.createElement(React__namespace.Fragment, null,
                React__namespace.createElement(Components.FilePicker, { onClick: handleClick }, displayText.browseFilesText),
                React__namespace.createElement(uiReact.VisuallyHidden, null,
                    React__namespace.createElement("input", { type: "file", tabIndex: -1, ref: hiddenInput, onChange: onFilePickerChange, multiple: allowMultipleFiles, accept: acceptedFileTypes.join(',') })))),
        hasFiles ? (React__namespace.createElement(Components.FileListHeader, { allUploadsSuccessful: allUploadsSuccessful, displayText: displayText, fileCount: files.length, remainingFilesCount: remainingFilesCount, selectedFilesCount: selectedFilesCount })) : null,
        React__namespace.createElement(Components.FileList, { displayText: displayText, files: files, isResumable: isResumable, onCancelUpload: onCancelUpload, onDeleteUpload: onDeleteUpload, onResume: onResumeUpload, onPause: onPauseUpload, showThumbnails: showThumbnails, hasMaxFilesError: hasMaxFilesError, maxFileCount: maxFileCount }),
        hasUploadActions ? (React__namespace.createElement(Components.FileListFooter, { displayText: displayText, remainingFilesCount: remainingFilesCount, onClearAll: onClearAll, onUploadAll: onUploadAll })) : null));
});
// pass an empty object as first param to avoid destructive action on `FileUploaderBase`
const FileUploader = Object.assign({}, FileUploaderBase, {
    Container: Container$1,
    DropZone: DropZone$1,
    FileList: FileList$1,
    FileListHeader: FileListHeader$1,
    FileListFooter: FileListFooter$1,
    FilePicker: FilePicker$1,
});

const MISSING_REQUIRED_PROP_MESSAGE = '`StorageImage` requires either an `imgKey` or `path` prop.';
const HAS_DEPRECATED_PROPS_MESSAGE = '`imgKey`, `accessLevel`, and `identityId` will be replaced with `path` in a future major version. See https://ui.docs.amplify.aws/react/connected-components/storage/storageimage#props';
const HAS_PATH_AND_KEY_MESSAGE = '`imgKey` is ignored when both `imgKey` and `path` props are provided.';
const HAS_PATH_AND_UNSUPPORTED_OPTIONS_MESSAGE = '`accessLevel` and `identityId` are ignored when the `path` prop is provided.';
const getDeprecationMessage = ({ hasImgkey, hasPath, hasDeprecatedOptions, }) => {
    let message = '';
    if (hasPath && hasImgkey) {
        message = HAS_PATH_AND_KEY_MESSAGE;
    }
    else if (hasPath && hasDeprecatedOptions) {
        message = HAS_PATH_AND_UNSUPPORTED_OPTIONS_MESSAGE;
    }
    else if (hasImgkey) {
        message = HAS_DEPRECATED_PROPS_MESSAGE;
    }
    return message;
};
const StorageImage = ({ accessLevel, className, fallbackSrc, identityId, imgKey, path, onStorageGetError, onGetUrlError, validateObjectExistence = true, ...rest }) => {
    const hasImgkey = !!imgKey;
    const hasPath = !!path;
    const hasDeprecatedOptions = !!accessLevel || !!identityId;
    const message = getDeprecationMessage({
        hasDeprecatedOptions,
        hasImgkey,
        hasPath,
    });
    internal.useDeprecationWarning({ message, shouldWarn: !!message });
    if (!hasImgkey && !hasPath) {
        throw new Error(MISSING_REQUIRED_PROP_MESSAGE);
    }
    uiReactCore.useSetUserAgent({
        componentName: 'StorageImage',
        packageName: 'react-storage',
        version: VERSION,
    });
    const onError = onGetUrlError ?? onStorageGetError;
    const input = React__namespace.useMemo(() => ({
        ...(path ? { path } : { key: imgKey }),
        onError,
        options: {
            accessLevel,
            targetIdentityId: identityId,
            validateObjectExistence,
        },
    }), [accessLevel, imgKey, identityId, onError, path, validateObjectExistence]);
    const { url } = uiReactCore.useGetUrl(input);
    return (React__namespace.createElement(uiReact.Image, { ...rest, className: ui.classNames(ui.ComponentClassName.StorageImage, className), src: url?.toString() ?? fallbackSrc }));
};

function Container({ children, className, }) {
    return React__namespace.default.createElement(uiReact.View, { className: className }, children);
}

function DropZone({ children, displayText, inDropZone, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop, testId, }) {
    const { dropFilesText } = displayText;
    const icons = internal.useIcons('storageManager');
    return (React__namespace.default.createElement(uiReact.View, { className: ui.classNames(inDropZone &&
            ui.classNameModifier(ui.ComponentClassName.StorageManagerDropZone, 'active'), ui.ComponentClassName.StorageManagerDropZone), "data-testid": testId, onDragStart: onDragStart, onDragEnter: onDragEnter, onDragLeave: onDragLeave, onDrop: onDrop, onDragOver: onDragOver },
        React__namespace.default.createElement(uiReact.View, { as: "span", "aria-hidden": true, className: ui.ComponentClassName.StorageManagerDropZoneIcon }, icons?.upload ?? React__namespace.default.createElement(internal.IconUpload, null)),
        React__namespace.default.createElement(uiReact.Text, { className: ui.ComponentClassName.StorageManagerDropZoneText }, dropFilesText),
        children));
}

const FileStatusMessage = ({ errorMessage, getPausedText, getUploadingText, percentage, status, uploadSuccessfulText, }) => {
    const icons = internal.useIcons('storageManager');
    switch (status) {
        case FileStatus.UPLOADING: {
            return (React__namespace.default.createElement(uiReact.Text, { className: ui.ComponentClassName.StorageManagerFileStatus }, getUploadingText(percentage)));
        }
        case FileStatus.PAUSED:
            return (React__namespace.default.createElement(uiReact.Text, { className: ui.ComponentClassName.StorageManagerFileStatus }, getPausedText(percentage)));
        case FileStatus.UPLOADED:
            return (React__namespace.default.createElement(uiReact.Text, { className: ui.classNames(ui.ComponentClassName.StorageManagerFileStatus, ui.classNameModifier(ui.ComponentClassName.StorageManagerFileStatus, 'success')) },
                React__namespace.default.createElement(uiReact.View, { as: "span", fontSize: "xl" }, icons?.success ?? React__namespace.default.createElement(internal.IconCheck, null)),
                uploadSuccessfulText));
        case FileStatus.ERROR:
            return (React__namespace.default.createElement(uiReact.Text, { className: ui.classNames(ui.ComponentClassName.StorageManagerFileStatus, ui.classNameModifier(ui.ComponentClassName.StorageManagerFileStatus, 'error')) },
                React__namespace.default.createElement(uiReact.View, { as: "span", fontSize: "xl" }, icons?.error ?? React__namespace.default.createElement(internal.IconError, null)),
                errorMessage));
        default:
            return null;
    }
};

const FileRemoveButton = ({ altText, onClick, }) => {
    const icons = internal.useIcons('storageManager');
    return (React__namespace.default.createElement(uiReact.Button, { size: "small", onClick: onClick, testId: "storage-manager-remove-button" },
        React__namespace.default.createElement(uiReact.VisuallyHidden, null, altText),
        React__namespace.default.createElement(uiReact.View, { as: "span", "aria-hidden": true, fontSize: "medium" }, icons?.remove ?? React__namespace.default.createElement(internal.IconClose, null))));
};

const UploadDetails = ({ displayName, fileSize, }) => {
    return (React__namespace.default.createElement(React__namespace.default.Fragment, null,
        React__namespace.default.createElement(uiReact.View, { className: ui.ComponentClassName.StorageManagerFileMain },
            React__namespace.default.createElement(uiReact.Text, { className: ui.ComponentClassName.StorageManagerFileName }, displayName)),
        React__namespace.default.createElement(uiReact.Text, { as: "span", className: ui.ComponentClassName.StorageManagerFileSize }, fileSize ? ui.humanFileSize(fileSize, true) : '')));
};

const FileThumbnail = ({ fileName, isImage, url, }) => {
    const icons = internal.useIcons('storageManager');
    const thumbnail = isImage ? (React__namespace.default.createElement(uiReact.Image, { alt: fileName, src: url })) : (icons?.file ?? React__namespace.default.createElement(internal.IconFile, null));
    return (React__namespace.default.createElement(uiReact.View, { className: ui.ComponentClassName.StorageManagerFileImage }, thumbnail));
};

function FileControl({ onPause, onResume, displayName, errorMessage, isImage, isResumable, loaderIsDeterminate, onRemove, progress, showThumbnails = true, size, status, displayText, thumbnailUrl, }) {
    const { getPausedText, getUploadingText, uploadSuccessfulText, pauseButtonText, resumeButtonText, } = displayText;
    return (React__namespace.default.createElement(uiReact.View, { className: ui.ComponentClassName.StorageManagerFile },
        React__namespace.default.createElement(uiReact.View, { className: ui.ComponentClassName.StorageManagerFileWrapper },
            showThumbnails ? (React__namespace.default.createElement(FileThumbnail, { isImage: isImage, fileName: displayName, url: thumbnailUrl })) : null,
            React__namespace.default.createElement(UploadDetails, { displayName: displayName, fileSize: size }),
            status === FileStatus.UPLOADING ? (React__namespace.default.createElement(uiReact.Loader, { className: ui.ComponentClassName.StorageManagerLoader, variation: "linear", percentage: progress, isDeterminate: loaderIsDeterminate, isPercentageTextHidden: true })) : null,
            isResumable &&
                (status === FileStatus.UPLOADING || status === FileStatus.PAUSED) ? (status === FileStatus.PAUSED ? (React__namespace.default.createElement(uiReact.Button, { onClick: onResume, size: "small", variation: "link" }, resumeButtonText)) : (React__namespace.default.createElement(uiReact.Button, { onClick: onPause, size: "small", variation: "link" }, pauseButtonText))) : null,
            React__namespace.default.createElement(FileRemoveButton, { altText: `Remove file ${displayName}`, onClick: onRemove })),
        React__namespace.default.createElement(FileStatusMessage, { uploadSuccessfulText: uploadSuccessfulText, getUploadingText: getUploadingText, getPausedText: getPausedText, status: status, errorMessage: errorMessage, percentage: progress })));
}

function FileList({ displayText, files, hasMaxFilesError, isResumable, onCancelUpload, onDeleteUpload, onResume, onPause, showThumbnails, maxFileCount, }) {
    if (files.length < 1) {
        return null;
    }
    const { getMaxFilesErrorText } = displayText;
    const headingMaxFiles = getMaxFilesErrorText(maxFileCount);
    return (React__namespace.default.createElement(uiReact.View, { className: ui.ComponentClassName.StorageManagerFileList },
        files.map((storageFile) => {
            const { file, status, progress, error, key, isImage, id, uploadTask } = storageFile;
            const thumbnailUrl = file && isImage ? URL.createObjectURL(file) : '';
            const loaderIsDeterminate = isResumable ? progress > 0 : true;
            const isUploading = status === FileStatus.UPLOADING;
            const onRemove = () => {
                if (isResumable &&
                    (status === FileStatus.UPLOADING || status === FileStatus.PAUSED) &&
                    uploadTask) {
                    onCancelUpload({ id, uploadTask });
                }
                else {
                    onDeleteUpload({ id });
                }
            };
            const handlePauseUpload = () => {
                if (uploadTask) {
                    onPause({ id, uploadTask });
                }
            };
            const handleResumeUpload = () => {
                if (uploadTask) {
                    onResume({ id, uploadTask });
                }
            };
            return (React__namespace.default.createElement(FileControl, { displayName: key, errorMessage: error, displayText: displayText, isImage: isImage, isUploading: isUploading, isResumable: isResumable, key: id, loaderIsDeterminate: loaderIsDeterminate, onRemove: onRemove, onPause: handlePauseUpload, onResume: handleResumeUpload, progress: progress, showThumbnails: showThumbnails, size: file?.size, status: status, thumbnailUrl: thumbnailUrl }));
        }),
        hasMaxFilesError && (React__namespace.default.createElement(uiReact.Alert, { variation: "error", heading: headingMaxFiles }))));
}

function FileListHeader({ allUploadsSuccessful, displayText, fileCount, remainingFilesCount, selectedFilesCount = 0, }) {
    const { getFilesUploadedText, getRemainingFilesText, getSelectedFilesText } = displayText;
    return (React__namespace.default.createElement(uiReact.Text, { className: ui.ComponentClassName.StorageManagerPreviewerText }, selectedFilesCount
        ? getSelectedFilesText(selectedFilesCount)
        : allUploadsSuccessful
            ? getFilesUploadedText(fileCount)
            : getRemainingFilesText(remainingFilesCount)));
}

function FileListFooter({ displayText, remainingFilesCount, onClearAll, onUploadAll, }) {
    const { clearAllButtonText, getUploadButtonText } = displayText;
    return (React__namespace.default.createElement(uiReact.View, { className: ui.ComponentClassName.StorageManagerPreviewerFooter },
        React__namespace.default.createElement(uiReact.View, { className: ui.ComponentClassName.StorageManagerPreviewerActions },
            React__namespace.default.createElement(uiReact.Button, { size: "small", variation: "link", onClick: onClearAll }, clearAllButtonText),
            React__namespace.default.createElement(uiReact.Button, { size: "small", variation: "primary", onClick: onUploadAll }, getUploadButtonText(remainingFilesCount)))));
}

function FilePicker({ children, className = ui.ComponentClassName.StorageManagerFilePicker, size = 'small', ...props }) {
    return (React__namespace.default.createElement(uiReact.Button, { ...props, className: className, size: size }, children));
}

const logger = ui.getLogger('Storage');
const MISSING_REQUIRED_PROPS_MESSAGE = '`StorageManager` requires a `maxFileCount` prop to be provided.';
const ACCESS_LEVEL_WITH_PATH_CALLBACK_MESSAGE = '`StorageManager` does not allow usage of a `path` callback prop with an `accessLevel` prop.';
const ACCESS_LEVEL_DEPRECATION_MESSAGE = '`accessLevel` has been deprecated and will be removed in a future major version. See migration notes at https://ui.docs.amplify.aws/react/connected-components/storage/storagemanager';
const StorageManagerBase = React__namespace.forwardRef(function StorageManager({ acceptedFileTypes = [], accessLevel, autoUpload = true, components, defaultFiles, displayText: overrideDisplayText, isResumable = false, maxFileCount, maxFileSize, onFileRemove, onUploadError, onUploadStart, onUploadSuccess, path, processFile, showThumbnails = true, useAccelerateEndpoint, }, ref) {
    uiReactCore.useDeprecationWarning({
        message: 'The `StorageManager` component has been renamed as the `FileUploader` component.',
        shouldWarn: false,
    });
    if (!maxFileCount) {
        // eslint-disable-next-line no-console
        console.warn(MISSING_REQUIRED_PROPS_MESSAGE);
    }
    if (accessLevel && typeof path === 'function') {
        throw new Error(ACCESS_LEVEL_WITH_PATH_CALLBACK_MESSAGE);
    }
    uiReactCore.useDeprecationWarning({
        message: ACCESS_LEVEL_DEPRECATION_MESSAGE,
        shouldWarn: !!accessLevel,
    });
    const Components = {
        Container,
        DropZone,
        FileList,
        FilePicker,
        FileListHeader,
        FileListFooter,
        ...components,
    };
    const allowMultipleFiles = maxFileCount === undefined ||
        (typeof maxFileCount === 'number' && maxFileCount > 1);
    const displayText = {
        ...defaultFileUploaderDisplayText,
        ...overrideDisplayText,
    };
    const { getFileSizeErrorText } = displayText;
    const getMaxFileSizeErrorMessage = (file) => {
        return checkMaxFileSize({
            file,
            maxFileSize,
            getFileSizeErrorText,
        });
    };
    const { addFiles, clearFiles, files, removeUpload, queueFiles, setUploadingFile, setUploadPaused, setUploadProgress, setUploadSuccess, setUploadResumed, } = useFileUploader(defaultFiles);
    React__namespace.useImperativeHandle(ref, () => ({ clearFiles }));
    const { dragState, ...dropZoneProps } = internal.useDropZone({
        acceptedFileTypes,
        onDropComplete: ({ acceptedFiles, rejectedFiles }) => {
            if (rejectedFiles && rejectedFiles.length > 0) {
                logger.warn('Rejected files: ', rejectedFiles);
            }
            // We need to filter out files by extension here,
            // we don't get filenames on the drag event, only on drop
            const _acceptedFiles = filterAllowedFiles(acceptedFiles, acceptedFileTypes);
            addFiles({
                files: _acceptedFiles,
                status: autoUpload ? FileStatus.QUEUED : FileStatus.ADDED,
                getFileErrorMessage: getMaxFileSizeErrorMessage,
            });
        },
    });
    useUploadFiles({
        accessLevel,
        files,
        isResumable,
        maxFileCount,
        onUploadError,
        onUploadSuccess,
        onUploadStart,
        setUploadingFile,
        setUploadProgress,
        setUploadSuccess,
        processFile,
        path,
        useAccelerateEndpoint,
    });
    const onFilePickerChange = (event) => {
        const { files } = event.target;
        if (!files || files.length === 0) {
            return;
        }
        addFiles({
            files: Array.from(files),
            status: autoUpload ? FileStatus.QUEUED : FileStatus.ADDED,
            getFileErrorMessage: getMaxFileSizeErrorMessage,
        });
    };
    const onClearAll = () => {
        clearFiles();
    };
    const onUploadAll = () => {
        queueFiles();
    };
    const onPauseUpload = ({ id, uploadTask }) => {
        uploadTask.pause();
        setUploadPaused({ id });
    };
    const onResumeUpload = ({ id, uploadTask }) => {
        uploadTask.resume();
        setUploadResumed({ id });
    };
    const onCancelUpload = ({ id, uploadTask }) => {
        // At this time we don't know if the delete
        // permissions are enabled (required to cancel upload),
        // so we do a pause instead and remove from files
        uploadTask.pause();
        removeUpload({ id });
    };
    const onDeleteUpload = ({ id }) => {
        // At this time we don't know if the delete
        // permissions are enabled, so we do a soft delete
        // from file list, but don't remove from storage
        removeUpload({ id });
        if (typeof onFileRemove === 'function') {
            const file = files.find((file) => file.id === id);
            if (file) {
                const key = file.resolvedKey ?? file.key;
                onFileRemove({ key });
            }
        }
    };
    // checks if all downloads completed to 100%
    const allUploadsSuccessful = files.length === 0
        ? false
        : files.every((file) => file?.status === FileStatus.UPLOADED);
    // Displays if over max files
    const hasMaxFilesError = files.filter((file) => file.progress < 100).length > maxFileCount;
    const uploadedFilesLength = files.filter((file) => file?.status === FileStatus.UPLOADED).length;
    const remainingFilesCount = files.length - uploadedFilesLength;
    // number of files selected for upload when autoUpload is turned off
    const selectedFilesCount = autoUpload ? 0 : remainingFilesCount;
    const hasFiles = files.length > 0;
    const hasUploadActions = !autoUpload && remainingFilesCount > 0;
    const hiddenInput = React__namespace.useRef(null);
    function handleClick() {
        if (hiddenInput.current) {
            hiddenInput.current.click();
            hiddenInput.current.value = '';
        }
    }
    uiReactCore.useSetUserAgent({
        componentName: 'StorageManager',
        packageName: 'react-storage',
        version: VERSION,
    });
    return (React__namespace.createElement(Components.Container, { className: `${ui.ComponentClassName.StorageManager} ${hasFiles ? ui.ComponentClassName.StorageManagerPreviewer : ''}` },
        React__namespace.createElement(Components.DropZone, { inDropZone: dragState !== 'inactive', ...dropZoneProps, displayText: displayText },
            React__namespace.createElement(React__namespace.Fragment, null,
                React__namespace.createElement(Components.FilePicker, { onClick: handleClick }, displayText.browseFilesText),
                React__namespace.createElement(uiReact.VisuallyHidden, null,
                    React__namespace.createElement("input", { type: "file", tabIndex: -1, ref: hiddenInput, onChange: onFilePickerChange, multiple: allowMultipleFiles, accept: acceptedFileTypes.join(',') })))),
        hasFiles ? (React__namespace.createElement(Components.FileListHeader, { allUploadsSuccessful: allUploadsSuccessful, displayText: displayText, fileCount: files.length, remainingFilesCount: remainingFilesCount, selectedFilesCount: selectedFilesCount })) : null,
        React__namespace.createElement(Components.FileList, { displayText: displayText, files: files, isResumable: isResumable, onCancelUpload: onCancelUpload, onDeleteUpload: onDeleteUpload, onResume: onResumeUpload, onPause: onPauseUpload, showThumbnails: showThumbnails, hasMaxFilesError: hasMaxFilesError, maxFileCount: maxFileCount }),
        hasUploadActions ? (React__namespace.createElement(Components.FileListFooter, { displayText: displayText, remainingFilesCount: remainingFilesCount, onClearAll: onClearAll, onUploadAll: onUploadAll })) : null));
});
// pass an empty object as first param to avoid destructive action on `StorageManagerBase`
const StorageManager = Object.assign({}, StorageManagerBase, {
    Container,
    DropZone,
    FileList,
    FileListHeader,
    FileListFooter,
    FilePicker,
});

exports.FileUploader = FileUploader;
exports.StorageImage = StorageImage;
exports.StorageManager = StorageManager;
