import { ConsoleLogger } from 'aws-amplify/utils';

const logger = new ConsoleLogger('InAppMessaging');
const handleMessageLinkAction = (input) => {
    let url;
    try {
        url = new URL(input);
    }
    catch {
        logger.warn(`Unsupported url provided: ${input}`);
        return;
    }
    const { protocol } = url;
    const isHttpProtocol = protocol === 'http:';
    const isHttpsProtocol = protocol === 'https:';
    if (!(isHttpProtocol || isHttpsProtocol)) {
        logger.warn(`Unsupported url protocol provided: ${protocol}`);
        return;
    }
    window.open(input);
};

export { handleMessageLinkAction as default };
