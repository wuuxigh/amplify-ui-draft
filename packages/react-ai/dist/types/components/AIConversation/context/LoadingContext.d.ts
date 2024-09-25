import React from 'react';
export declare const LoadingContext: React.Context<boolean | undefined>;
export declare const LoadingContextProvider: ({ children, isLoading, }: {
    children?: React.ReactNode;
    isLoading?: boolean | undefined;
}) => JSX.Element;
