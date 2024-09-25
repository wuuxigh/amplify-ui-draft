'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Field = require('./Field-DNG47Vw2.js');
var React = require('react');
var Storage = require('aws-amplify/storage');
var ui = require('@aws-amplify/ui');
var uiReactCore = require('@aws-amplify/ui-react-core');
require('@aws-amplify/core');
require('aws-amplify/auth');

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
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var Storage__namespace = /*#__PURE__*/_interopNamespace(Storage);

const useStorageURL = ({ key, options, fallbackURL, onStorageGetError, }) => {
    const [url, setURL] = React__namespace.useState();
    const hasKeyUpdated = uiReactCore.useHasValueUpdated(key);
    React__namespace.useEffect(() => {
        if (!hasKeyUpdated) {
            return;
        }
        let ignore = false;
        const input = { key, options };
        Storage__namespace.getUrl(input)
            .then(({ url }) => {
            if (ignore) {
                return;
            }
            setURL(url.toString());
        })
            .catch((error) => {
            if (ignore) {
                return;
            }
            if (ui.isFunction(onStorageGetError)) {
                onStorageGetError(error);
            }
            if (fallbackURL) {
                setURL(fallbackURL);
            }
            return () => {
                ignore = true;
            };
        });
    }, [key, options, fallbackURL, onStorageGetError, hasKeyUpdated]);
    return url;
};

/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 *
 * Hook to get the current breakpoint of the provided theme.
 * @returns {Breakpoint}
 */
const useThemeBreakpoint = () => {
    const { breakpoints: { values: breakpoints, defaultBreakpoint }, } = Field.useTheme();
    const breakpoint = Field.useBreakpoint({
        breakpoints,
        defaultBreakpoint,
    });
    return breakpoint;
};

const FilterChildren = ({ allowedFilters, children = null, targetFilter, }) => {
    const showContent = Array.isArray(allowedFilters) &&
        allowedFilters.some((filter) => filter === targetFilter);
    return showContent ? React__namespace["default"].createElement(React__namespace["default"].Fragment, null, children) : null;
};

/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */
const IconAssistant = (props) => {
    const { className, ...rest } = props;
    return (React__namespace.createElement(Field.View, { as: "span", width: "1em", height: "1em", className: ui.classNames(ui.ComponentClassName.Icon, className), ...rest },
        React__namespace.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8548 1.40981C12.693 0.801759 11.3069 0.801759 10.1451 1.40981L2.14518 5.59679C0.826447 6.28698 0 7.65232 0 9.14075V16.8593C0 18.3477 0.826447 19.713 2.14518 20.4032L10.1451 24.5902C11.3069 25.1982 12.693 25.1982 13.8548 24.5902L21.8547 20.4032C23.1735 19.713 23.9999 18.3477 23.9999 16.8592V9.14075C23.9999 7.65232 23.1735 6.28698 21.8547 5.59679L13.8548 1.40981ZM12.9258 6.05676C12.5872 5.22732 11.4127 5.22732 11.0741 6.05676L9.42869 10.0877C9.31871 10.3572 9.0968 10.5653 8.82088 10.6579L4.665 12.0519C3.7557 12.3569 3.7557 13.6431 4.665 13.9481L8.82088 15.3421C9.0968 15.4347 9.31871 15.6428 9.42869 15.9123L11.0741 19.9432C11.4127 20.7727 12.5872 20.7727 12.9258 19.9432L14.5712 15.9123C14.6812 15.6428 14.9031 15.4347 15.179 15.3421L19.3349 13.9481C20.2442 13.6431 20.2442 12.3569 19.3349 12.0519L15.179 10.6579C14.9031 10.5653 14.6812 10.3572 14.5712 10.0877L12.9258 6.05676Z", fill: "currentColor" }))));
};

/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */
const IconAttach = (props) => {
    const { className, ...rest } = props;
    return (React__namespace.createElement(Field.View, { as: "span", width: "1em", height: "1em", className: ui.classNames(ui.ComponentClassName.Icon, className), ...rest },
        React__namespace.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3928 1.93491L4.23565 11.8583C2.3257 13.7243 2.3257 16.7379 4.23565 18.6039C6.161 20.4849 9.29378 20.4849 11.2191 18.6039L21.2003 8.85257C22.3571 7.72235 22.3571 5.86149 21.2003 4.73128C20.0748 3.63171 18.2753 3.63857 17.1582 4.74668L7.17456 14.6503C6.86543 14.9523 6.8654 15.4303 7.17454 15.7323C7.49908 16.0494 8.03642 16.0494 8.36095 15.7323L18.338 5.98493L19.9926 7.67849L10.0155 17.4259C8.77102 18.6417 6.76446 18.6417 5.51997 17.4259C4.26127 16.1962 4.26007 14.1915 5.51637 12.9603L15.4908 3.06578C17.5259 1.04696 20.8044 1.03447 22.8548 3.03772C24.9625 5.09681 24.9625 8.48703 22.8548 10.5461L12.8737 20.2975C10.0284 23.0773 5.42639 23.0773 2.58108 20.2975C-0.279632 17.5026 -0.279632 12.9596 2.58108 10.1647L12.7383 0.241356L14.3928 1.93491Z", fill: "currentColor" }))));
};

/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */
const IconCheckCircleOutline = (props) => {
    const { className, ...rest } = props;
    return (React__namespace.createElement(Field.View, { as: "span", width: "1em", height: "1em", className: ui.classNames(ui.ComponentClassName.Icon, className), ...rest }));
};

/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */
const IconEdit = (props) => {
    const { className, ...rest } = props;
    return (React__namespace.createElement(Field.View, { as: "span", width: "1em", height: "1em", className: ui.classNames(ui.ComponentClassName.Icon, className), ...rest },
        React__namespace.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__namespace.createElement("path", { d: "M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92l9.06-9.06.92.92L5.92 19H5v-.92zM18.37 3.29a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41l-2.34-2.34z", fill: "currentColor" }))));
};

/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */
const IconFile = (props) => {
    const { className, ...rest } = props;
    return (React__namespace.createElement(Field.View, { as: "span", width: "1em", height: "1em", className: ui.classNames(ui.ComponentClassName.Icon, className), ...rest },
        React__namespace.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__namespace.createElement("path", { d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z", fill: "currentColor" }))));
};

/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */
const IconSend = (props) => {
    const { className, ...rest } = props;
    return (React__namespace.createElement(Field.View, { as: "span", width: "1em", height: "1em", className: ui.classNames(ui.ComponentClassName.Icon, className), ...rest },
        React__namespace.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.34374 0.774436C1.72319 0.451324 2.26162 0.393083 2.70138 0.627584L23.173 11.544C23.5704 11.7559 23.8177 12.1704 23.8155 12.6207C23.8133 13.071 23.5618 13.4831 23.1624 13.691L2.69073 24.3477C2.24914 24.5776 1.71196 24.5144 1.33575 24.1884C0.959534 23.8624 0.820634 23.3396 0.98539 22.8698L4.58366 12.6099L0.982433 2.09133C0.821002 1.61982 0.964295 1.09755 1.34374 0.774436ZM6.72819 13.8281L4.29043 20.779L17.6432 13.8281H6.72819ZM17.7477 11.4013H6.735L4.27542 4.21725L17.7477 11.4013Z", fill: "currentColor" }))));
};

/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */
const IconUpload = (props) => {
    const { className, ...rest } = props;
    return (React__namespace.createElement(Field.View, { as: "span", width: "1em", height: "1em", className: ui.classNames(ui.ComponentClassName.Icon, className), ...rest },
        React__namespace.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__namespace.createElement("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11 8 15.01z", fill: "currentColor" }))));
};

const PrimitiveCatalog = {
    "Alert": {
        "properties": {
            "variation": {
                "type": "string",
                "priority": true
            },
            "isDismissible": {
                "type": "boolean",
                "priority": true
            },
            "dismissButtonLabel": {
                "type": "string"
            },
            "hasIcon": {
                "type": "boolean",
                "priority": true
            },
            "heading": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string",
                "priority": true
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            }
        }
    },
    "Autocomplete": {
        "properties": {
            "isLoading": {
                "type": "boolean"
            },
            "defaultValue": {
                "type": "string"
            },
            "value": {
                "type": "string"
            },
            "hasSearchButton": {
                "type": "boolean"
            },
            "hasSearchIcon": {
                "type": "boolean"
            },
            "labelHidden": {
                "type": "boolean"
            },
            "clearButtonLabel": {
                "type": "string"
            },
            "outerEndComponent": {
                "type": "string"
            },
            "outerStartComponent": {
                "type": "string"
            },
            "innerStartComponent": {
                "type": "string"
            },
            "innerEndComponent": {
                "type": "string"
            },
            "type": {
                "type": "string"
            },
            "descriptiveText": {
                "type": "string"
            },
            "errorMessage": {
                "type": "string"
            },
            "label": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            },
            "autoComplete": {
                "type": "string"
            },
            "checked": {
                "type": "boolean"
            },
            "defaultChecked": {
                "type": "boolean"
            },
            "hasError": {
                "type": "boolean"
            },
            "enterKeyHint": {
                "type": "string"
            },
            "inputMode": {
                "type": "string"
            },
            "isReadOnly": {
                "type": "boolean"
            },
            "isRequired": {
                "type": "boolean"
            },
            "name": {
                "type": "string"
            },
            "placeholder": {
                "type": "string"
            },
            "size": {
                "type": "string"
            },
            "variation": {
                "type": "string"
            }
        }
    },
    "Avatar": {
        "properties": {
            "src": {
                "type": "string"
            },
            "alt": {
                "type": "string"
            },
            "variation": {
                "type": "string"
            },
            "colorTheme": {
                "type": "string"
            },
            "size": {
                "type": "string"
            },
            "isLoading": {
                "type": "boolean"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "Badge": {
        "properties": {
            "variation": {
                "type": "string",
                "priority": true
            },
            "size": {
                "type": "string",
                "priority": true
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string",
                "priority": true
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "Breadcrumbs": {
        "properties": {
            "flex": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "key": {
                "type": "string"
            }
        }
    },
    "Button": {
        "properties": {
            "colorTheme": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "isFullWidth": {
                "type": "boolean"
            },
            "isLoading": {
                "type": "boolean"
            },
            "loadingText": {
                "type": "string"
            },
            "size": {
                "type": "string",
                "priority": true
            },
            "type": {
                "type": "string"
            },
            "variation": {
                "type": "string",
                "priority": true
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string",
                "priority": true
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            }
        }
    },
    "ButtonGroup": {
        "properties": {
            "children": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "direction": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            },
            "variation": {
                "type": "string"
            },
            "size": {
                "type": "string"
            }
        }
    },
    "Card": {
        "properties": {
            "variation": {
                "type": "string",
                "priority": true
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "CheckboxField": {
        "properties": {
            "label": {
                "type": "string"
            },
            "labelHidden": {
                "type": "boolean"
            },
            "name": {
                "type": "string"
            },
            "value": {
                "type": "string"
            },
            "labelPosition": {
                "type": "string"
            },
            "isIndeterminate": {
                "type": "boolean"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            },
            "autoComplete": {
                "type": "string"
            },
            "checked": {
                "type": "boolean"
            },
            "defaultChecked": {
                "type": "boolean"
            },
            "defaultValue": {
                "type": "string"
            },
            "hasError": {
                "type": "boolean"
            },
            "enterKeyHint": {
                "type": "string"
            },
            "inputMode": {
                "type": "string"
            },
            "isReadOnly": {
                "type": "boolean"
            },
            "isRequired": {
                "type": "boolean"
            },
            "placeholder": {
                "type": "string"
            },
            "size": {
                "type": "string"
            },
            "type": {
                "type": "string"
            },
            "variation": {
                "type": "string"
            },
            "descriptiveText": {
                "type": "string"
            },
            "errorMessage": {
                "type": "string"
            }
        }
    },
    "Collection": {
        "properties": {
            "flex": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "type": {
                "type": "string"
            },
            "isPaginated": {
                "type": "boolean"
            },
            "itemsPerPage": {
                "type": "number"
            },
            "isSearchable": {
                "type": "boolean"
            },
            "searchLabel": {
                "type": "string"
            },
            "searchPlaceholder": {
                "type": "string"
            },
            "searchNoResultsFound": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            }
        }
    },
    "Divider": {
        "properties": {
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "orientation": {
                "type": "string",
                "priority": true
            },
            "size": {
                "type": "string",
                "priority": true
            },
            "label": {
                "type": "string"
            }
        }
    },
    "DropZone": {
        "properties": {
            "flex": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "key": {
                "type": "string"
            }
        }
    },
    "Accordion": {
        "properties": {
            "flex": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "key": {
                "type": "string"
            }
        }
    },
    "FieldGroupIcon": {
        "properties": {
            "isVisible": {
                "type": "boolean"
            },
            "excludeFromTabOrder": {
                "type": "boolean"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "FieldGroupIconButton": {
        "properties": {
            "isVisible": {
                "type": "boolean"
            },
            "excludeFromTabOrder": {
                "type": "boolean"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "type": {
                "type": "string"
            },
            "variation": {
                "type": "string"
            },
            "size": {
                "type": "string"
            }
        }
    },
    "Fieldset": {
        "properties": {
            "legend": {
                "type": "string"
            },
            "legendHidden": {
                "type": "boolean"
            },
            "variation": {
                "type": "string"
            },
            "size": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "name": {
                "type": "string"
            },
            "form": {
                "type": "string"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            }
        }
    },
    "Flex": {
        "properties": {
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "direction": {
                "type": "string",
                "priority": true
            },
            "wrap": {
                "type": "string",
                "priority": true
            },
            "alignItems": {
                "type": "string",
                "priority": true
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string",
                "priority": true
            },
            "gap": {
                "type": "string",
                "priority": true
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            }
        }
    },
    "Grid": {
        "properties": {
            "autoColumns": {
                "type": "string"
            },
            "autoFlow": {
                "type": "string"
            },
            "autoRows": {
                "type": "string"
            },
            "templateAreas": {
                "type": "string"
            },
            "templateColumns": {
                "type": "string"
            },
            "templateRows": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "Heading": {
        "properties": {
            "level": {
                "type": "number",
                "priority": true
            },
            "variation": {
                "type": "string"
            },
            "isTruncated": {
                "type": "boolean"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string",
                "priority": true
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "HighlightMatch": {
        "properties": {
            "children": {
                "type": "string"
            },
            "query": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "Icon": {
        "properties": {
            "pathData": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "fill": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string",
                "priority": true
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string",
                "priority": true
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string",
                "priority": true
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "Image": {
        "properties": {
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string",
                "priority": true
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string",
                "priority": true
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "alt": {
                "type": "string",
                "priority": true
            },
            "sizes": {
                "type": "string"
            },
            "src": {
                "type": "string",
                "priority": true
            },
            "srcSet": {
                "type": "string"
            },
            "aspectRatio": {
                "type": "string"
            },
            "objectFit": {
                "type": "string",
                "priority": true
            },
            "objectPosition": {
                "type": "string"
            }
        }
    },
    "Input": {
        "properties": {
            "autoComplete": {
                "type": "string"
            },
            "checked": {
                "type": "boolean"
            },
            "defaultChecked": {
                "type": "boolean"
            },
            "defaultValue": {
                "type": "string"
            },
            "hasError": {
                "type": "boolean"
            },
            "enterKeyHint": {
                "type": "string"
            },
            "inputMode": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "isReadOnly": {
                "type": "boolean"
            },
            "isRequired": {
                "type": "boolean"
            },
            "name": {
                "type": "string"
            },
            "placeholder": {
                "type": "string"
            },
            "size": {
                "type": "string"
            },
            "type": {
                "type": "string"
            },
            "value": {
                "type": "string"
            },
            "variation": {
                "type": "string"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "Label": {
        "properties": {
            "visuallyHidden": {
                "type": "boolean"
            },
            "children": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "Link": {
        "properties": {
            "children": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "isExternal": {
                "type": "boolean"
            },
            "href": {
                "type": "string"
            }
        }
    },
    "Loader": {
        "properties": {
            "size": {
                "type": "string"
            },
            "variation": {
                "type": "string"
            },
            "filledColor": {
                "type": "string"
            },
            "emptyColor": {
                "type": "string"
            },
            "percentage": {
                "type": "number"
            },
            "isDeterminate": {
                "type": "boolean"
            },
            "isPercentageTextHidden": {
                "type": "boolean"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "Menu": {
        "properties": {
            "menuAlign": {
                "type": "string"
            },
            "isOpen": {
                "type": "boolean"
            },
            "size": {
                "type": "string"
            },
            "trigger": {
                "type": "string"
            },
            "triggerClassName": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            }
        }
    },
    "MenuButton": {
        "properties": {
            "flex": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "isLoading": {
                "type": "boolean"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "type": {
                "type": "string"
            },
            "variation": {
                "type": "string"
            },
            "size": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            },
            "isFullWidth": {
                "type": "boolean"
            },
            "loadingText": {
                "type": "string"
            }
        }
    },
    "MenuItem": {
        "properties": {
            "children": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "isLoading": {
                "type": "boolean"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "type": {
                "type": "string"
            },
            "variation": {
                "type": "string"
            },
            "size": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            },
            "isFullWidth": {
                "type": "boolean"
            },
            "loadingText": {
                "type": "string"
            }
        }
    },
    "Message": {
        "properties": {
            "dismissLabel": {
                "type": "string"
            },
            "isDismissible": {
                "type": "boolean"
            },
            "hasIcon": {
                "type": "boolean"
            },
            "heading": {
                "type": "string"
            },
            "variation": {
                "type": "string"
            },
            "colorTheme": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            }
        }
    },
    "Pagination": {
        "properties": {
            "currentPage": {
                "type": "number",
                "priority": true
            },
            "totalPages": {
                "type": "number",
                "priority": true
            },
            "siblingCount": {
                "type": "number",
                "priority": true
            },
            "hasMorePages": {
                "type": "boolean"
            },
            "currentPageLabel": {
                "type": "string"
            },
            "pageLabel": {
                "type": "string"
            },
            "previousLabel": {
                "type": "string"
            },
            "nextLabel": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "PasswordField": {
        "properties": {
            "hideShowPassword": {
                "type": "boolean",
                "priority": true
            },
            "hidePasswordButtonLabel": {
                "type": "string"
            },
            "passwordIsHiddenLabel": {
                "type": "string"
            },
            "passwordIsShownLabel": {
                "type": "string"
            },
            "showPasswordButtonLabel": {
                "type": "string"
            },
            "autoComplete": {
                "type": "string"
            },
            "outerEndComponent": {
                "type": "string"
            },
            "outerStartComponent": {
                "type": "string"
            },
            "innerStartComponent": {
                "type": "string"
            },
            "innerEndComponent": {
                "type": "string"
            },
            "type": {
                "type": "string"
            },
            "descriptiveText": {
                "type": "string",
                "priority": true
            },
            "errorMessage": {
                "type": "string"
            },
            "label": {
                "type": "string",
                "priority": true
            },
            "labelHidden": {
                "type": "boolean",
                "priority": true
            },
            "isDisabled": {
                "type": "boolean",
                "priority": true
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            },
            "checked": {
                "type": "boolean"
            },
            "defaultChecked": {
                "type": "boolean"
            },
            "defaultValue": {
                "type": "string"
            },
            "hasError": {
                "type": "boolean"
            },
            "enterKeyHint": {
                "type": "string"
            },
            "inputMode": {
                "type": "string"
            },
            "isReadOnly": {
                "type": "boolean"
            },
            "isRequired": {
                "type": "boolean"
            },
            "name": {
                "type": "string"
            },
            "placeholder": {
                "type": "string",
                "priority": true
            },
            "size": {
                "type": "string",
                "priority": true
            },
            "value": {
                "type": "string",
                "priority": true
            },
            "variation": {
                "type": "string"
            }
        }
    },
    "PhoneNumberField": {
        "properties": {
            "flex": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean",
                "priority": true
            },
            "id": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "label": {
                "type": "string",
                "priority": true
            },
            "defaultChecked": {
                "type": "boolean"
            },
            "defaultValue": {
                "type": "string"
            },
            "placeholder": {
                "type": "string",
                "priority": true
            },
            "inputMode": {
                "type": "string"
            },
            "type": {
                "type": "string"
            },
            "variation": {
                "type": "string"
            },
            "size": {
                "type": "string",
                "priority": true
            },
            "descriptiveText": {
                "type": "string",
                "priority": true
            },
            "errorMessage": {
                "type": "string"
            },
            "labelHidden": {
                "type": "boolean",
                "priority": true
            },
            "direction": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            },
            "value": {
                "type": "string",
                "priority": true
            },
            "defaultCountryCode": {
                "type": "string"
            },
            "defaultDialCode": {
                "type": "string"
            },
            "dialCodeLabel": {
                "type": "string"
            },
            "dialCodeName": {
                "type": "string"
            },
            "outerEndComponent": {
                "type": "string"
            },
            "outerStartComponent": {
                "type": "string"
            },
            "innerStartComponent": {
                "type": "string"
            },
            "innerEndComponent": {
                "type": "string"
            },
            "autoComplete": {
                "type": "string"
            },
            "checked": {
                "type": "boolean"
            },
            "hasError": {
                "type": "boolean"
            },
            "enterKeyHint": {
                "type": "string"
            },
            "isReadOnly": {
                "type": "boolean"
            },
            "isRequired": {
                "type": "boolean"
            },
            "name": {
                "type": "string"
            },
            "countryCodeLabel": {
                "type": "string"
            },
            "countryCodeName": {
                "type": "string"
            },
            "key": {
                "type": "string"
            },
            "hidden": {
                "type": "boolean"
            },
            "required": {
                "type": "boolean"
            },
            "content": {
                "type": "string"
            },
            "aria-label": {
                "type": "string"
            },
            "aria-valuetext": {
                "type": "string"
            },
            "form": {
                "type": "string"
            },
            "list": {
                "type": "string"
            },
            "slot": {
                "type": "string"
            },
            "title": {
                "type": "string"
            },
            "pattern": {
                "type": "string"
            },
            "suppressContentEditableWarning": {
                "type": "boolean"
            },
            "suppressHydrationWarning": {
                "type": "boolean"
            },
            "accessKey": {
                "type": "string"
            },
            "autoFocus": {
                "type": "boolean"
            },
            "contentEditable": {
                "type": "string"
            },
            "contextMenu": {
                "type": "string"
            },
            "dir": {
                "type": "string"
            },
            "draggable": {
                "type": "string"
            },
            "lang": {
                "type": "string"
            },
            "nonce": {
                "type": "string"
            },
            "spellCheck": {
                "type": "string"
            },
            "tabIndex": {
                "type": "number"
            },
            "translate": {
                "type": "string"
            },
            "radioGroup": {
                "type": "string"
            },
            "about": {
                "type": "string"
            },
            "datatype": {
                "type": "string"
            },
            "prefix": {
                "type": "string"
            },
            "property": {
                "type": "string"
            },
            "rel": {
                "type": "string"
            },
            "resource": {
                "type": "string"
            },
            "rev": {
                "type": "string"
            },
            "typeof": {
                "type": "string"
            },
            "vocab": {
                "type": "string"
            },
            "autoCapitalize": {
                "type": "string"
            },
            "autoCorrect": {
                "type": "string"
            },
            "autoSave": {
                "type": "string"
            },
            "itemProp": {
                "type": "string"
            },
            "itemScope": {
                "type": "boolean"
            },
            "itemType": {
                "type": "string"
            },
            "itemID": {
                "type": "string"
            },
            "itemRef": {
                "type": "string"
            },
            "results": {
                "type": "number"
            },
            "security": {
                "type": "string"
            },
            "unselectable": {
                "type": "string"
            },
            "is": {
                "type": "string"
            },
            "aria-activedescendant": {
                "type": "string"
            },
            "aria-atomic": {
                "type": "string"
            },
            "aria-autocomplete": {
                "type": "string"
            },
            "aria-braillelabel": {
                "type": "string"
            },
            "aria-brailleroledescription": {
                "type": "string"
            },
            "aria-busy": {
                "type": "string"
            },
            "aria-checked": {
                "type": "string"
            },
            "aria-colcount": {
                "type": "number"
            },
            "aria-colindex": {
                "type": "number"
            },
            "aria-colindextext": {
                "type": "string"
            },
            "aria-colspan": {
                "type": "number"
            },
            "aria-controls": {
                "type": "string"
            },
            "aria-current": {
                "type": "string"
            },
            "aria-describedby": {
                "type": "string"
            },
            "aria-description": {
                "type": "string"
            },
            "aria-details": {
                "type": "string"
            },
            "aria-disabled": {
                "type": "string"
            },
            "aria-dropeffect": {
                "type": "string"
            },
            "aria-errormessage": {
                "type": "string"
            },
            "aria-expanded": {
                "type": "string"
            },
            "aria-flowto": {
                "type": "string"
            },
            "aria-grabbed": {
                "type": "string"
            },
            "aria-haspopup": {
                "type": "string"
            },
            "aria-hidden": {
                "type": "string"
            },
            "aria-invalid": {
                "type": "string"
            },
            "aria-keyshortcuts": {
                "type": "string"
            },
            "aria-labelledby": {
                "type": "string"
            },
            "aria-level": {
                "type": "number"
            },
            "aria-live": {
                "type": "string"
            },
            "aria-modal": {
                "type": "string"
            },
            "aria-multiline": {
                "type": "string"
            },
            "aria-multiselectable": {
                "type": "string"
            },
            "aria-orientation": {
                "type": "string"
            },
            "aria-owns": {
                "type": "string"
            },
            "aria-placeholder": {
                "type": "string"
            },
            "aria-posinset": {
                "type": "number"
            },
            "aria-pressed": {
                "type": "string"
            },
            "aria-readonly": {
                "type": "string"
            },
            "aria-relevant": {
                "type": "string"
            },
            "aria-required": {
                "type": "string"
            },
            "aria-roledescription": {
                "type": "string"
            },
            "aria-rowcount": {
                "type": "number"
            },
            "aria-rowindex": {
                "type": "number"
            },
            "aria-rowindextext": {
                "type": "string"
            },
            "aria-rowspan": {
                "type": "number"
            },
            "aria-selected": {
                "type": "string"
            },
            "aria-setsize": {
                "type": "number"
            },
            "aria-sort": {
                "type": "string"
            },
            "aria-valuemax": {
                "type": "number"
            },
            "aria-valuemin": {
                "type": "number"
            },
            "aria-valuenow": {
                "type": "number"
            },
            "src": {
                "type": "string"
            },
            "alt": {
                "type": "string"
            },
            "accept": {
                "type": "string"
            },
            "capture": {
                "type": "string"
            },
            "disabled": {
                "type": "boolean"
            },
            "formAction": {
                "type": "string"
            },
            "formEncType": {
                "type": "string"
            },
            "formMethod": {
                "type": "string"
            },
            "formNoValidate": {
                "type": "boolean"
            },
            "formTarget": {
                "type": "string"
            },
            "max": {
                "type": "string"
            },
            "maxLength": {
                "type": "number"
            },
            "min": {
                "type": "string"
            },
            "minLength": {
                "type": "number"
            },
            "multiple": {
                "type": "boolean"
            },
            "readOnly": {
                "type": "boolean"
            },
            "step": {
                "type": "string"
            }
        }
    },
    "Placeholder": {
        "properties": {
            "isLoaded": {
                "type": "boolean"
            },
            "size": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "Radio": {
        "properties": {
            "value": {
                "type": "string",
                "priority": true
            },
            "labelPosition": {
                "type": "string",
                "priority": true
            },
            "autoComplete": {
                "type": "string"
            },
            "checked": {
                "type": "boolean",
                "priority": true
            },
            "defaultChecked": {
                "type": "boolean"
            },
            "defaultValue": {
                "type": "string"
            },
            "hasError": {
                "type": "boolean"
            },
            "enterKeyHint": {
                "type": "string"
            },
            "inputMode": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean",
                "priority": true
            },
            "isReadOnly": {
                "type": "boolean"
            },
            "isRequired": {
                "type": "boolean"
            },
            "name": {
                "type": "string"
            },
            "placeholder": {
                "type": "string"
            },
            "size": {
                "type": "string",
                "priority": true
            },
            "type": {
                "type": "string"
            },
            "variation": {
                "type": "string"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "RadioGroupField": {
        "properties": {
            "name": {
                "type": "string"
            },
            "value": {
                "type": "string"
            },
            "defaultValue": {
                "type": "string"
            },
            "labelPosition": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "descriptiveText": {
                "type": "string"
            },
            "errorMessage": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            },
            "legend": {
                "type": "string"
            },
            "legendHidden": {
                "type": "boolean"
            },
            "variation": {
                "type": "string"
            },
            "size": {
                "type": "string"
            },
            "form": {
                "type": "string"
            },
            "defaultChecked": {
                "type": "boolean"
            },
            "placeholder": {
                "type": "string"
            },
            "inputMode": {
                "type": "string"
            },
            "type": {
                "type": "string"
            },
            "autoComplete": {
                "type": "string"
            },
            "checked": {
                "type": "boolean"
            },
            "hasError": {
                "type": "boolean"
            },
            "enterKeyHint": {
                "type": "string"
            },
            "isReadOnly": {
                "type": "boolean"
            },
            "isRequired": {
                "type": "boolean"
            }
        }
    },
    "Rating": {
        "properties": {
            "emptyColor": {
                "type": "string",
                "priority": true
            },
            "fillColor": {
                "type": "string",
                "priority": true
            },
            "maxValue": {
                "type": "number",
                "priority": true
            },
            "size": {
                "type": "string",
                "priority": true
            },
            "value": {
                "type": "number",
                "priority": true
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            }
        }
    },
    "ScrollView": {
        "properties": {
            "orientation": {
                "type": "string"
            },
            "autoScroll": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "SearchField": {
        "properties": {
            "defaultValue": {
                "type": "string"
            },
            "value": {
                "type": "string",
                "priority": true
            },
            "hasSearchButton": {
                "type": "boolean"
            },
            "hasSearchIcon": {
                "type": "boolean"
            },
            "labelHidden": {
                "type": "boolean",
                "priority": true
            },
            "clearButtonLabel": {
                "type": "string"
            },
            "outerEndComponent": {
                "type": "string"
            },
            "outerStartComponent": {
                "type": "string"
            },
            "innerStartComponent": {
                "type": "string"
            },
            "innerEndComponent": {
                "type": "string"
            },
            "type": {
                "type": "string"
            },
            "descriptiveText": {
                "type": "string",
                "priority": true
            },
            "errorMessage": {
                "type": "string"
            },
            "label": {
                "type": "string",
                "priority": true
            },
            "isDisabled": {
                "type": "boolean",
                "priority": true
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            },
            "autoComplete": {
                "type": "string"
            },
            "checked": {
                "type": "boolean"
            },
            "defaultChecked": {
                "type": "boolean"
            },
            "hasError": {
                "type": "boolean"
            },
            "enterKeyHint": {
                "type": "string"
            },
            "inputMode": {
                "type": "string"
            },
            "isReadOnly": {
                "type": "boolean"
            },
            "isRequired": {
                "type": "boolean"
            },
            "name": {
                "type": "string"
            },
            "placeholder": {
                "type": "string",
                "priority": true
            },
            "size": {
                "type": "string",
                "priority": true
            },
            "variation": {
                "type": "string",
                "priority": true
            }
        }
    },
    "SelectField": {
        "properties": {
            "descriptiveText": {
                "type": "string"
            },
            "errorMessage": {
                "type": "string"
            },
            "label": {
                "type": "string"
            },
            "labelHidden": {
                "type": "boolean"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            },
            "autoComplete": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "defaultValue": {
                "type": "string"
            },
            "value": {
                "type": "string"
            },
            "size": {
                "type": "string"
            },
            "variation": {
                "type": "string"
            },
            "iconColor": {
                "type": "string"
            },
            "placeholder": {
                "type": "string"
            },
            "hasError": {
                "type": "boolean"
            },
            "isMultiple": {
                "type": "boolean"
            },
            "selectSize": {
                "type": "number"
            },
            "isRequired": {
                "type": "boolean"
            }
        }
    },
    "SliderField": {
        "properties": {
            "min": {
                "type": "number",
                "priority": true
            },
            "max": {
                "type": "number",
                "priority": true
            },
            "step": {
                "type": "number",
                "priority": true
            },
            "orientation": {
                "type": "string",
                "priority": true
            },
            "isValueHidden": {
                "type": "boolean"
            },
            "trackSize": {
                "type": "string"
            },
            "emptyTrackColor": {
                "type": "string",
                "priority": true
            },
            "filledTrackColor": {
                "type": "string",
                "priority": true
            },
            "thumbColor": {
                "type": "string",
                "priority": true
            },
            "value": {
                "type": "number",
                "priority": true
            },
            "defaultValue": {
                "type": "number"
            },
            "dir": {
                "type": "string"
            },
            "outerEndComponent": {
                "type": "string"
            },
            "outerStartComponent": {
                "type": "string"
            },
            "innerStartComponent": {
                "type": "string"
            },
            "innerEndComponent": {
                "type": "string"
            },
            "type": {
                "type": "string"
            },
            "descriptiveText": {
                "type": "string",
                "priority": true
            },
            "errorMessage": {
                "type": "string"
            },
            "label": {
                "type": "string",
                "priority": true
            },
            "labelHidden": {
                "type": "boolean"
            },
            "isDisabled": {
                "type": "boolean",
                "priority": true
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            },
            "autoComplete": {
                "type": "string"
            },
            "checked": {
                "type": "boolean"
            },
            "defaultChecked": {
                "type": "boolean"
            },
            "hasError": {
                "type": "boolean"
            },
            "enterKeyHint": {
                "type": "string"
            },
            "inputMode": {
                "type": "string"
            },
            "isReadOnly": {
                "type": "boolean"
            },
            "isRequired": {
                "type": "boolean"
            },
            "name": {
                "type": "string"
            },
            "placeholder": {
                "type": "string",
                "priority": true
            },
            "size": {
                "type": "string",
                "priority": true
            },
            "variation": {
                "type": "string"
            }
        }
    },
    "StepperField": {
        "properties": {
            "type": {
                "type": "string"
            },
            "min": {
                "type": "number",
                "priority": true
            },
            "max": {
                "type": "number",
                "priority": true
            },
            "step": {
                "type": "number",
                "priority": true
            },
            "value": {
                "type": "number",
                "priority": true
            },
            "defaultValue": {
                "type": "number"
            },
            "increaseButtonLabel": {
                "type": "string"
            },
            "decreaseButtonLabel": {
                "type": "string"
            },
            "outerEndComponent": {
                "type": "string"
            },
            "outerStartComponent": {
                "type": "string"
            },
            "innerStartComponent": {
                "type": "string"
            },
            "innerEndComponent": {
                "type": "string"
            },
            "descriptiveText": {
                "type": "string",
                "priority": true
            },
            "errorMessage": {
                "type": "string"
            },
            "label": {
                "type": "string",
                "priority": true
            },
            "labelHidden": {
                "type": "boolean",
                "priority": true
            },
            "isDisabled": {
                "type": "boolean",
                "priority": true
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            },
            "autoComplete": {
                "type": "string"
            },
            "checked": {
                "type": "boolean"
            },
            "defaultChecked": {
                "type": "boolean"
            },
            "hasError": {
                "type": "boolean"
            },
            "enterKeyHint": {
                "type": "string"
            },
            "inputMode": {
                "type": "string"
            },
            "isReadOnly": {
                "type": "boolean"
            },
            "isRequired": {
                "type": "boolean"
            },
            "name": {
                "type": "string"
            },
            "placeholder": {
                "type": "string",
                "priority": true
            },
            "size": {
                "type": "string",
                "priority": true
            },
            "variation": {
                "type": "string",
                "priority": true
            }
        }
    },
    "SwitchField": {
        "properties": {
            "defaultChecked": {
                "type": "boolean"
            },
            "isChecked": {
                "type": "boolean",
                "priority": true
            },
            "isDisabled": {
                "type": "boolean",
                "priority": true
            },
            "isLabelHidden": {
                "type": "boolean",
                "priority": true
            },
            "label": {
                "type": "string",
                "priority": true
            },
            "labelPosition": {
                "type": "string",
                "priority": true
            },
            "name": {
                "type": "string"
            },
            "size": {
                "type": "string",
                "priority": true
            },
            "thumbColor": {
                "type": "string",
                "priority": true
            },
            "trackColor": {
                "type": "string",
                "priority": true
            },
            "trackCheckedColor": {
                "type": "string",
                "priority": true
            },
            "value": {
                "type": "string",
                "priority": true
            },
            "autoComplete": {
                "type": "string"
            },
            "checked": {
                "type": "boolean"
            },
            "defaultValue": {
                "type": "string"
            },
            "hasError": {
                "type": "boolean"
            },
            "enterKeyHint": {
                "type": "string"
            },
            "inputMode": {
                "type": "string"
            },
            "isReadOnly": {
                "type": "boolean"
            },
            "isRequired": {
                "type": "boolean"
            },
            "placeholder": {
                "type": "string",
                "priority": true
            },
            "type": {
                "type": "string"
            },
            "variation": {
                "type": "string"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "descriptiveText": {
                "type": "string",
                "priority": true
            },
            "errorMessage": {
                "type": "string"
            },
            "labelHidden": {
                "type": "boolean"
            }
        }
    },
    "Tabs": {
        "properties": {
            "flex": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "key": {
                "type": "string"
            }
        }
    },
    "Text": {
        "properties": {
            "variation": {
                "type": "string"
            },
            "isTruncated": {
                "type": "boolean"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string",
                "priority": true
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string",
                "priority": true
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string",
                "priority": true
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string",
                "priority": true
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "TextAreaField": {
        "properties": {
            "autoResize": {
                "type": "boolean"
            },
            "descriptiveText": {
                "type": "string",
                "priority": true
            },
            "errorMessage": {
                "type": "string"
            },
            "label": {
                "type": "string",
                "priority": true
            },
            "labelHidden": {
                "type": "boolean"
            },
            "isDisabled": {
                "type": "boolean",
                "priority": true
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            },
            "autoComplete": {
                "type": "string"
            },
            "defaultValue": {
                "type": "string"
            },
            "hasError": {
                "type": "boolean"
            },
            "isReadOnly": {
                "type": "boolean"
            },
            "isRequired": {
                "type": "boolean"
            },
            "maxLength": {
                "type": "number",
                "priority": true
            },
            "name": {
                "type": "string"
            },
            "placeholder": {
                "type": "string",
                "priority": true
            },
            "rows": {
                "type": "number",
                "priority": true
            },
            "size": {
                "type": "string",
                "priority": true
            },
            "value": {
                "type": "string",
                "priority": true
            },
            "variation": {
                "type": "string",
                "priority": true
            },
            "resize": {
                "type": "string",
                "priority": true
            }
        }
    },
    "TextField": {
        "properties": {
            "outerEndComponent": {
                "type": "string"
            },
            "outerStartComponent": {
                "type": "string"
            },
            "innerStartComponent": {
                "type": "string"
            },
            "innerEndComponent": {
                "type": "string"
            },
            "type": {
                "type": "string"
            },
            "descriptiveText": {
                "type": "string",
                "priority": true
            },
            "errorMessage": {
                "type": "string"
            },
            "label": {
                "type": "string",
                "priority": true
            },
            "labelHidden": {
                "type": "boolean"
            },
            "isDisabled": {
                "type": "boolean",
                "priority": true
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            },
            "autoComplete": {
                "type": "string"
            },
            "checked": {
                "type": "boolean"
            },
            "defaultChecked": {
                "type": "boolean"
            },
            "defaultValue": {
                "type": "string"
            },
            "hasError": {
                "type": "boolean"
            },
            "enterKeyHint": {
                "type": "string"
            },
            "inputMode": {
                "type": "string"
            },
            "isReadOnly": {
                "type": "boolean"
            },
            "isRequired": {
                "type": "boolean"
            },
            "name": {
                "type": "string"
            },
            "placeholder": {
                "type": "string",
                "priority": true
            },
            "size": {
                "type": "string",
                "priority": true
            },
            "value": {
                "type": "string",
                "priority": true
            },
            "variation": {
                "type": "string",
                "priority": true
            }
        }
    },
    "ToggleButton": {
        "properties": {
            "value": {
                "type": "string"
            },
            "isPressed": {
                "type": "boolean"
            },
            "defaultPressed": {
                "type": "boolean"
            },
            "flex": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "isLoading": {
                "type": "boolean"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "type": {
                "type": "string"
            },
            "variation": {
                "type": "string"
            },
            "size": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            },
            "isFullWidth": {
                "type": "boolean"
            },
            "loadingText": {
                "type": "string"
            }
        }
    },
    "ToggleButtonGroup": {
        "properties": {
            "children": {
                "type": "string"
            },
            "isExclusive": {
                "type": "boolean"
            },
            "isSelectionRequired": {
                "type": "boolean"
            },
            "value": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            },
            "direction": {
                "type": "string"
            },
            "wrap": {
                "type": "string"
            },
            "alignItems": {
                "type": "string"
            },
            "alignContent": {
                "type": "string"
            },
            "justifyContent": {
                "type": "string"
            },
            "gap": {
                "type": "string"
            },
            "columnGap": {
                "type": "string"
            },
            "rowGap": {
                "type": "string"
            },
            "variation": {
                "type": "string"
            },
            "size": {
                "type": "string"
            }
        }
    },
    "View": {
        "properties": {
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "VisuallyHidden": {
        "properties": {
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "Table": {
        "properties": {
            "caption": {
                "type": "string"
            },
            "highlightOnHover": {
                "type": "boolean"
            },
            "size": {
                "type": "string"
            },
            "variation": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "TableBody": {
        "properties": {
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "TableCell": {
        "properties": {
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "TableFoot": {
        "properties": {
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "TableHead": {
        "properties": {
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    },
    "TableRow": {
        "properties": {
            "isDisabled": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "children": {
                "type": "string"
            },
            "className": {
                "type": "string"
            },
            "testId": {
                "type": "string"
            },
            "inert": {
                "type": "boolean"
            },
            "alignSelf": {
                "type": "string"
            },
            "backgroundColor": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "border": {
                "type": "string"
            },
            "borderColor": {
                "type": "string"
            },
            "borderWidth": {
                "type": "string"
            },
            "borderStyle": {
                "type": "string"
            },
            "borderRadius": {
                "type": "string"
            },
            "bottom": {
                "type": "string"
            },
            "boxShadow": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "display": {
                "type": "string"
            },
            "fontFamily": {
                "type": "string"
            },
            "fontSize": {
                "type": "string"
            },
            "fontStyle": {
                "type": "string"
            },
            "fontWeight": {
                "type": "string"
            },
            "height": {
                "type": "string"
            },
            "left": {
                "type": "string"
            },
            "letterSpacing": {
                "type": "string"
            },
            "lineHeight": {
                "type": "string"
            },
            "margin": {
                "type": "string"
            },
            "marginBlock": {
                "type": "string"
            },
            "marginBlockEnd": {
                "type": "string"
            },
            "marginBlockStart": {
                "type": "string"
            },
            "marginBottom": {
                "type": "string"
            },
            "marginInline": {
                "type": "string"
            },
            "marginInlineEnd": {
                "type": "string"
            },
            "marginInlineStart": {
                "type": "string"
            },
            "marginLeft": {
                "type": "string"
            },
            "marginRight": {
                "type": "string"
            },
            "marginTop": {
                "type": "string"
            },
            "maxHeight": {
                "type": "string"
            },
            "maxWidth": {
                "type": "string"
            },
            "minHeight": {
                "type": "string"
            },
            "minWidth": {
                "type": "string"
            },
            "opacity": {
                "type": "string"
            },
            "overflow": {
                "type": "string"
            },
            "padding": {
                "type": "string"
            },
            "paddingBlock": {
                "type": "string"
            },
            "paddingBlockEnd": {
                "type": "string"
            },
            "paddingBlockStart": {
                "type": "string"
            },
            "paddingBottom": {
                "type": "string"
            },
            "paddingInline": {
                "type": "string"
            },
            "paddingInlineEnd": {
                "type": "string"
            },
            "paddingInlineStart": {
                "type": "string"
            },
            "paddingLeft": {
                "type": "string"
            },
            "paddingRight": {
                "type": "string"
            },
            "paddingTop": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "right": {
                "type": "string"
            },
            "textAlign": {
                "type": "string"
            },
            "textDecoration": {
                "type": "string"
            },
            "textTransform": {
                "type": "string"
            },
            "top": {
                "type": "string"
            },
            "transform": {
                "type": "string"
            },
            "transformOrigin": {
                "type": "string"
            },
            "width": {
                "type": "string"
            },
            "whiteSpace": {
                "type": "string"
            },
            "flex": {
                "type": "string"
            },
            "order": {
                "type": "string"
            },
            "grow": {
                "type": "string"
            },
            "shrink": {
                "type": "string"
            },
            "basis": {
                "type": "string"
            },
            "area": {
                "type": "string"
            },
            "column": {
                "type": "string"
            },
            "columnEnd": {
                "type": "string"
            },
            "columnSpan": {
                "type": "string"
            },
            "columnStart": {
                "type": "string"
            },
            "row": {
                "type": "string"
            },
            "rowEnd": {
                "type": "string"
            },
            "rowSpan": {
                "type": "string"
            },
            "rowStart": {
                "type": "string"
            },
            "ariaLabel": {
                "type": "string"
            },
            "ariaValuetext": {
                "type": "string"
            },
            "role": {
                "type": "string"
            }
        }
    }
};

exports.AlertIcon = Field.AlertIcon;
exports.Field = Field.Field;
exports.IconAdd = Field.IconAdd;
exports.IconCheck = Field.IconCheck;
exports.IconCheckCircle = Field.IconCheckCircle;
exports.IconChevronLeft = Field.IconChevronLeft;
exports.IconChevronRight = Field.IconChevronRight;
exports.IconClose = Field.IconClose;
exports.IconError = Field.IconError;
exports.IconExpandMore = Field.IconExpandMore;
exports.IconIndeterminate = Field.IconIndeterminate;
exports.IconInfo = Field.IconInfo;
exports.IconMenu = Field.IconMenu;
exports.IconRemove = Field.IconRemove;
exports.IconSearch = Field.IconSearch;
exports.IconStar = Field.IconStar;
exports.IconUser = Field.IconUser;
exports.IconVisibility = Field.IconVisibility;
exports.IconVisibilityOff = Field.IconVisibilityOff;
exports.IconWarning = Field.IconWarning;
exports.useAuth = Field.useAuth;
exports.useColorMode = Field.useColorMode;
exports.useDeprecationWarning = Field.useDeprecationWarning;
exports.useDropZone = Field.useDropZone;
exports.useIcons = Field.useIcons;
exports.FilterChildren = FilterChildren;
exports.IconAssistant = IconAssistant;
exports.IconAttach = IconAttach;
exports.IconCheckCircleOutline = IconCheckCircleOutline;
exports.IconEdit = IconEdit;
exports.IconFile = IconFile;
exports.IconSend = IconSend;
exports.IconUpload = IconUpload;
exports.PrimitiveCatalog = PrimitiveCatalog;
exports.useStorageURL = useStorageURL;
exports.useThemeBreakpoint = useThemeBreakpoint;
