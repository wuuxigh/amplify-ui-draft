import React__default from 'react';

const MessagesContext = React__default.createContext(undefined);
// role of the user sending the message, assistant or user
const RoleContext = React__default.createContext(undefined);
const MessagesProvider = ({ children, messages, }) => {
    return (React__default.createElement(MessagesContext.Provider, { value: messages }, children));
};

export { MessagesContext, MessagesProvider, RoleContext };
