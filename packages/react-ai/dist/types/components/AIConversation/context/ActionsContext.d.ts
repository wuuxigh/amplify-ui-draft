import React from 'react';
import { CustomAction } from '../types';
export declare const ActionsContext: React.Context<CustomAction[] | undefined>;
export declare const ActionsProvider: ({ children, actions, }: {
    children?: React.ReactNode;
    actions?: CustomAction[] | undefined;
}) => JSX.Element;
