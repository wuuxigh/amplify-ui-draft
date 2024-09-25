import * as React from 'react';
import { View, Image, Text, Button } from '@aws-amplify/ui-react';
import { useIcons, IconClose } from '@aws-amplify/ui-react/internal';
import { ComponentClassName, humanFileSize } from '@aws-amplify/ui';

const Attachment = ({ file, handleRemove, }) => {
    const icons = useIcons('aiConversation');
    const removeIcon = icons?.remove ?? React.createElement(IconClose, null);
    return (React.createElement(View, { className: ComponentClassName.AIConversationAttachment },
        React.createElement(Image, { className: ComponentClassName.AIConversationAttachmentImage, src: URL.createObjectURL(file), alt: file.name }),
        React.createElement(Text, { as: "span", className: ComponentClassName.AIConversationAttachmentName }, file.name),
        React.createElement(Text, { as: "span", className: ComponentClassName.AIConversationAttachmentSize }, humanFileSize(file.size, true)),
        React.createElement(Button, { size: "small", variation: "link", colorTheme: "error", className: ComponentClassName.AIConversationAttachmentRemove, onClick: handleRemove }, removeIcon)));
};
const Attachments = ({ files, setInput, }) => {
    if (!files || files.length < 1) {
        return null;
    }
    return (React.createElement(View, { className: ComponentClassName.AIConversationAttachmentList }, files?.map((file, i) => {
        return (React.createElement(Attachment, { key: file.name, file: file, handleRemove: () => {
                setInput?.((prevInput) => ({
                    ...prevInput,
                    files: prevInput?.files?.filter((_, j) => i !== j),
                }));
            } }));
    })));
};

export { Attachments };
