import { SignatureV4 } from '@smithy/signature-v4';
import { HttpRequest as HttpRequest, RequestPresigningArguments } from './types';
export declare const REQUEST_EXPIRY = 299;
export declare class Signer extends SignatureV4 {
    presign(request: HttpRequest, options?: Omit<RequestPresigningArguments, 'expiresIn'>): Promise<HttpRequest>;
}
