import React from 'react';
import { ResponseComponents } from '../types';
import { ToolConfiguration } from '../../../types';
type ResponseComponentsContextProps = ResponseComponents | undefined;
export declare const RESPONSE_COMPONENT_PREFIX = "AMPLIFY_UI_";
export declare const ResponseComponentsContext: React.Context<ResponseComponentsContextProps>;
export declare const ResponseComponentsProvider: ({ children, responseComponents, }: {
    children?: React.ReactNode;
    responseComponents?: ResponseComponents | undefined;
}) => JSX.Element;
export declare const convertResponseComponentsToToolConfiguration: (responseComponents?: ResponseComponents) => ToolConfiguration | undefined;
export {};
