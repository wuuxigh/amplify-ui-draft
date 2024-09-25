import React__default from 'react';
import { withBaseElementProps } from '@aws-amplify/ui-react-core/elements';
import '../../context/ActionsContext.mjs';
import '../../context/AvatarsContext.mjs';
import { ConversationInputContext } from '../../context/ConversationInputContext.mjs';
import { MessagesContext } from '../../context/MessagesContext.mjs';
import '../../context/SuggestedPromptsContext.mjs';
import '../../context/MessageVariantContext.mjs';
import '../../context/DisplayTextContext.mjs';
import { ControlsContext } from '../../context/ControlsContext.mjs';
import { LoadingContext } from '../../context/LoadingContext.mjs';
import { ResponseComponentsContext, convertResponseComponentsToToolConfiguration } from '../../context/ResponseComponentsContext.mjs';
import { SendMessageContext } from '../../context/SendMessageContext.mjs';
import { AIConversationElements } from '../../context/elements/definitions.mjs';
import { AttachFileControl } from './AttachFileControl.mjs';
import { AttachmentListControl } from './AttachmentListControl.mjs';
import { getImageTypeFromMimeType } from '../../utils.mjs';

const { Button, Icon, Label: LabelElement, TextArea, View, } = AIConversationElements;
const FIELD_BLOCK = 'ai-field';
const SendIcon = withBaseElementProps(Icon, {
    className: `${FIELD_BLOCK}__icon`,
    variant: 'send-message',
});
const SendButtonBase = withBaseElementProps(Button, {
    'aria-label': 'Send message',
    className: `${FIELD_BLOCK}__button ${FIELD_BLOCK}__button--send`,
});
const SendButton = React__default.forwardRef(function SendButton(props, ref) {
    const { input } = React__default.useContext(ConversationInputContext);
    const isLoading = React__default.useContext(LoadingContext);
    const hasInput = !!input?.text || !!input?.files?.length;
    return (React__default.createElement(SendButtonBase, { ...props, 
        // we intentionally || in the case where isLoading is false we should use the value of hasInput
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        disabled: isLoading || !hasInput, type: "submit", ref: ref, "data-testid": "send-button" }));
});
const TextAreaBase = withBaseElementProps(TextArea, {
    className: `${FIELD_BLOCK}__input`,
    id: `${FIELD_BLOCK}-text-input`,
    name: 'text-input',
});
const VisuallyHidden = withBaseElementProps(View, {
    className: `${FIELD_BLOCK}__visually-hidden`,
});
const Label = withBaseElementProps(LabelElement, {
    children: 'Type your message here',
    className: `${FIELD_BLOCK}__label`,
    htmlFor: 'text-input',
});
const useHandleResize = (textAreaRef) => {
    React__default.useEffect(() => {
        const { current } = textAreaRef;
        const handleResize = () => {
            if (current) {
                current.style.height = 'auto';
                current.style.height = `${current.scrollHeight}px`;
            }
        };
        if (current) {
            current.addEventListener('input', handleResize);
            handleResize();
        }
        return () => {
            if (current) {
                current.removeEventListener('input', handleResize);
            }
        };
    }, [textAreaRef]);
};
const TextInput = React__default.forwardRef(function TextInput(props, ref) {
    const { setInput } = React__default.useContext(ConversationInputContext);
    const messages = React__default.useContext(MessagesContext);
    const textAreaRef = React__default.useRef(null);
    useHandleResize(textAreaRef);
    const isFirstMessage = !messages || messages.length === 0;
    React__default.useEffect(() => {
        if (textAreaRef && textAreaRef.current) {
            textAreaRef.current.focus();
        }
    }, [textAreaRef]);
    return (React__default.createElement(TextAreaBase, { ...props, "data-testid": "text-input", id: "text-input", onChange: (e) => props.onChange ??
            (setInput &&
                setInput((prevInput) => ({ ...prevInput, text: e.target.value }))), placeholder: props.placeholder ?? isFirstMessage
            ? 'Ask anything...'
            : 'Message Raven', ref: (node) => {
            textAreaRef.current = node;
            if (typeof ref === 'function') {
                ref(node);
            }
            else if (ref) {
                ref.current = node;
            }
        }, autoFocus: true }));
});
const InputContainer = withBaseElementProps(View, {
    className: `${FIELD_BLOCK}__input-container`,
});
const FieldControl = () => {
    const { input, setInput } = React__default.useContext(ConversationInputContext);
    const handleSendMessage = React__default.useContext(SendMessageContext);
    const ref = React__default.useRef(null);
    const responseComponents = React__default.useContext(ResponseComponentsContext);
    const controls = React__default.useContext(ControlsContext);
    const submitMessage = async () => {
        ref.current?.reset();
        const submittedContent = [];
        if (input?.text) {
            const textContent = {
                text: input.text,
            };
            submittedContent.push(textContent);
        }
        if (input?.files) {
            for (const file of input.files) {
                const buffer = await file.arrayBuffer();
                const fileContent = {
                    image: {
                        format: getImageTypeFromMimeType(file.type),
                        source: { bytes: new Uint8Array(buffer) },
                    },
                };
                submittedContent.push(fileContent);
            }
        }
        if (handleSendMessage) {
            handleSendMessage({
                content: submittedContent,
                toolConfiguration: convertResponseComponentsToToolConfiguration(responseComponents),
            });
        }
        if (setInput)
            setInput({ text: '', files: [] });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        submitMessage();
    };
    const handleOnKeyDown = (event) => {
        const { key, shiftKey } = event;
        if (key === 'Enter' && !shiftKey) {
            event.preventDefault();
            const hasInput = !!input?.text || (input?.files?.length && input?.files?.length > 0);
            if (hasInput) {
                submitMessage();
            }
        }
    };
    if (controls?.Form) {
        return (React__default.createElement(controls.Form, { handleSubmit: handleSubmit, input: input, setInput: setInput }));
    }
    return (React__default.createElement("form", { className: `${FIELD_BLOCK}__form`, onSubmit: handleSubmit, method: "post", ref: ref },
        React__default.createElement(AttachFileControl, null),
        React__default.createElement(InputContainer, null,
            React__default.createElement(VisuallyHidden, null,
                React__default.createElement(Label, null)),
            React__default.createElement(TextInput, { onKeyDown: handleOnKeyDown }),
            React__default.createElement(AttachmentListControl, null)),
        React__default.createElement(SendButton, null,
            React__default.createElement(SendIcon, null))));
};
FieldControl.AttachFile = AttachFileControl;
FieldControl.InputContainer = InputContainer;
FieldControl.Label = Label;
FieldControl.TextInput = TextInput;
FieldControl.SendButton = SendButton;
FieldControl.SendIcon = SendIcon;

export { FieldControl };
