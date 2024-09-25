import { AuthenticatorService } from '../../../../services/authenticator.service';
import { FormFieldsArray } from '@aws-amplify/ui';
import * as i0 from "@angular/core";
export declare class ForgotPasswordComponent {
    authenticator: AuthenticatorService;
    dataAttr: string;
    headerText: string;
    sendCodeText: string;
    backToSignInText: string;
    sortedFormFields: FormFieldsArray;
    constructor(authenticator: AuthenticatorService);
    get context(): AuthenticatorService['slotContext'];
    onInput(event: Event): void;
    onSubmit(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ForgotPasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ForgotPasswordComponent, "amplify-forgot-password", never, { "headerText": "headerText"; }, {}, never, never, false>;
}
