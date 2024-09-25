import React__default from 'react';

const AvatarsContext = React__default.createContext(undefined);
const AvatarsProvider = ({ children, avatars, }) => {
    return (React__default.createElement(AvatarsContext.Provider, { value: avatars }, children));
};

export { AvatarsContext, AvatarsProvider };
