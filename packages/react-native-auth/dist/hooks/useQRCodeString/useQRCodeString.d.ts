import { QRCodeToStringOptions } from 'qrcode';
export type UseQRCodeStringParams = {
    onError?: (err: string) => void;
    onSuccess?: (output: string) => void;
    text?: string;
    options?: QRCodeToStringOptions;
};
interface UseQRCodeString {
    hasError: boolean;
    isLoading: boolean;
    qrCodeString: string | null;
}
/**
 * Generates a QR code string from provided `text` param
 *
 * @param {UseQRCodeStringParams} params target text and event callbacks
 * @returns {UseQRCodeString} QR code string and related values
 */
export declare function useQRCodeString(params?: UseQRCodeStringParams): UseQRCodeString;
export {};
