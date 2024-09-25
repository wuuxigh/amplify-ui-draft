import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { interpret } from 'xstate';
import { getCurrentUser } from 'aws-amplify/auth';
import { ConsoleLogger as Logger } from 'aws-amplify/utils';
import { createAuthenticatorMachine, defaultAuthHubHandler, getServiceFacade, listenToAuthHub, } from '@aws-amplify/ui';
import { translate } from '@aws-amplify/ui';
import * as i0 from "@angular/core";
const logger = new Logger('state-machine');
/**
 * AuthenticatorService provides access to the authenticator state and context.
 */
export class AuthenticatorService {
    constructor() {
        this._authStatus = 'configuring';
        const machine = createAuthenticatorMachine();
        this._authService = interpret(machine).start();
        this.getInitialAuthStatus();
        this.setupMachineSubscription();
        this.setupHubListener();
    }
    /**
     * Context facades
     */
    get error() {
        return translate(this._facade?.error);
    }
    get hasValidationErrors() {
        return this._facade?.hasValidationErrors;
    }
    get isPending() {
        return this._facade?.isPending;
    }
    get route() {
        return this._facade?.route;
    }
    get authStatus() {
        return this._authStatus;
    }
    get user() {
        return this._facade?.user;
    }
    get username() {
        return this._facade?.username;
    }
    get validationErrors() {
        return this._facade?.validationErrors;
    }
    get codeDeliveryDetails() {
        return this._facade?.codeDeliveryDetails;
    }
    get totpSecretCode() {
        return this._facade?.totpSecretCode;
    }
    /**
     * Service facades
     */
    get initializeMachine() {
        return this._facade.initializeMachine;
    }
    get updateForm() {
        return this._facade.updateForm;
    }
    get updateBlur() {
        return this._facade.updateBlur;
    }
    get resendCode() {
        return this._facade.resendCode;
    }
    get signOut() {
        return this._facade.signOut;
    }
    get submitForm() {
        return this._facade.submitForm;
    }
    /**
     * Transition facades
     */
    get toFederatedSignIn() {
        return this._facade.toFederatedSignIn;
    }
    get toForgotPassword() {
        return this._facade.toForgotPassword;
    }
    get toSignIn() {
        return this._facade.toSignIn;
    }
    get toSignUp() {
        return this._facade.toSignUp;
    }
    get skipVerification() {
        return this._facade.skipVerification;
    }
    /**
     * Internal utility functions
     */
    /** @deprecated For internal use only */
    get authState() {
        return this._authState;
    }
    /** @deprecated For internal use only */
    get authService() {
        return this._authService;
    }
    /** @deprecated For internal use only */
    get context() {
        return this._authState.context;
    }
    /** @deprecated For internal use only */
    get slotContext() {
        return {
            ...this._facade,
            $implicit: this._facade,
        };
    }
    /** @deprecated For internal use only */
    get hubSubject() {
        return this._hubSubject;
    }
    subscribe(callback) {
        if (!this._authService) {
            logger.error('Subscription attempted before machine was created. This is likely a bug on the library, please consider filing a bug.');
        }
        const subscription = this._authService.subscribe(() => {
            callback(this._facade);
        });
        return subscription;
    }
    ngOnDestroy() {
        if (this._machineSubscription)
            this._machineSubscription.unsubscribe();
        if (this._unsubscribeHub)
            this._unsubscribeHub();
    }
    /** @deprecated For internal use only */
    send(event) {
        this.authService.send(event);
    }
    async getInitialAuthStatus() {
        try {
            await getCurrentUser();
            this._authStatus = 'authenticated';
        }
        catch (e) {
            this._authStatus = 'unauthenticated';
        }
    }
    setupHubListener() {
        this._hubSubject = new Subject();
        const onSignIn = () => {
            this._authStatus = 'authenticated';
        };
        const onSignOut = () => {
            this._authStatus = 'unauthenticated';
        };
        this._unsubscribeHub = listenToAuthHub(this._authService, (data, service) => {
            defaultAuthHubHandler(data, service, { onSignIn, onSignOut });
            this._hubSubject.next();
        });
    }
    setupMachineSubscription() {
        this._machineSubscription = this._authService.subscribe((state) => {
            const newState = state;
            this._authState = newState;
            this._facade = getServiceFacade({
                send: this._authService.send,
                state: newState,
            });
        });
    }
}
AuthenticatorService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AuthenticatorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AuthenticatorService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AuthenticatorService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AuthenticatorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root', // ensure we have a singleton service
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktYW5ndWxhci9zcmMvbGliL3NlcnZpY2VzL2F1dGhlbnRpY2F0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFTLFNBQVMsRUFBZ0IsTUFBTSxRQUFRLENBQUM7QUFFeEQsT0FBTyxFQUFZLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLElBQUksTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDNUQsT0FBTyxFQU9MLDBCQUEwQixFQUMxQixxQkFBcUIsRUFDckIsZ0JBQWdCLEVBQ2hCLGVBQWUsR0FDaEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBSTVDLE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRTNDOztHQUVHO0FBSUgsTUFBTSxPQUFPLG9CQUFvQjtJQVMvQjtRQVBRLGdCQUFXLEdBQWUsYUFBYSxDQUFDO1FBUTlDLE1BQU0sT0FBTyxHQUFHLDBCQUEwQixFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFL0MsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVEOztPQUVHO0lBRUgsSUFBVyxLQUFLO1FBQ2QsT0FBTyxTQUFTLENBQUMs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LFdBQVcsR0FBRyxpQkFBaUIsQ0FBQztRQUN2QyxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FDcEMsSUFBSSxDQUFDLFlBQVksRUFDakIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDaEIscUJBQXFCLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRU8sd0JBQXdCO1FBQzlCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FDckQsQ0FBQyxLQUFjLEVBQUUsRUFBRTtZQUNqQixNQUFNLFFBQVEsR0FBRyxLQUF5QixDQUFDO1lBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQzlCLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUk7Z0JBQzVCLEtBQUssRUFBRSxRQUFRO2FBQ2hCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7aUhBbE5VLG9CQUFvQjtxSEFBcEIsb0JBQW9CLGNBRm5CLE1BQU07MkZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNLEVBQUUscUNBQXFDO2lCQUMxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRXZlbnQsIGludGVycHJldCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAneHN0YXRlJztcblxuaW1wb3J0IHsgQXV0aFVzZXIsIGdldEN1cnJlbnRVc2VyIH0gZnJvbSAnYXdzLWFtcGxpZnkvYXV0aCc7XG5pbXBvcnQgeyBDb25zb2xlTG9nZ2VyIGFzIExvZ2dlciB9IGZyb20gJ2F3cy1hbXBsaWZ5L3V0aWxzJztcbmltcG9ydCB7XG4gIEF1dGhDb250ZXh0LFxuICBBdXRoZW50aWNhdG9yU2VydmljZUZhY2FkZSxcbiAgQXV0aEV2ZW50LFxuICBBdXRoSW50ZXJwcmV0ZXIsXG4gIEF1dGhNYWNoaW5lU3RhdGUsXG4gIEF1dGhTdGF0dXMsXG4gIGNyZWF0ZUF1dGhlbnRpY2F0b3JNYWNoaW5lLFxuICBkZWZhdWx0QXV0aEh1YkhhbmRsZXIsXG4gIGdldFNlcnZpY2VGYWNhZGUsXG4gIGxpc3RlblRvQXV0aEh1Yixcbn0gZnJvbSAnQGF3cy1hbXBsaWZ5L3VpJztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJ0Bhd3MtYW1wbGlmeS91aSc7XG5cbmltcG9ydCB7IEF1dGhTdWJzY3JpcHRpb25DYWxsYmFjayB9IGZyb20gJy4uL2NvbW1vbi90eXBlcyc7XG5cbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoJ3N0YXRlLW1hY2hpbmUnKTtcblxuLyoqXG4gKiBBdXRoZW50aWNhdG9yU2VydmljZSBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIGF1dGhlbnRpY2F0b3Igc3RhdGUgYW5kIGNvbnRleHQuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLCAvLyBlbnN1cmUgd2UgaGF2ZSBhIHNpbmdsZXRvbiBzZXJ2aWNlXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0b3JTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfYXV0aFN0YXRlOiBBdXRoTWFjaGluZVN0YXRlO1xuICBwcml2YXRlIF9hdXRoU3RhdHVzOiBBdXRoU3RhdHVzID0gJ2NvbmZpZ3VyaW5nJztcbiAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhJbnRlcnByZXRlcjtcbiAgcHJpdmF0ZSBfbWFjaGluZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9mYWNhZGU6IFJldHVyblR5cGU8dHlwZW9mIGdldFNlcnZpY2VGYWNhZGU+O1xuICBwcml2YXRlIF9odWJTdWJqZWN0OiBTdWJqZWN0PHZvaWQ+O1xuICBwcml2YXRlIF91bnN1YnNjcmliZUh1YjogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBtYWNoaW5lID0gY3JlYXRlQXV0aGVudGljYXRvck1hY2hpbmUoKTtcbiAgICB0aGlzLl9hdXRoU2VydmljZSA9IGludGVycHJldChtYWNoaW5lKS5zdGFydCgpO1xuXG4gICAgdGhpcy5nZXRJbml0aWFsQXV0aFN0YXR1cygpO1xuICAgIHRoaXMuc2V0dXBNYWNoaW5lU3Vic2NyaXB0aW9uKCk7XG4gICAgdGhpcy5zZXR1cEh1Ykxpc3RlbmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udGV4dCBmYWNhZGVzXG4gICAqL1xuXG4gIHB1YmxpYyBnZXQgZXJyb3IoKTogQXV0aGVudGljYXRvclNlcnZpY2VGYWNhZGVbJ2Vycm9yJ10ge1xuICAgIHJldHVybiB0cmFuc2xhdGUodGhpcy5fZmFjYWRlPy5lcnJvcik7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhhc1ZhbGlkYXRpb25FcnJvcnMoKTogQXV0aGVudGljYXRvclNlcnZpY2VGYWNhZGVbJ2hhc1ZhbGlkYXRpb25FcnJvcnMnXSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZhY2FkZT8uaGFzVmFsaWRhdGlvbkVycm9ycztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNQZW5kaW5nKCk6IEF1dGhlbnRpY2F0b3JTZXJ2aWNlRmFjYWRlWydpc1BlbmRpbmcnXSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZhY2FkZT8uaXNQZW5kaW5nO1xuICB9XG5cbiAgcHVibGljIGdldCByb3V0ZSgpOiBBdXRoZW50aWNhdG9yU2VydmljZUZhY2FkZVsncm91dGUnXSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZhY2FkZT8ucm91dGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGF1dGhTdGF0dXMoKTogQXV0aGVudGljYXRvclNlcnZpY2VGYWNhZGVbJ2F1dGhTdGF0dXMnXSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhTdGF0dXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHVzZXIoKTogQXV0aFVzZXIge1xuICAgIHJldHVybiB0aGlzLl9mYWNhZGU/LnVzZXI7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHVzZXJuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZhY2FkZT8udXNlcm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZhbGlkYXRpb25FcnJvcnMoKTogQXV0aGVudGljYXRvclNlcnZpY2VGYWNhZGVbJ3ZhbGlkYXRpb25FcnJvcnMnXSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZhY2FkZT8udmFsaWRhdGlvbkVycm9ycztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29kZURlbGl2ZXJ5RGV0YWlscygpOiBBdXRoZW50aWNhdG9yU2VydmljZUZhY2FkZVsnY29kZURlbGl2ZXJ5RGV0YWlscyddIHtcbiAgICByZXR1cm4gdGhpcy5fZmFjYWRlPy5jb2RlRGVsaXZlcnlEZXRhaWxzO1xuICB9XG5cbiAgcHVibGljIGdldCB0b3RwU2VjcmV0Q29kZSgpOiBBdXRoZW50aWNhdG9yU2VydmljZUZhY2FkZVsndG90cFNlY3JldENvZGUnXSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZhY2FkZT8udG90cFNlY3JldENvZGU7XG4gIH1cblxuICAvKipcbiAgICogU2VydmljZSBmYWNhZGVzXG4gICAqL1xuXG4gIHB1YmxpYyBnZXQgaW5pdGlhbGl6ZU1hY2hpbmUoKTogQXV0aGVudGljYXRvclNlcnZpY2VGYWNhZGVbJ2luaXRpYWxpemVNYWNoaW5lJ10ge1xuICAgIHJldHVybiB0aGlzLl9mYWNhZGUuaW5pdGlhbGl6ZU1hY2hpbmU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHVwZGF0ZUZvcm0oKTogQXV0aGVudGljYXRvclNlcnZpY2VGYWNhZGVbJ3VwZGF0ZUZvcm0nXSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZhY2FkZS51cGRhdGVGb3JtO1xuICB9XG5cbiAgcHVibGljIGdldCB1cGRhdGVCbHVyKCk6IEF1dGhlbnRpY2F0b3JTZXJ2aWNlRmFjYWRlWyd1cGRhdGVCbHVyJ10ge1xuICAgIHJldHVybiB0aGlzLl9mYWNhZGUudXBkYXRlQmx1cjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVzZW5kQ29kZSgpOiBBdXRoZW50aWNhdG9yU2VydmljZUZhY2FkZVsncmVzZW5kQ29kZSddIHtcbiAgICByZXR1cm4gdGhpcy5fZmFjYWRlLnJlc2VuZENvZGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNpZ25PdXQoKTogQXV0aGVudGljYXRvclNlcnZpY2VGYWNhZGVbJ3NpZ25PdXQnXSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZhY2FkZS5zaWduT3V0O1xuICB9XG5cbiAgcHVibGljIGdldCBzdWJtaXRGb3JtKCk6IEF1dGhlbnRpY2F0b3JTZXJ2aWNlRmFjYWRlWydzdWJtaXRGb3JtJ10ge1xuICAgIHJldHVybiB0aGlzLl9mYWNhZGUuc3VibWl0Rm9ybTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2l0aW9uIGZhY2FkZXNcbiAgICovXG5cbiAgcHVibGljIGdldCB0b0ZlZGVyYXRlZFNpZ25JbigpOiBBdXRoZW50aWNhdG9yU2VydmljZUZhY2FkZVsndG9GZWRlcmF0ZWRTaWduSW4nXSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZhY2FkZS50b0ZlZGVyYXRlZFNpZ25JbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdG9Gb3Jnb3RQYXNzd29yZCgpOiBBdXRoZW50aWNhdG9yU2VydmljZUZhY2FkZVsndG9Gb3Jnb3RQYXNzd29yZCddIHtcbiAgICByZXR1cm4gdGhpcy5fZmFjYWRlLnRvRm9yZ290UGFzc3dvcmQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHRvU2lnbkluKCk6IEF1dGhlbnRpY2F0b3JTZXJ2aWNlRmFjYWRlWyd0b1NpZ25JbiddIHtcbiAgICByZXR1cm4gdGhpcy5fZmFjYWRlLnRvU2lnbkluO1xuICB9XG5cbiAgcHVibGljIGdldCB0b1NpZ25VcCgpOiBBdXRoZW50aWNhdG9yU2VydmljZUZhY2FkZVsndG9TaWduVXAnXSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZhY2FkZS50b1NpZ25VcDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2tpcFZlcmlmaWNhdGlvbigpOiBBdXRoZW50aWNhdG9yU2VydmljZUZhY2FkZVsnc2tpcFZlcmlmaWNhdGlvbiddIHtcbiAgICByZXR1cm4gdGhpcy5fZmFjYWRlLnNraXBWZXJpZmljYXRpb247XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJuYWwgdXRpbGl0eSBmdW5jdGlvbnNcbiAgICovXG5cbiAgLyoqIEBkZXByZWNhdGVkIEZvciBpbnRlcm5hbCB1c2Ugb25seSAqL1xuICBwdWJsaWMgZ2V0IGF1dGhTdGF0ZSgpOiBBdXRoTWFjaGluZVN0YXRlIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aFN0YXRlO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIEZvciBpbnRlcm5hbCB1c2Ugb25seSAqL1xuICBwdWJsaWMgZ2V0IGF1dGhTZXJ2aWNlKCk6IEF1dGhJbnRlcnByZXRlciB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIEZvciBpbnRlcm5hbCB1c2Ugb25seSAqL1xuICBwdWJsaWMgZ2V0IGNvbnRleHQoKTogQXV0aENvbnRleHQge1xuICAgIHJldHVybiB0aGlzLl9hdXRoU3RhdGUuY29udGV4dDtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCBGb3IgaW50ZXJuYWwgdXNlIG9ubHkgKi9cbiAgcHVibGljIGdldCBzbG90Q29udGV4dCgpOiBBdXRoZW50aWNhdG9yU2VydmljZUZhY2FkZSAmIHtcbiAgICAkaW1wbGljaXQ6IEF1dGhlbnRpY2F0b3JTZXJ2aWNlRmFjYWRlO1xuICB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5fZmFjYWRlLFxuICAgICAgJGltcGxpY2l0OiB0aGlzLl9mYWNhZGUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCBGb3IgaW50ZXJuYWwgdXNlIG9ubHkgKi9cbiAgcHVibGljIGdldCBodWJTdWJqZWN0KCk6IFN1YmplY3Q8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9odWJTdWJqZWN0O1xuICB9XG5cbiAgcHVibGljIHN1YnNjcmliZShjYWxsYmFjazogQXV0aFN1YnNjcmlwdGlvbkNhbGxiYWNrKTogU3Vic2NyaXB0aW9uIHtcbiAgICBpZiAoIXRoaXMuX2F1dGhTZXJ2aWNlKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoXG4gICAgICAgICdTdWJzY3JpcHRpb24gYXR0ZW1wdGVkIGJlZm9yZSBtYWNoaW5lIHdhcyBjcmVhdGVkLiBUaGlzIGlzIGxpa2VseSBhIGJ1ZyBvbiB0aGUgbGlicmFyeSwgcGxlYXNlIGNvbnNpZGVyIGZpbGluZyBhIGJ1Zy4nXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjYWxsYmFjayh0aGlzLl9mYWNhZGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbWFjaGluZVN1YnNjcmlwdGlvbikgdGhpcy5fbWFjaGluZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLl91bnN1YnNjcmliZUh1YikgdGhpcy5fdW5zdWJzY3JpYmVIdWIoKTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCBGb3IgaW50ZXJuYWwgdXNlIG9ubHkgKi9cbiAgcHVibGljIHNlbmQoZXZlbnQ6IEV2ZW50PEF1dGhFdmVudD4pOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLnNlbmQoZXZlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBnZXRJbml0aWFsQXV0aFN0YXR1cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgIHRoaXMuX2F1dGhTdGF0dXMgPSAnYXV0aGVudGljYXRlZCc7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5fYXV0aFN0YXR1cyA9ICd1bmF1dGhlbnRpY2F0ZWQnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBIdWJMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICB0aGlzLl9odWJTdWJqZWN0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAgIGNvbnN0IG9uU2lnbkluID0gKCkgPT4ge1xuICAgICAgdGhpcy5fYXV0aFN0YXR1cyA9ICdhdXRoZW50aWNhdGVkJztcbiAgICB9O1xuICAgIGNvbnN0IG9uU2lnbk91dCA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2F1dGhTdGF0dXMgPSAndW5hdXRoZW50aWNhdGVkJztcbiAgICB9O1xuXG4gICAgdGhpcy5fdW5zdWJzY3JpYmVIdWIgPSBsaXN0ZW5Ub0F1dGhIdWIoXG4gICAgICB0aGlzLl9hdXRoU2VydmljZSxcbiAgICAgIChkYXRhLCBzZXJ2aWNlKSA9PiB7XG4gICAgICAgIGRlZmF1bHRBdXRoSHViSGFuZGxlcihkYXRhLCBzZXJ2aWNlLCB7IG9uU2lnbkluLCBvblNpZ25PdXQgfSk7XG4gICAgICAgIHRoaXMuX2h1YlN1YmplY3QubmV4dCgpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwTWFjaGluZVN1YnNjcmlwdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9tYWNoaW5lU3Vic2NyaXB0aW9uID0gdGhpcy5fYXV0aFNlcnZpY2Uuc3Vic2NyaWJlKFxuICAgICAgKHN0YXRlOiB1bmtub3duKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gc3RhdGUgYXMgQXV0aE1hY2hpbmVTdGF0ZTtcbiAgICAgICAgdGhpcy5fYXV0aFN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgIHRoaXMuX2ZhY2FkZSA9IGdldFNlcnZpY2VGYWNhZGUoe1xuICAgICAgICAgIHNlbmQ6IHRoaXMuX2F1dGhTZXJ2aWNlLnNlbmQsXG4gICAgICAgICAgc3RhdGU6IG5ld1N0YXRlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iXX0=