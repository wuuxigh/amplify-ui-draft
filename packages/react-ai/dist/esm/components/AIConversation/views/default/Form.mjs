import * as React from 'react';
import { DropZone, View, Button, VisuallyHidden, TextAreaField } from '@aws-amplify/ui-react';
import { useIcons, IconSend, IconAttach } from '@aws-amplify/ui-react/internal';
import { ComponentClassName } from '@aws-amplify/ui';
import { Attachments } from './Attachments.mjs';
import { LoadingContext } from '../../context/LoadingContext.mjs';

function isHTMLFormElement(target) {
    return 'form' in target;
}
const Form = ({ setInput, input, handleSubmit, }) => {
    const icons = useIcons('aiConversation');
    const sendIcon = icons?.send ?? React.createElement(IconSend, null);
    const attachIcon = icons?.attach ?? React.createElement(IconAttach, null);
    const hiddenInput = React.useRef(null);
    const isLoading = React.useContext(LoadingContext);
    const isInputEmpty = !input?.text?.length && !input?.files?.length;
    return (React.createElement(DropZone, { className: ComponentClassName.AIConversationFormDropzone, onDropComplete: ({ acceptedFiles }) => {
            setInput((prevInput) => ({
                ...prevInput,
                files: [...(prevInput?.files ?? []), ...acceptedFiles],
            }));
        } },
        React.createElement(View, { as: "form", className: ComponentClassName.AIConversationForm, onSubmit: handleSubmit },
            React.createElement(Button, { className: ComponentClassName.AIConversationFormAttach, onClick: () => {
                    hiddenInput?.current?.click();
                    if (hiddenInput?.current) {
                        hiddenInput.current.value = '';
                    }
                } },
                React.createElement("span", null, attachIcon),
                React.createElement(VisuallyHidden, null,
                    React.createElement("input", { type: "file", tabIndex: -1, ref: hiddenInput, onChange: (e) => {
                            const { files } = e.target;
                            if (!files || files.length === 0) {
                                return;
                            }
                            setInput((prevValue) => ({
                                ...prevValue,
                                files: [...(prevValue?.files ?? []), ...Array.from(files)],
                            }));
                        }, multiple: true, accept: "*", "data-testid": "hidden-file-input" }))),
            React.createElement(TextAreaField, { className: ComponentClassName.AIConversationFormField, label: "input", labelHidden: true, autoResize: true, flex: "1", rows: 1, value: input?.text ?? '', testId: "text-input", onKeyDown: (e) => {
                    // Submit on enter key if shift is not pressed also
                    const shouldSubmit = !e.shiftKey && e.key === 'Enter';
                    if (shouldSubmit && isHTMLFormElement(e.target)) {
                        e.target.form.requestSubmit();
                        e.preventDefault();
                    }
                }, onChange: (e) => {
                    setInput((prevValue) => ({
                        ...prevValue,
                        text: e.target.value,
                    }));
                } }),
            React.createElement(Button, { type: "submit", variation: "primary", className: ComponentClassName.AIConversationFormSend, 
                // we intentionally || in the case where isLoading is false we should use the value of isInputEmpty
                // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
                isDisabled: isLoading || isInputEmpty },
                React.createElement("span", null, sendIcon))),
        React.createElement(Attachments, { setInput: setInput, files: input?.files })));
};

export { Form };
