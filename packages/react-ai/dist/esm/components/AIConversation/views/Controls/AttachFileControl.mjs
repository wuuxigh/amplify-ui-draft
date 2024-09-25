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

const { Button, Icon, View } = AIConversationElements;
const ATTACH_FILE_BLOCK = 'ai-attach-file';
const FIELD_BLOCK = 'ai-field';
const AttachFileIcon = withBaseElementProps(Icon, {
    className: `${ATTACH_FILE_BLOCK}__icon`,
    variant: 'attach',
});
const AttachFileContainer = withBaseElementProps(View, {
    className: `${ATTACH_FILE_BLOCK}__container`,
});
const VisuallyHidden = withBaseElementProps(View, {
    className: `${FIELD_BLOCK}__visually-hidden`,
});
const AttachFileButton = withBaseElementProps(Button, {
    'aria-label': 'Attach file',
    className: `${FIELD_BLOCK}__button`,
    type: 'button',
    variant: 'attach',
});
const AttachFileControl = () => {
    const hiddenInput = React__default.useRef(null);
    const { setInput } = React__default.useContext(ConversationInputContext);
    function handleButtonClick() {
        if (hiddenInput.current) {
            hiddenInput.current.click();
            hiddenInput.current.value = '';
        }
    }
    function handleFileChange(e) {
        const { files } = e.target;
        if (files && files?.length > 0 && setInput) {
            Array.from(files).forEach((file) => {
                setInput((prevInput) => ({
                    ...prevInput,
                    files: [...(prevInput?.files ?? []), file],
                }));
            });
        }
    }
    return (React__default.createElement(AttachFileContainer, null,
        React__default.createElement(AttachFileButton, { onClick: handleButtonClick },
            React__default.createElement(AttachFileIcon, null)),
        React__default.createElement(VisuallyHidden, null,
            React__default.createElement("input", { accept: ".jpeg,.png,.webp,.gif", "data-testid": "hidden-file-input", onChange: handleFileChange, ref: hiddenInput, type: "file", multiple: true }))));
};
AttachFileControl.Icon = AttachFileIcon;
AttachFileControl.Button = AttachFileButton;
AttachFileControl.Container = AttachFileContainer;

export { AttachFileControl };
