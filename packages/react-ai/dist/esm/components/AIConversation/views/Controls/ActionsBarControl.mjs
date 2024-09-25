import React__default from 'react';
import { withBaseElementProps } from '@aws-amplify/ui-react-core/elements';
import { ActionsContext } from '../../context/ActionsContext.mjs';
import '../../context/AvatarsContext.mjs';
import '../../context/ConversationInputContext.mjs';
import '../../context/MessagesContext.mjs';
import '../../context/SuggestedPromptsContext.mjs';
import '../../context/MessageVariantContext.mjs';
import '../../context/DisplayTextContext.mjs';
import '../../context/ControlsContext.mjs';
import '../../context/LoadingContext.mjs';
import '../../context/ResponseComponentsContext.mjs';
import '../../context/SendMessageContext.mjs';
import { AIConversationElements } from '../../context/elements/definitions.mjs';

const { Button, Span, View } = AIConversationElements;
const ACTIONS_BAR_BLOCK = 'ai-actions-bar';
const ActionIcon = withBaseElementProps(Span, {
    'aria-hidden': 'true',
    className: `${ACTIONS_BAR_BLOCK}__icon`,
});
const ActionButtonBase = withBaseElementProps(Button, {
    className: `${ACTIONS_BAR_BLOCK}__button`,
});
const ActionButton = React__default.forwardRef(function ActionButton(props, ref) {
    return React__default.createElement(ActionButtonBase, { ...props, ref: ref });
});
const Container = withBaseElementProps(View, {
    className: `${ACTIONS_BAR_BLOCK}__container`,
});
const ActionsBarControl = ({ message, focusable, }) => {
    const actions = React__default.useContext(ActionsContext);
    return (React__default.createElement(Container, null, actions?.map((action, index) => (React__default.createElement(ActionButton, { "aria-label": action.displayName, key: index, onClick: () => action.handler(message), tabIndex: focusable ? 0 : -1 },
        React__default.createElement(ActionIcon, { "data-testid": `action-icon-${action.displayName}` }, action.icon))))));
};
ActionsBarControl.Button = ActionButton;
ActionsBarControl.Container = Container;
ActionsBarControl.Icon = ActionIcon;

export { ActionsBarControl };
