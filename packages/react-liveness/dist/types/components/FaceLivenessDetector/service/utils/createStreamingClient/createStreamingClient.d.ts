import { RekognitionStreamingClient } from '@aws-sdk/client-rekognitionstreaming';
import { AwsCredentialProvider } from '../../types';
interface CreateClientConfig {
    credentialsProvider?: AwsCredentialProvider;
    endpointOverride?: string;
    region: string;
    systemClockOffset?: number;
}
export declare function createStreamingClient({ credentialsProvider, endpointOverride, region, systemClockOffset, }: CreateClientConfig): Promise<RekognitionStreamingClient>;
export {};
