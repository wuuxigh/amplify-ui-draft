import { SignatureV4 } from '@smithy/signature-v4';

// override aws sdk default value of 60
const REQUEST_EXPIRY = 299;
class Signer extends SignatureV4 {
    presign(request, options) {
        return super.presign(request, {
            ...options,
            expiresIn: REQUEST_EXPIRY,
            // `headers` that should not be signed. Liveness WebSocket
            // request omits `headers` except for required `host` header. Signature
            // could be a mismatch if other `headers` are signed
            unsignableHeaders: new Set(Object.keys(request.headers).filter((header) => header !== 'host')),
        });
    }
}

export { REQUEST_EXPIRY, Signer };
