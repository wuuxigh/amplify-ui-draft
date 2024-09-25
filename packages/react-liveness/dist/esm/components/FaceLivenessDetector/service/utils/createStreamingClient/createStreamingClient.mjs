import { RekognitionStreamingClient } from '@aws-sdk/client-rekognitionstreaming';
import { getAmplifyUserAgent } from '@aws-amplify/core/internals/utils';
import { getLivenessUserAgent } from '../../../utils/platform.mjs';
import { CustomWebSocketFetchHandler } from './CustomWebSocketFetchHandler.mjs';
import { resolveCredentials } from './resolveCredentials.mjs';
import { Signer } from './Signer.mjs';

const CONNECTION_TIMEOUT = 10000;
const CUSTOM_USER_AGENT = `${getAmplifyUserAgent()} ${getLivenessUserAgent()}`;
async function createStreamingClient({ credentialsProvider, endpointOverride, region, systemClockOffset, }) {
    const credentials = await resolveCredentials(credentialsProvider);
    const clientconfig = {
        credentials,
        customUserAgent: CUSTOM_USER_AGENT,
        region,
        requestHandler: new CustomWebSocketFetchHandler({
            connectionTimeout: CONNECTION_TIMEOUT,
        }),
        signerConstructor: Signer,
        systemClockOffset,
    };
    if (endpointOverride) {
        clientconfig.endpointProvider = () => ({ url: new URL(endpointOverride) });
    }
    return new RekognitionStreamingClient(clientconfig);
}

export { createStreamingClient };
