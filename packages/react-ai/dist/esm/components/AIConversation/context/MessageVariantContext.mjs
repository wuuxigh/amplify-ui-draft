import React__default from 'react';

const MessageVariantContext = React__default.createContext(undefined);
const MessageVariantProvider = ({ children, variant, }) => {
    return (React__default.createElement(MessageVariantContext.Provider, { value: variant }, children));
};

export { MessageVariantContext, MessageVariantProvider };
