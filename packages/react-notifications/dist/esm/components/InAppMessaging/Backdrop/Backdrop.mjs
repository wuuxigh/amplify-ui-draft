import React__default from 'react';
import { View } from '@aws-amplify/ui-react';

const BACKDROP_TEST_ID = 'inappmessaging-backdrop';
function Backdrop({ onClick, ...rest }) {
    return (React__default.createElement(View, { className: "amplify-inappmessaging-backdrop", "data-testid": BACKDROP_TEST_ID, onClick: onClick, ...rest }));
}

export { BACKDROP_TEST_ID, Backdrop };
