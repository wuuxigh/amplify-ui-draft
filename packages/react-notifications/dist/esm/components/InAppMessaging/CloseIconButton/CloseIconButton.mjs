import * as React from 'react';
import { Button } from '@aws-amplify/ui-react';
import { IconClose } from '@aws-amplify/ui-react/internal';

function CloseIconButton({ className, dismissButtonLabel = 'Dismiss message', onClick, style, ...rest }) {
    return (React.createElement(Button, { ariaLabel: dismissButtonLabel, className: className, onClick: onClick, style: style, variation: "link", ...rest },
        React.createElement(IconClose, { "aria-hidden": "true", size: "1.5rem" })));
}

export { CloseIconButton };
