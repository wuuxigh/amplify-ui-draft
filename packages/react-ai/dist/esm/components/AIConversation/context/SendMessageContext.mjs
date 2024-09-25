import React__default from 'react';

const SendMessageContext = React__default.createContext(undefined);
const SendMessageContextProvider = ({ children, handleSendMessage, }) => {
    return (React__default.createElement(SendMessageContext.Provider, { value: handleSendMessage }, children));
};

export { SendMessageContext, SendMessageContextProvider };
