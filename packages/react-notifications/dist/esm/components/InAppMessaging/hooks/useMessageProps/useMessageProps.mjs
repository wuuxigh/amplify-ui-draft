import { useRef, useEffect, useMemo } from 'react';
import useMessageImage from '../useMessageImage/useMessageImage.mjs';
import { getMessageStyles, getPayloadStyle } from './utils.mjs';

/**
 * Handle common message UI component prop logic including render booleans, and
 * style resolving
 *
 * @param props message UI component props
 *
 * @returns message UI component render related booleans and styles
 */
function useMessageProps(props) {
    const { image, onDisplay } = props;
    const hasDisplayed = useRef(false);
    const { hasRenderableImage, isImageFetching } = useMessageImage(image);
    const shouldRenderMessage = !isImageFetching;
    useEffect(() => {
        if (!hasDisplayed.current && shouldRenderMessage) {
            onDisplay?.();
            hasDisplayed.current = true;
        }
    }, [onDisplay, shouldRenderMessage]);
    const styles = useMemo(() => getMessageStyles({
        styleParams: {
            payloadStyle: getPayloadStyle(props),
            overrideStyle: props.style,
        },
    }), [props]);
    return { hasRenderableImage, shouldRenderMessage, styles };
}

export { useMessageProps as default };
