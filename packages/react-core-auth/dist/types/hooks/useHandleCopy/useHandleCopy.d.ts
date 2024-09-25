interface UseHandleCopyParams {
    /**
     * @param value platform clipboard set handler
     */
    copyHandler: (value: string) => Promise<void>;
    /**
     * length in milliseconds to delay reset
     */
    reset?: number;
    /**
     * `target` to set as clipboard value
     */
    target?: string;
}
interface UseHandleCopy {
    /**
     * @param value callback `value` to set as clipboard value, supercedes `target`
     * @returns
     */
    handleCopy: (value?: string) => void;
    /**
     * copied value
     */
    value: string | undefined;
}
/**
 * @param {UseHandleCopyParams} params requires `copyHandler`
 * @returns {UseHandleCopy} `handleCopy` callback and copied `value`
 */
export default function useHandleCopy({ copyHandler, reset, target, }: UseHandleCopyParams): UseHandleCopy;
export {};
