import React from 'react';
import { toString as toQRCodeString } from 'qrcode';
import { isFunction } from '@aws-amplify/ui';
const INITIAL_OUTPUT = { hasError: false, qrCodeString: null };
const ERROR_OUTPUT = { hasError: true, qrCodeString: null };
/**
 * Generates a QR code string from provided `text` param
 *
 * @param {UseQRCodeStringParams} params target text and event callbacks
 * @returns {UseQRCodeString} QR code string and related values
 */
export function useQRCodeString(params) {
    const { onError, onSuccess, text, options } = params ?? {};
    const [{ hasError, qrCodeString }, setOutput] = React.useState(() => INITIAL_OUTPUT);
    // only true when a `text` param has been provided and
    // both `qrCodeString` and `hasError` are falsy
    const isLoading = !!(text && !qrCodeString && !hasError);
    React.useEffect(() => {
        if (!text) {
            return;
        }
        let ignore = false;
        toQRCodeString(text, options)
            .then((_qrCodeString) => {
            if (ignore) {
                return;
            }
            if (isFunction(onSuccess)) {
                onSuccess(_qrCodeString);
            }
            setOutput({ hasError: false, qrCodeString: _qrCodeString });
        })
            .catch((error) => {
            if (ignore) {
                return;
            }
            if (isFunction(onError)) {
                onError(error.message);
            }
            setOutput(ERROR_OUTPUT);
        });
        return () => {
            ignore = true;
        };
    }, [onError, onSuccess, options, text]);
    return { hasError, isLoading, qrCodeString };
}
