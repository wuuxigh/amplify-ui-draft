import React from 'react';
import { MessageVariant } from '../types';
export declare const MessageVariantContext: React.Context<MessageVariant | undefined>;
export declare const MessageVariantProvider: ({ children, variant, }: {
    children?: React.ReactNode;
    variant?: MessageVariant | undefined;
}) => JSX.Element;
