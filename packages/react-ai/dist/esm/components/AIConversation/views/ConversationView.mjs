import React__default from 'react';
import { ViewElement } from '../context/elements/definitions.mjs';
import './Controls/ActionsBarControl.mjs';
import './Controls/AvatarControl.mjs';
import { HeaderControl } from './Controls/HeaderControl.mjs';
import { FieldControl } from './Controls/FieldControl.mjs';
import { MessagesControl } from './Controls/MessagesControl.mjs';
import { AutoHidablePromptControl } from './Controls/PromptControl.mjs';

function Conversation() {
    return (React__default.createElement(ViewElement, null,
        React__default.createElement(HeaderControl, null),
        React__default.createElement(ViewElement, null,
            React__default.createElement(AutoHidablePromptControl, null),
            React__default.createElement(MessagesControl, null)),
        React__default.createElement(ViewElement, null,
            React__default.createElement(FieldControl, null))));
}

export { Conversation as default };
