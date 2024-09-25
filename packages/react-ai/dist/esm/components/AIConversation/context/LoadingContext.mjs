import React__default from 'react';

const LoadingContext = React__default.createContext(undefined);
const LoadingContextProvider = ({ children, isLoading, }) => {
    return (React__default.createElement(LoadingContext.Provider, { value: isLoading }, children));
};

export { LoadingContext, LoadingContextProvider };
