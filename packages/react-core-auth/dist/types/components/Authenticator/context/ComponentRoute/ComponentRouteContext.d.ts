/// <reference types="react" />
import { AuthenticatorRoute } from '@aws-amplify/ui';
import { UseMachineSelector } from '../Machine';
import { ComponentRoute, ComponentRouteContextType, ComponentRouteProviderProps } from './types';
declare const useComponentRoute: (params?: {
    errorMessage?: string | undefined;
} | undefined) => ComponentRouteContextType;
export declare function isRoute<T extends ComponentRoute | undefined>(route: AuthenticatorRoute | undefined, ...currentRoute: T[]): route is T;
export declare const routeSelector: UseMachineSelector;
/**
 * `ComponentRoute` is a subset of `AuthenticatorComponentRoute` containing
 *  values that directly correlate to the UI. Renders `null` if the current
 * `route` is not a `ComponentRoute`
 */
declare function ComponentRouteProvider({ children, hideSignUp, }: ComponentRouteProviderProps): JSX.Element;
export { ComponentRouteProvider, useComponentRoute };
