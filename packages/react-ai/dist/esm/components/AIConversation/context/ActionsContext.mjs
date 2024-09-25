import React__default from 'react';

const ActionsContext = React__default.createContext(undefined);
const ActionsProvider = ({ children, actions, }) => {
    return (React__default.createElement(ActionsContext.Provider, { value: actions }, children));
};

export { ActionsContext, ActionsProvider };
