import React from 'react';
import { Avatars } from '../types';
export declare const AvatarsContext: React.Context<Avatars | undefined>;
export declare const AvatarsProvider: ({ children, avatars, }: {
    children?: React.ReactNode;
    avatars?: Avatars | undefined;
}) => JSX.Element;
