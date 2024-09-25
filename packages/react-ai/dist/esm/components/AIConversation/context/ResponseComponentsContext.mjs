import React__default from 'react';

const RESPONSE_COMPONENT_PREFIX = 'AMPLIFY_UI_';
const ResponseComponentsContext = React__default.createContext(undefined);
const prependResponseComponents = (responseComponents) => {
    if (!responseComponents)
        return responseComponents;
    return Object.keys(responseComponents).reduce((prev, key) => ((prev[`${RESPONSE_COMPONENT_PREFIX}${key}`] = responseComponents[key]),
        prev), {});
};
const ResponseComponentsProvider = ({ children, responseComponents, }) => {
    const _responseComponents = React__default.useMemo(() => prependResponseComponents(responseComponents), [responseComponents]);
    return (React__default.createElement(ResponseComponentsContext.Provider, { value: _responseComponents }, children));
};
const convertResponseComponentsToToolConfiguration = (responseComponents) => {
    if (!responseComponents) {
        return;
    }
    const tools = {};
    Object.keys(responseComponents).forEach((toolName) => {
        const { props } = responseComponents[toolName];
        const requiredProps = [];
        Object.keys(props).forEach((propName) => {
            if (props[propName].required)
                requiredProps.push(propName);
        });
        tools[toolName] = {
            description: responseComponents[toolName].description,
            inputSchema: {
                json: {
                    type: 'object',
                    required: requiredProps,
                    properties: {
                        ...props,
                    },
                },
            },
        };
    });
    return { tools };
};

export { RESPONSE_COMPONENT_PREFIX, ResponseComponentsContext, ResponseComponentsProvider, convertResponseComponentsToToolConfiguration };
