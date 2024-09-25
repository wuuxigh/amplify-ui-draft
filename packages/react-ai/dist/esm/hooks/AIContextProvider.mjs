import React__default from 'react';

const AIContext = React__default.createContext(undefined);
const useAIContext = () => {
    const context = React__default.useContext(AIContext);
    const [routeToConversationsMap, setRouteToConversationsMap] = React__default.useState({});
    if (context) {
        return context;
    }
    return { routeToConversationsMap, setRouteToConversationsMap };
};
/**
 * @experimental
 */
const AIContextProvider = ({ children, }) => {
    const context = useAIContext();
    return React__default.createElement(AIContext.Provider, { value: context }, children);
};

export { AIContext, AIContextProvider, useAIContext };
