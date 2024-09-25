import { useState, useEffect } from 'react';
import { ConsoleLogger } from 'aws-amplify/utils';
import { ImagePrefetchStatus } from './types.mjs';

const logger = new ConsoleLogger('InAppMessaging');
/**
 * Handles prefetching for message images
 *
 * @param image contains image source
 * @returns message image dimensions and fetching related booleans
 */
function useMessageImage(image) {
    const { src } = image ?? {};
    const shouldPrefetch = !!src;
    // set initial status to fetching if prefetch is required
    const [prefetchStatus, setPrefetchStatus] = useState(shouldPrefetch ? ImagePrefetchStatus.Fetching : null);
    const isImageFetching = prefetchStatus === ImagePrefetchStatus.Fetching;
    const hasRenderableImage = prefetchStatus === ImagePrefetchStatus.Success;
    useEffect(() => {
        if (!shouldPrefetch) {
            return;
        }
        const img = new Image();
        img.onload = () => {
            setPrefetchStatus(ImagePrefetchStatus.Success);
        };
        img.onabort = () => {
            logger.error(`Image load aborted: ${src}`);
            setPrefetchStatus(ImagePrefetchStatus.Aborted);
        };
        img.onerror = () => {
            logger.error(`Image failed to load: ${src}`);
            setPrefetchStatus(ImagePrefetchStatus.Failure);
        };
        img.src = src;
    }, [shouldPrefetch, src]);
    return { hasRenderableImage, isImageFetching };
}

export { useMessageImage as default };
