import React__default from 'react';

const ConversationInputContext = React__default.createContext({});
const ConversationInputContextProvider = ({ children, }) => {
    const [input, setInput] = React__default.useState();
    const providerValue = React__default.useMemo(() => ({ input, setInput }), [input, setInput]);
    return (React__default.createElement(ConversationInputContext.Provider, { value: providerValue }, children));
};

export { ConversationInputContext, ConversationInputContextProvider };
