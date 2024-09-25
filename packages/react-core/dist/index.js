'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var react = require('@xstate/react');
var auth = require('aws-amplify/auth');
var ui = require('@aws-amplify/ui');
var reactHookForm = require('react-hook-form');
var storage = require('aws-amplify/storage');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

/**
 * AuthenticatorContext serves static reference to the auth machine service.
 *
 * https://xstate.js.org/docs/recipes/react.html#context-provider
 */
const AuthenticatorContext = React__namespace.default.createContext(null);

const createHubHandler = (options) => (data, service) => {
    ui.defaultAuthHubHandler(data, service, options);
};
function AuthenticatorProvider({ children, }) {
    // `authStatus` is exposed by `useAuthenticator` but should not be derived directly from the
    // state machine as the machine only updates on `Authenticator` initiated events, which
    // leads to scenarios where the state machine `authStatus` gets "stuck". For exmample,
    // if a user was to sign in using `Auth.signIn` directly rather than using `Authenticator`
    const [authStatus, setAuthStatus] = React__namespace.default.useState('configuring');
    // only run on first render
    React__namespace.default.useEffect(() => {
        auth.getCurrentUser()
            .then(() => {
            setAuthStatus('authenticated');
        })
            .catch(() => {
            setAuthStatus('unauthenticated');
        });
    }, []);
    /**
     * Based on use cases, developer might already have added another Provider
     * outside Authenticator. In that case, we sync the two providers by just
     * passing the parent value.
     *
     * TODO(BREAKING): enforce only one provider in App tree
     */
    const parentProviderVal = React.useContext(AuthenticatorContext);
    const service = react.useInterpret(ui.createAuthenticatorMachine);
    const value = React.useMemo(() => (!parentProviderVal ? { authStatus, service } : parentProviderVal), [authStatus, parentProviderVal, service]);
    const { service: activeService } = value;
    React.useEffect(() => {
        const onSignIn = () => {
            setAuthStatus('authenticated');
        };
        const onSignOut = () => {
            setAuthStatus('unauthenticated');
        };
        const unsubscribe = ui.listenToAuthHub(activeService, createHubHandler({ onSignIn, onSignOut }));
        return unsubscribe;
    }, [activeService]);
    return (React__namespace.default.createElement(AuthenticatorContext.Provider, { value: value }, children));
}

const USE_AUTHENTICATOR_ERROR = '`useAuthenticator` must be used inside an `Authenticator.Provider`.';

const COMPONENT_ROUTE_KEYS = [
    'confirmResetPassword',
    'confirmSignIn',
    'confirmSignUp',
    'confirmVerifyUser',
    'forceNewPassword',
    'forgotPassword',
    'setupTotp',
    'signIn',
    'signUp',
    'verifyUser',
];
const COMPONENT_ROUTE_NAMES = [
    'ConfirmResetPassword',
    'ConfirmSignIn',
    'ConfirmSignUp',
    'ConfirmVerifyUser',
    'ForceNewPassword',
    'ForgotPassword',
    'SetupTotp',
    'SignIn',
    'SignUp',
    'VerifyUser',
];

const isComponentRouteKey = (route) => COMPONENT_ROUTE_KEYS.some((componentRoute) => componentRoute === route);
function resolveAuthenticatorComponents(defaults, overrides) {
    if (!overrides) {
        return defaults;
    }
    return COMPONENT_ROUTE_NAMES.reduce((components, route) => {
        const Default = defaults[route];
        const Override = overrides[route];
        if (typeof Override !== 'function') {
            return { ...components, [route]: Default };
        }
        const { Footer, FormFields, Header } = Default;
        // cast to allow assigning of component slots
        const Component = Override;
        Component.Footer = Footer;
        Component.FormFields = FormFields;
        Component.Header = Header;
        return { ...components, [route]: Component };
    }, {});
}

const defaultComparator = () => false;
/**
 * Does an ordering and shallow comparison of each array value,
 * plus a value equality check for empty objects and arrays.
 */
function areSelectorDepsEqual(currentDeps, nextDeps) {
    if (currentDeps.length !== nextDeps.length) {
        return false;
    }
    return currentDeps.every((currentDep, index) => {
        const nextDep = nextDeps[index];
        if (ui.areEmptyArrays(currentDep, nextDep) ||
            ui.areEmptyObjects(currentDep, nextDep)) {
            return true;
        }
        return currentDep === nextDep;
    });
}
const getComparator = (selector) => (currentFacade, nextFacade) => {
    const currentSelectorDeps = selector(currentFacade);
    const nextSelectorDeps = selector(nextFacade);
    // Shallow compare the array values
    return areSelectorDepsEqual(currentSelectorDeps, nextSelectorDeps);
};
const getQRFields = (state) => ({
    ...ui.getActorContext(state)?.formFields?.setupTotp?.QR,
});
const flattenFormFields = (fields) => fields.flatMap(([name, options]) => ({ name, ...options }));
const convertContactMethodsToFields = (unverifiedUserAttributes) => {
    return (unverifiedUserAttributes &&
        Object.entries(unverifiedUserAttributes).map(([name, value]) => {
            const valueIsString = ui.isString(value);
            if (!valueIsString || !name) {
                return {};
            }
            return { name, label: value, type: 'radio', value };
        }));
};
/**
 * Retrieves default and custom (RWA only, to be updated) form field values from state machine
 * for subcomponent routes that render fields
 */
const getMachineFields = (route, state, unverifiedUserAttributes) => {
    if (isComponentRouteKey(route)) {
        return route === 'verifyUser'
            ? convertContactMethodsToFields(unverifiedUserAttributes)
            : flattenFormFields(ui.getSortedFormFields(route, state));
    }
    return [];
};

/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/connected-components/authenticator/headless#useauthenticator-hook)
 */
function useAuthenticator(selector) {
    const context = React__namespace.default.useContext(AuthenticatorContext);
    if (!context) {
        throw new Error(USE_AUTHENTICATOR_ERROR);
    }
    const { service } = context;
    const { send } = service;
    const xstateSelector = React.useCallback((state) => ({ ...ui.getServiceFacade({ send, state }) }), [send]);
    const comparator = selector ? getComparator(selector) : defaultComparator;
    // the purpose of `context.authStatus`is to intentionally override `facade.authStatus`. `facade.authStatus` does
    // not update on external sign in events (for example when a user is not using the `Authenticator`).
    const { authStatus } = context;
    const facade = react.useSelector(service, xstateSelector, comparator);
    const { route, totpSecretCode, unverifiedUserAttributes, user, ...rest } = facade;
    // do not memoize output. `service.getSnapshot` reference remains stable preventing
    // `fields` from updating with current form state on value changes
    const serviceSnapshot = service.getSnapshot();
    // legacy `QRFields` values only used for SetupTotp page to retrieve issuer information, will be removed in future
    const QRFields = route === 'setupTotp' ? getQRFields(serviceSnapshot) : null;
    // legacy `formFields` values required until form state is removed from state machine
    const fields = getMachineFields(route, serviceSnapshot, unverifiedUserAttributes);
    return {
        ...rest,
        authStatus,
        route,
        totpSecretCode,
        unverifiedUserAttributes,
        user,
        /** @deprecated For internal use only */
        fields,
        QRFields,
    };
}

const DEFAULT_ERROR_MESSAGE$1 = '`useForm` must be called inside a `FormProvider`';
/**
 * Utility hook corresponding to `FormProvider`, must be used within a `FormProvider`
 *
 * @internal Extend for public export. `useForm` and `UseForm` are an abstraction layer
 * on top of `useFormContext` and `UseFormReturn`, imported from `react-hook-form`
 *
 * @param options optional parameters
 * @returns `Form` utilities
 */
function useForm(options = {}) {
    const formContext = reactHookForm.useFormContext();
    const { errorMessage, onSubmit: _onSubmit } = options;
    if (!formContext) {
        throw new Error(errorMessage ?? DEFAULT_ERROR_MESSAGE$1);
    }
    const { formState, getFieldState: _getFieldState, getValues, handleSubmit, register, reset, setValue, } = formContext;
    // Do not memoize, `formState` updates on all events
    const getFieldState = (name) => {
        const { error, ...fieldState } = _getFieldState(name, formState);
        const { message: errorMessage } = error ?? {};
        return { ...fieldState, errorMessage, hasError: !!errorMessage };
    };
    // memoize `registerField` and `setFormValue` together,
    // `register` and `setValue` maintain stable references
    const { registerField, setFormValue } = React__namespace.default.useMemo(() => {
        return {
            registerField: ({ name, ...options }) => register(name, options),
            setFormValue: ({ name, value, ...options }) => setValue(name, value, options),
        };
    }, [register, setValue]);
    const onSubmit = React__namespace.default.useCallback((event) => {
        const handler = _onSubmit ? handleSubmit(_onSubmit) : ui.noop;
        handler(event);
    }, [_onSubmit, handleSubmit]);
    return {
        getFieldState,
        getValues,
        isValid: formState.isValid,
        onSubmit,
        registerField,
        reset,
        setFormValue,
    };
}

const DEFAULT_ERROR_MESSAGE = '`useField` must be used within a `FormProvider`';
/**
 * `Field` integration hook for usage with React `Field` components.
 *
 * @param params Requires `name`, all additional params optional
 * @returns `Form` aware `Field` event handlers and state values
 */
function useField(params) {
    const { getFieldState, registerField } = useForm({
        errorMessage: DEFAULT_ERROR_MESSAGE,
    });
    return {
        ...registerField(params),
        ...getFieldState(params.name),
    };
}

const DEFAULT_MODE = 'onTouched';
const FormProvider = React__namespace.default.forwardRef(function FormProvider({ children, defaultValues, mode = DEFAULT_MODE }, ref) {
    const formProviderProps = reactHookForm.useForm({
        defaultValues,
        mode,
    });
    const { getValues, reset } = formProviderProps;
    React__namespace.default.useImperativeHandle(ref, () => ({ getValues, reset: () => reset(defaultValues) }), [defaultValues, getValues, reset]);
    return (React__namespace.default.createElement(reactHookForm.FormProvider, { ...formProviderProps }, children));
});

/**
 * @param Child `Form` base component wrapped inside `FormProvider`
 * @returns Composed `Form` component exposing `FormContext` values to descendents
 */
function withFormProvider(Child) {
    return React__namespace.default.forwardRef(function Form({ defaultValues, mode, ...props }, ref) {
        return (React__namespace.default.createElement(FormProvider, { defaultValues: defaultValues, mode: mode, ref: ref },
            React__namespace.default.createElement(Child, { ...props })));
    });
}

/**
 * Utility component for rendering nothing.
 */
function RenderNothing(_) {
    return null;
}

const EVENT_HANDLER_KEY_MAP = {
    updateBlur: 'handleBlur',
    updateForm: 'handleChange',
    submitForm: 'handleSubmit',
};
const COMMON_ROUTE_MACHINE_KEYS = [
    'error',
    'isPending',
    'submitForm',
    'updateBlur',
    'updateForm',
];
const CONFIRM_RESET_PASSWORD_MACHINE_KEYS = [
    ...COMMON_ROUTE_MACHINE_KEYS,
    'hasValidationErrors',
    'resendCode',
    'validationErrors',
];
const CONFIRM_SIGN_IN_MACHINE_KEYS = [
    ...COMMON_ROUTE_MACHINE_KEYS,
    'challengeName',
    'toSignIn',
];
const CONFIRM_SIGN_UP_MACHINE_KEYS = [
    ...COMMON_ROUTE_MACHINE_KEYS,
    'codeDeliveryDetails',
    'resendCode',
];
const CONFIRM_VERIFY_USER_MACHINE_KEYS = [
    ...COMMON_ROUTE_MACHINE_KEYS,
    'skipVerification',
];
const FORCE_NEW_PASSWORD_MACHINE_KEYS = [
    ...COMMON_ROUTE_MACHINE_KEYS,
    'hasValidationErrors',
    'toSignIn',
    'validationErrors',
];
const RESET_PASSWORD_MACHINE_KEYS = [
    ...COMMON_ROUTE_MACHINE_KEYS,
    'toSignIn',
];
const SIGN_IN_MACHINE_KEYS = [
    ...COMMON_ROUTE_MACHINE_KEYS,
    'socialProviders',
    'toFederatedSignIn',
    'toForgotPassword',
    'toSignUp',
];
const SIGN_UP_MACHINE_KEYS = [
    ...COMMON_ROUTE_MACHINE_KEYS,
    'hasValidationErrors',
    'socialProviders',
    'toFederatedSignIn',
    'toSignIn',
    'validationErrors',
];
const SETUP_TOTP_MACHINE_KEYS = [
    ...COMMON_ROUTE_MACHINE_KEYS,
    'toSignIn',
    'totpSecretCode',
    'username',
];
const VERIFY_USER_MACHINE_KEYS = [
    ...COMMON_ROUTE_MACHINE_KEYS,
    'skipVerification',
];
const MACHINE_PROP_KEYS = {
    confirmResetPassword: CONFIRM_RESET_PASSWORD_MACHINE_KEYS,
    confirmSignIn: CONFIRM_SIGN_IN_MACHINE_KEYS,
    confirmSignUp: CONFIRM_SIGN_UP_MACHINE_KEYS,
    confirmVerifyUser: CONFIRM_VERIFY_USER_MACHINE_KEYS,
    forceNewPassword: FORCE_NEW_PASSWORD_MACHINE_KEYS,
    signIn: SIGN_IN_MACHINE_KEYS,
    signUp: SIGN_UP_MACHINE_KEYS,
    forgotPassword: RESET_PASSWORD_MACHINE_KEYS,
    setupTotp: SETUP_TOTP_MACHINE_KEYS,
    verifyUser: VERIFY_USER_MACHINE_KEYS,
};

// only select `route` from machine context
const routeSelector$1 = ({ route }) => [route];
const createSelector = (selectorKeys) => (context) => {
    const dependencies = selectorKeys.map((key) => context[key]);
    // route should always be part of deps, so hook knows when route changes.
    return [...dependencies, context.route];
};
const getRouteMachineSelector = (route) => isComponentRouteKey(route)
    ? createSelector(MACHINE_PROP_KEYS[route])
    : routeSelector$1;
const isFormEventHandlerKey = (key) => ['updateBlur', 'updateForm', 'submitForm'].includes(key);
const convertEventHandlerKey = (key) => EVENT_HANDLER_KEY_MAP[key];
const getConvertedMachineProps = (route, context) => MACHINE_PROP_KEYS[route].reduce((acc, key) => ({
    ...acc,
    [isFormEventHandlerKey(key) ? convertEventHandlerKey(key) : key]: context[key],
}), {});
function resolveConfirmResetPasswordRoute(Component, props) {
    return {
        Component,
        props: {
            ...Component,
            ...getConvertedMachineProps('confirmResetPassword', props),
        },
    };
}
function resolveConfirmSignInRoute(Component, props) {
    const { challengeName, ...machineProps } = getConvertedMachineProps('confirmSignIn', props);
    return { Component, props: { ...Component, ...machineProps, challengeName } };
}
function resolveConfirmSignUpRoute(Component, props) {
    return {
        Component,
        props: {
            ...Component,
            ...getConvertedMachineProps('confirmSignUp', props),
        },
    };
}
function resolveConfirmVerifyUserRoute(Component, props) {
    return {
        Component,
        props: {
            ...Component,
            ...getConvertedMachineProps('confirmVerifyUser', props),
        },
    };
}
function resolveForceNewPasswordRoute(Component, props) {
    return {
        Component,
        props: {
            ...Component,
            ...getConvertedMachineProps('forceNewPassword', props),
        },
    };
}
function resolveForgotPasswordRoute(Component, props) {
    return {
        Component,
        props: {
            ...Component,
            ...getConvertedMachineProps('forgotPassword', props),
        },
    };
}
function resolveSetupTotpRoute(Component, props) {
    return {
        Component,
        props: {
            ...Component,
            ...getConvertedMachineProps('setupTotp', props),
        },
    };
}
function resolveSignInRoute(Component, props) {
    // default `hideSignUp` to false
    const hideSignUp = false;
    return {
        Component,
        props: {
            ...Component,
            ...getConvertedMachineProps('signIn', props),
            hideSignUp,
        },
    };
}
function resolveSignUpRoute(Component, props) {
    return {
        Component,
        props: { ...Component, ...getConvertedMachineProps('signUp', props) },
    };
}
function resolveVerifyUserRoute(Component, props) {
    return {
        Component,
        props: {
            ...Component,
            ...getConvertedMachineProps('verifyUser', props),
        },
    };
}
function resolveDefault() {
    return {
        Component: RenderNothing,
        props: {},
    };
}

function useAuthenticatorRoute({ components, }) {
    const { route } = useAuthenticator(routeSelector$1);
    const routeMachineSelector = React.useMemo(() => getRouteMachineSelector(route), [route]);
    // `useAuthenticator` exposes both state machine (example: `toSignIn`) and non-state machine
    // props (example: `getTotpSecretCode`). `routeSelector` specifies which state machine props
    // should be returned for a specific route.
    // Only state machine props specified by the current `routeSelector` will have their current value
    // returned by `useAuthenticator`, non-machine props returned will always be the current value
    const routeSelectorProps = useAuthenticator(routeMachineSelector);
    const { ConfirmResetPassword, ConfirmSignIn, ConfirmSignUp, ConfirmVerifyUser, ForceNewPassword, ForgotPassword, SetupTotp, SignIn, SignUp, VerifyUser, } = components;
    switch (route) {
        case 'confirmResetPassword': {
            return resolveConfirmResetPasswordRoute(ConfirmResetPassword, routeSelectorProps);
        }
        case 'confirmSignIn': {
            return resolveConfirmSignInRoute(ConfirmSignIn, routeSelectorProps);
        }
        case 'confirmSignUp': {
            return resolveConfirmSignUpRoute(ConfirmSignUp, routeSelectorProps);
        }
        case 'confirmVerifyUser': {
            return resolveConfirmVerifyUserRoute(ConfirmVerifyUser, routeSelectorProps);
        }
        case 'forceNewPassword': {
            return resolveForceNewPasswordRoute(ForceNewPassword, routeSelectorProps);
        }
        case 'forgotPassword': {
            return resolveForgotPasswordRoute(ForgotPassword, routeSelectorProps);
        }
        case 'setupTotp': {
            return resolveSetupTotpRoute(SetupTotp, routeSelectorProps);
        }
        case 'signIn': {
            return resolveSignInRoute(SignIn, routeSelectorProps);
        }
        case 'signUp': {
            return resolveSignUpRoute(SignUp, routeSelectorProps);
        }
        case 'verifyUser': {
            return resolveVerifyUserRoute(VerifyUser, routeSelectorProps);
        }
        default: {
            return resolveDefault();
        }
    }
}

// only select `route` from machine context
const routeSelector = ({ route }) => [route];
function useAuthenticatorInitMachine(data) {
    const { route, initializeMachine } = useAuthenticator(routeSelector);
    const hasInitialized = React__namespace.default.useRef(false);
    React__namespace.default.useEffect(() => {
        if (!hasInitialized.current && route === 'setup') {
            initializeMachine(data);
            hasInitialized.current = true;
        }
    }, [initializeMachine, route, data]);
}

// default state
const INITIAL_STATE = { hasError: false, isLoading: false, message: undefined };
const LOADING_STATE = { hasError: false, isLoading: true, message: undefined };
const ERROR_STATE = { hasError: true, isLoading: false };
const resolveMaybeAsync = async (value) => {
    const awaited = await value;
    return awaited;
};
function useDataState(action, initialData) {
    const [dataState, setDataState] = React__namespace.default.useState(() => ({
        ...INITIAL_STATE,
        data: initialData,
    }));
    const prevData = React__namespace.default.useRef(initialData);
    const handleAction = React__namespace.default.useCallback((...input) => {
        setDataState(({ data }) => ({ ...LOADING_STATE, data }));
        resolveMaybeAsync(action(prevData.current, ...input))
            .then((data) => {
            prevData.current = data;
            setDataState({ ...INITIAL_STATE, data });
        })
            .catch(({ message }) => {
            setDataState(({ data }) => ({ ...ERROR_STATE, data, message }));
        });
    }, [action]);
    return [dataState, handleAction];
}

/**
 * Logs a deprecation warning message.
 *
 * @important Please use the React/React Native specific platform implementations.
 * This version of the hook is a base implementation that the others extend from due
 * to env differences between running in RN or the browser
 */
const useDeprecationWarning = ({ shouldWarn, message, }) => {
    React__namespace.useEffect(() => {
        if (shouldWarn) {
            // eslint-disable-next-line no-console
            console.warn(message);
        }
    }, [shouldWarn, message]);
};

const INIT_STATE = {
    url: undefined,
    expiresAt: undefined,
    isLoading: true,
};
function useGetUrl(input) {
    const [result, setResult] = React__namespace.useState(() => INIT_STATE);
    React__namespace.useEffect(() => {
        const { onError, ...getUrlInput } = input;
        let ignore = false;
        storage.getUrl(getUrlInput)
            .then((response) => {
            if (ignore) {
                return;
            }
            setResult({ ...response, isLoading: false });
        })
            .catch((error) => {
            if (ignore) {
                return;
            }
            if (ui.isFunction(onError)) {
                onError(error);
            }
            setResult({ ...INIT_STATE, isLoading: false });
        });
        return () => {
            ignore = true;
        };
    }, [input]);
    return result;
}

function usePreviousValue(value) {
    const previous = React.useRef();
    // update ref post render
    React.useEffect(() => {
        previous.current = value;
    }, [value]);
    // return previous ref
    return previous.current;
}

/**
 * @param value `value` to track for updates
 * @param ignoreFirstRender whether to ignore initial render. defaults to `false`
 * @returns a boolean representing whether the tracked `value` has updated between renders
 *
 * Returns `false`:
 * - on initial render when ignoring first render
 * - current and previous `value` are equal
 *
 * Returns `true`:
 * - on initial render when not ignoring first render (default behavior)
 * - current and previous `value` are not equal
 */
function useHasValueUpdated(value, ignoreFirstRender = false) {
    const previous = usePreviousValue(value);
    const shouldIgnoreChange = ui.isUndefined(previous) && ignoreFirstRender;
    if (shouldIgnoreChange) {
        return false;
    }
    return previous !== value;
}

function useSetUserAgent({ componentName, packageName, version, }) {
    React.useEffect(() => {
        const clearUserAgent = ui.setUserAgent({
            componentName,
            packageName,
            version,
        });
        return clearUserAgent;
    }, [componentName, packageName, version]);
}

function useTimeout({ callback, delay, }) {
    const storedCallback = React__namespace.default.useRef(callback);
    React__namespace.default.useLayoutEffect(() => {
        storedCallback.current = callback;
    }, [callback]);
    React__namespace.default.useEffect(() => {
        if (!ui.isTypedFunction(storedCallback.current) || !delay) {
            return;
        }
        const timeoutId = setTimeout(() => {
            storedCallback.current?.();
        }, delay);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [delay]);
}

const INVALID_OPTIONS_MESSAGE = 'an `errorMessage` or a `defaultValue` must be provided in `options`';
/**
 * Uses `ContextType`/`Name` generics and `options` to create:
 * - `${Name}Context`: React Context of type `ContextType`
 * - `Provider${Name}`: React Context `Provider` component exposing the `ContextType`
 *   as optional props
 * - `use${Name}`: Utility Hook exposing the values of `ContextType`. Allows
 *   params with `errorMessage` for granular error messaging
 *
 * @template ContextType Type definition of the Context.
 * > For most use cases the keys of `ContextType` should not be optional in
 * preference of explicit `undefined` to avoid optional types on the
 * Utility Hook return
 *
 * @param options Context utility options. Requires a `contextName`, and
 * either a `defaultValue` of `ContextType` **or** an `errorMessage`
 * allowing for differing behaviors of the Utility Hook when used outside a
 * parent `Provider`:
 *
 * - `defaultValue`: Ensures the Utility Hook returns a default value for
 *   scenarios **where the missing context values should not impact usage**
 * - `errorMessage`: Ensures the Utility Hook throws an error for
 *   scenarios **where the missing context values should prevent** usage
 *
 * @returns `Context`, `Provider` Component and `useContext` Utility Hook
 *
 * @usage
 * ```ts
 * interface StuffContextType {
 *   things: number;
 * }
 *
 * // with `defaultValue`
 * const defaultValue: StuffContextType = { things: 7 };
 *
 * const { StuffProvider, useStuff } = createContextUtilities({
 *   contextName: 'Stuff',
 *   defaultValue,
 * });
 *
 * // with `errorMessage`
 * const { StuffProvider, useStuff } = createContextUtilities<StuffContextType>({
 *   contextName: 'Stuff',
 *   errorMessage: '`useStuff` must be used in a `StuffProvider`'
 * });
 * ```
 */
function createContextUtilities(options) {
    const { contextName, defaultValue, errorMessage } = options ?? {};
    if (ui.isUndefined(defaultValue) && !ui.isString(errorMessage)) {
        throw new Error(INVALID_OPTIONS_MESSAGE);
    }
    const Context = React__namespace.default.createContext(defaultValue);
    function Provider(props) {
        const { children, ...context } = props;
        const value = React__namespace.default.useMemo(() => context, 
        // Unpack `context` for the dep array; using `[context]` results in
        // evaluation on every render
        // eslint-disable-next-line react-hooks/exhaustive-deps
        Object.values(context));
        return React__namespace.default.createElement(Context.Provider, { value: value }, children);
    }
    Provider.displayName = `${contextName}Provider`;
    return {
        [`use${contextName}`]: function (params) {
            const context = React__namespace.default.useContext(Context);
            if (ui.isUndefined(context)) {
                throw new Error(params?.errorMessage ?? errorMessage);
            }
            return context;
        },
        [`${contextName}Provider`]: Provider,
        [`${contextName}Context`]: Context,
    };
}

exports.AuthenticatorProvider = AuthenticatorProvider;
exports.FormProvider = FormProvider;
exports.RenderNothing = RenderNothing;
exports.createContextUtilities = createContextUtilities;
exports.isAuthenticatorComponentRouteKey = isComponentRouteKey;
exports.resolveAuthenticatorComponents = resolveAuthenticatorComponents;
exports.useAuthenticator = useAuthenticator;
exports.useAuthenticatorInitMachine = useAuthenticatorInitMachine;
exports.useAuthenticatorRoute = useAuthenticatorRoute;
exports.useDataState = useDataState;
exports.useDeprecationWarning = useDeprecationWarning;
exports.useField = useField;
exports.useForm = useForm;
exports.useGetUrl = useGetUrl;
exports.useHasValueUpdated = useHasValueUpdated;
exports.usePreviousValue = usePreviousValue;
exports.useSetUserAgent = useSetUserAgent;
exports.useTimeout = useTimeout;
exports.withFormProvider = withFormProvider;
