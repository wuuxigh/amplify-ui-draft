import React__default from 'react';

const ControlsContext = React__default.createContext(undefined);
const ControlsProvider = ({ children, controls, }) => {
    return (React__default.createElement(ControlsContext.Provider, { value: controls }, children));
};

export { ControlsContext, ControlsProvider };
