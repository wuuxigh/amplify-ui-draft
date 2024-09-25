import React__default from 'react';
import { withBaseElementProps } from '@aws-amplify/ui-react-core/elements';
import '../../context/ActionsContext.mjs';
import '../../context/AvatarsContext.mjs';
import { ConversationInputContext } from '../../context/ConversationInputContext.mjs';
import '../../context/MessagesContext.mjs';
import '../../context/SuggestedPromptsContext.mjs';
import '../../context/MessageVariantContext.mjs';
import '../../context/DisplayTextContext.mjs';
import '../../context/ControlsContext.mjs';
import '../../context/LoadingContext.mjs';
import '../../context/ResponseComponentsContext.mjs';
import '../../context/SendMessageContext.mjs';
import { AIConversationElements } from '../../context/elements/definitions.mjs';

const { Button, Icon, ListItem, UnorderedList: ListElement, Span, Text, View, } = AIConversationElements;
const IMAGE_LIST_BLOCK = 'ai-attachment-list';
const IMAGE_ITEM_BLOCK = 'ai-attachment';
const REMOVE_IMAGE_BLOCK = 'ai-remove-attachment';
const IMAGE_TEXT_BLOCK = 'ai-attachment-text';
const RemoveIcon = withBaseElementProps(Icon, {
    className: `${REMOVE_IMAGE_BLOCK}__icon`,
    variant: 'close',
});
const RemoveButton = withBaseElementProps(Button, {
    'aria-label': 'Remove file',
    className: `${REMOVE_IMAGE_BLOCK}__button`,
    variant: 'remove',
    type: 'button',
});
const RemoveButtonControl = ({ onRemove }) => {
    return (React__default.createElement(RemoveButton, { onClick: onRemove },
        React__default.createElement(RemoveIcon, null)));
};
RemoveButtonControl.Icon = RemoveIcon;
RemoveButtonControl.Button = RemoveButton;
const ImageIcon = withBaseElementProps(Icon, {
    className: `${IMAGE_ITEM_BLOCK}__icon`,
    variant: 'image',
});
const FileNameText = withBaseElementProps(Text, {
    className: `${IMAGE_TEXT_BLOCK}__file-name`,
});
const FileSizeText = withBaseElementProps(Text, {
    className: `${IMAGE_TEXT_BLOCK}__file-size`,
});
const Separator = withBaseElementProps(Span, {
    'aria-hidden': true,
    className: `${IMAGE_TEXT_BLOCK}__separator`,
    children: '|',
});
const TextContainer = withBaseElementProps(View, {
    className: `${IMAGE_TEXT_BLOCK}__container`,
});
const TextControl = ({ fileName, fileSize }) => {
    return (React__default.createElement(TextContainer, null,
        React__default.createElement(FileNameText, null, fileName),
        React__default.createElement(Separator, null),
        React__default.createElement(FileSizeText, null, fileSize)));
};
TextControl.Container = TextContainer;
TextControl.FileName = FileNameText;
TextControl.FileSize = FileSizeText;
TextControl.Separator = Separator;
const Container = withBaseElementProps(ListItem, {
    className: `${IMAGE_ITEM_BLOCK}__list-item`,
});
const AttachmentControl = ({ image, onRemove }) => {
    return (React__default.createElement(Container, null,
        React__default.createElement(ImageIcon, null),
        React__default.createElement(TextControl, { fileName: image.name, fileSize: image.size }),
        React__default.createElement(RemoveButtonControl, { onRemove: onRemove })));
};
AttachmentControl.Container = Container;
AttachmentControl.ImageIcon = ImageIcon;
AttachmentControl.RemoveButton = RemoveButtonControl;
AttachmentControl.Text = TextControl;
const UnorderedList = withBaseElementProps(ListElement, {
    className: `${IMAGE_LIST_BLOCK}__unordered-list`,
});
const AttachmentListControl = () => {
    const { input, setInput } = React__default.useContext(ConversationInputContext);
    return (React__default.createElement(UnorderedList, null, input?.files?.map((file, index) => {
        const onRemove = () => {
            if (setInput) {
                setInput((prevInput) => ({
                    ...prevInput,
                    files: prevInput?.files?.filter((_file) => _file !== file),
                }));
            }
        };
        return (React__default.createElement(AttachmentControl, { key: index, image: file, onRemove: onRemove }));
    })));
};
AttachmentListControl.List = UnorderedList;
AttachmentListControl.Item = AttachmentControl;

export { AttachmentControl, AttachmentListControl, RemoveButtonControl, TextControl };
