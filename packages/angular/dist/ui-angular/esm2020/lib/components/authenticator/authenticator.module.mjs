import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Note: Angular components and directives inside module files has to be imported directly.
 *
 * Related: https://github.com/ng-packagr/ng-packagr/issues/567
 */
import { AuthenticatorComponent } from './components/authenticator/authenticator.component';
import { ConfirmResetPasswordComponent } from './components/confirm-reset-password/amplify-confirm-reset-password.component';
import { ConfirmSignInComponent } from './components/confirm-sign-in/confirm-sign-in.component';
import { ConfirmSignUpComponent } from './components/confirm-sign-up/confirm-sign-up.component';
import { ConfirmVerifyUserComponent } from './components/confirm-verify-user/amplify-confirm-verify-user.component';
import { FederatedSignInButtonComponent } from './components/federated-sign-in-button/federated-sign-in-button.component';
import { FederatedSignInComponent } from './components/federated-sign-in/federated-sign-in.component';
import { ForceNewPasswordComponent } from './components/force-new-password/force-new-password.component';
import { ForceNewPasswordFormFieldsComponent } from './components/force-new-password/force-new-password-form-fields/force-new-password-form-fields.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SetupTotpComponent } from './components/setup-totp/setup-totp.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpFormFieldsComponent } from './components/sign-up/sign-up-form-fields/sign-up-form-fields.component';
import { VerifyUserComponent } from './components/verify-user/verify-user.component';
import { BaseFormFieldsComponent } from './components/base-form-fields/base-form-fields.component';
import { ButtonComponent } from '../../primitives/button/button.component';
import { CheckboxComponent } from '../../primitives/checkbox/checkbox.component';
import { ErrorComponent } from '../../primitives/error/error.component';
import { PasswordFieldComponent } from '../../primitives/password-field/password-field.component';
import { PhoneNumberFieldComponent } from '../../primitives/phone-number-field/phone-number-field.component';
import { SelectComponent } from '../../primitives/select/select.component';
import { TabItemComponent } from '../../primitives/tab-item/tab-item.component';
import { TabsComponent } from '../../primitives/tabs/tabs.component';
import { TextFieldComponent } from '../../primitives/text-field/text-field.component';
import { AmplifySlotComponent } from '../../utilities/amplify-slot/amplify-slot.component';
import { AmplifySlotDirective } from '../../utilities/amplify-slot/amplify-slot.directive';
import * as i0 from "@angular/core";
export class AmplifyAuthenticatorModule {
}
AmplifyAuthenticatorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AmplifyAuthenticatorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AmplifyAuthenticatorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: AmplifyAuthenticatorModule, declarations: [AmplifySlotComponent,
        AmplifySlotDirective,
        AuthenticatorComponent,
        BaseFormFieldsComponent,
        ButtonComponent,
        CheckboxComponent,
        ConfirmResetPasswordComponent,
        ConfirmSignInComponent,
        ConfirmSignUpComponent,
        ConfirmVerifyUserComponent,
        ErrorComponent,
        FederatedSignInButtonComponent,
        FederatedSignInComponent,
        ForceNewPasswordComponent,
        ForceNewPasswordFormFieldsComponent,
        FormFieldComponent,
        PasswordFieldComponent,
        PhoneNumberFieldComponent,
        ForgotPasswordComponent,
        SelectComponent,
        SetupTotpComponent,
        SignInComponent,
        SignUpComponent,
        SignUpFormFieldsComponent,
        TabItemComponent,
        TabsComponent,
        TextFieldComponent,
        VerifyUserComponent], imports: [CommonModule], exports: [AmplifySlotDirective,
        AuthenticatorComponent,
        CheckboxComponent,
        SignUpFormFieldsComponent,
        ForceNewPasswordFormFieldsComponent,
        TextFieldComponent] });
AmplifyAuthenticatorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AmplifyAuthenticatorModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AmplifyAuthenticatorModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AmplifySlotComponent,
                        AmplifySlotDirective,
                        AuthenticatorComponent,
                        BaseFormFieldsComponent,
                        ButtonComponent,
                        CheckboxComponent,
                        ConfirmResetPasswordComponent,
                        ConfirmSignInComponent,
                        ConfirmSignUpComponent,
                        ConfirmVerifyUserComponent,
                        ErrorComponent,
                        FederatedSignInButtonComponent,
                        FederatedSignInComponent,
                        ForceNewPasswordComponent,
                        ForceNewPasswordFormFieldsComponent,
                        FormFieldComponent,
                        PasswordFieldComponent,
                        PhoneNumberFieldComponent,
                        ForgotPasswordComponent,
                        SelectComponent,
                        SetupTotpComponent,
                        SignInComponent,
                        SignUpComponent,
                        SignUpFormFieldsComponent,
                        TabItemComponent,
                        TabsComponent,
                        TextFieldComponent,
                        VerifyUserComponent,
                    ],
                    imports: [CommonModule],
                    exports: [
                        AmplifySlotDirective,
                        AuthenticatorComponent,
                        CheckboxComponent,
                        SignUpFormFieldsComponent,
                        ForceNewPasswordFormFieldsComponent,
                        TextFieldComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRvci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS1hbmd1bGFyL3NyYy9saWIvY29tcG9uZW50cy9hdXRoZW50aWNhdG9yL2F1dGhlbnRpY2F0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DOzs7O0dBSUc7QUFDSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUNwSCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUMxSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN0RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx5R0FBeUcsQ0FBQztBQUM5SixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBRW5HLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDbEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDN0csT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUV0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7QUEyQzNGLE1BQU0sT0FBTywwQkFBMEI7O3VIQUExQiwwQkFBMEI7d0hBQTFCLDBCQUEwQixpQkF2Q25DLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLDZCQUE2QjtRQUM3QixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQixjQUFjO1FBQ2QsOEJBQThCO1FBQzlCLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIsbUNBQW1DO1FBQ25DLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixlQUFlO1FBQ2YseUJBQXlCO1FBQ3pCLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLG1CQUFtQixhQUVYLFlBQVksYUFFcEIsb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLG1DQUFtQztRQUNuQyxrQkFBa0I7d0hBR1QsMEJBQTBCLFlBVjNCLFlBQVk7MkZBVVgsMEJBQTBCO2tCQXpDdEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsdUJBQXVCO3dCQUN2QixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsNkJBQTZCO3dCQUM3QixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsMEJBQTBCO3dCQUMxQixjQUFjO3dCQUNkLDhCQUE4Qjt3QkFDOUIsd0JBQXdCO3dCQUN4Qix5QkFBeUI7d0JBQ3pCLG1DQUFtQzt3QkFDbkMsa0JBQWtCO3dCQUNsQixzQkFBc0I7d0JBQ3RCLHlCQUF5Qjt3QkFDekIsdUJBQXVCO3dCQUN2QixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixlQUFlO3dCQUNmLHlCQUF5Qjt3QkFDekIsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsaUJBQWlCO3dCQUNqQix5QkFBeUI7d0JBQ3pCLG1DQUFtQzt3QkFDbkMsa0JBQWtCO3FCQUNuQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vKipcbiAqIE5vdGU6IEFuZ3VsYXIgY29tcG9uZW50cyBhbmQgZGlyZWN0aXZlcyBpbnNpZGUgbW9kdWxlIGZpbGVzIGhhcyB0byBiZSBpbXBvcnRlZCBkaXJlY3RseS5cbiAqXG4gKiBSZWxhdGVkOiBodHRwczovL2dpdGh1Yi5jb20vbmctcGFja2Fnci9uZy1wYWNrYWdyL2lzc3Vlcy81NjdcbiAqL1xuaW1wb3J0IHsgQXV0aGVudGljYXRvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hdXRoZW50aWNhdG9yL2F1dGhlbnRpY2F0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpcm1SZXNldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbmZpcm0tcmVzZXQtcGFzc3dvcmQvYW1wbGlmeS1jb25maXJtLXJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maXJtU2lnbkluQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbmZpcm0tc2lnbi1pbi9jb25maXJtLXNpZ24taW4uY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpcm1TaWduVXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uZmlybS1zaWduLXVwL2NvbmZpcm0tc2lnbi11cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZmlybVZlcmlmeVVzZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uZmlybS12ZXJpZnktdXNlci9hbXBsaWZ5LWNvbmZpcm0tdmVyaWZ5LXVzZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZlZGVyYXRlZFNpZ25JbkJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mZWRlcmF0ZWQtc2lnbi1pbi1idXR0b24vZmVkZXJhdGVkLXNpZ24taW4tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGZWRlcmF0ZWRTaWduSW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmVkZXJhdGVkLXNpZ24taW4vZmVkZXJhdGVkLXNpZ24taW4uY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmNlTmV3UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9yY2UtbmV3LXBhc3N3b3JkL2ZvcmNlLW5ldy1wYXNzd29yZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9yY2VOZXdQYXNzd29yZEZvcm1GaWVsZHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9yY2UtbmV3LXBhc3N3b3JkL2ZvcmNlLW5ldy1wYXNzd29yZC1mb3JtLWZpZWxkcy9mb3JjZS1uZXctcGFzc3dvcmQtZm9ybS1maWVsZHMuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFNldHVwVG90cENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zZXR1cC10b3RwL3NldHVwLXRvdHAuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZ25JbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50JztcbmltcG9ydCB7IFNpZ25VcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZ25VcEZvcm1GaWVsZHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2lnbi11cC9zaWduLXVwLWZvcm0tZmllbGRzL3NpZ24tdXAtZm9ybS1maWVsZHMuY29tcG9uZW50JztcbmltcG9ydCB7IFZlcmlmeVVzZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdmVyaWZ5LXVzZXIvdmVyaWZ5LXVzZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJhc2VGb3JtRmllbGRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Jhc2UtZm9ybS1maWVsZHMvYmFzZS1mb3JtLWZpZWxkcy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9wcmltaXRpdmVzL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vcHJpbWl0aXZlcy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi9wcmltaXRpdmVzL2Vycm9yL2Vycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXNzd29yZEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vcHJpbWl0aXZlcy9wYXNzd29yZC1maWVsZC9wYXNzd29yZC1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGhvbmVOdW1iZXJGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3ByaW1pdGl2ZXMvcGhvbmUtbnVtYmVyLWZpZWxkL3Bob25lLW51bWJlci1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vcHJpbWl0aXZlcy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vcHJpbWl0aXZlcy90YWItaXRlbS90YWItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL3ByaW1pdGl2ZXMvdGFicy90YWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0RmllbGRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9wcmltaXRpdmVzL3RleHQtZmllbGQvdGV4dC1maWVsZC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBBbXBsaWZ5U2xvdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9hbXBsaWZ5LXNsb3QvYW1wbGlmeS1zbG90LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbXBsaWZ5U2xvdERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9hbXBsaWZ5LXNsb3QvYW1wbGlmeS1zbG90LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFtcGxpZnlTbG90Q29tcG9uZW50LFxuICAgIEFtcGxpZnlTbG90RGlyZWN0aXZlLFxuICAgIEF1dGhlbnRpY2F0b3JDb21wb25lbnQsXG4gICAgQmFzZUZvcm1GaWVsZHNDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIENoZWNrYm94Q29tcG9uZW50LFxuICAgIENvbmZpcm1SZXNldFBhc3N3b3JkQ29tcG9uZW50LFxuICAgIENvbmZpcm1TaWduSW5Db21wb25lbnQsXG4gICAgQ29uZmlybVNpZ25VcENvbXBvbmVudCxcbiAgICBDb25maXJtVmVyaWZ5VXNlckNvbXBvbmVudCxcbiAgICBFcnJvckNvbXBvbmVudCxcbiAgICBGZWRlcmF0ZWRTaWduSW5CdXR0b25Db21wb25lbnQsXG4gICAgRmVkZXJhdGVkU2lnbkluQ29tcG9uZW50LFxuICAgIEZvcmNlTmV3UGFzc3dvcmRDb21wb25lbnQsXG4gICAgRm9yY2VOZXdQYXNzd29yZEZvcm1GaWVsZHNDb21wb25lbnQsXG4gICAgRm9ybUZpZWxkQ29tcG9uZW50LFxuICAgIFBhc3N3b3JkRmllbGRDb21wb25lbnQsXG4gICAgUGhvbmVOdW1iZXJGaWVsZENvbXBvbmVudCxcbiAgICBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCxcbiAgICBTZWxlY3RDb21wb25lbnQsXG4gICAgU2V0dXBUb3RwQ29tcG9uZW50LFxuICAgIFNpZ25JbkNvbXBvbmVudCxcbiAgICBTaWduVXBDb21wb25lbnQsXG4gICAgU2lnblVwRm9ybUZpZWxkc0NvbXBvbmVudCxcbiAgICBUYWJJdGVtQ29tcG9uZW50LFxuICAgIFRhYnNDb21wb25lbnQsXG4gICAgVGV4dEZpZWxkQ29tcG9uZW50LFxuICAgIFZlcmlmeVVzZXJDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbXG4gICAgQW1wbGlmeVNsb3REaXJlY3RpdmUsXG4gICAgQXV0aGVudGljYXRvckNvbXBvbmVudCxcbiAgICBDaGVja2JveENvbXBvbmVudCxcbiAgICBTaWduVXBGb3JtRmllbGRzQ29tcG9uZW50LFxuICAgIEZvcmNlTmV3UGFzc3dvcmRGb3JtRmllbGRzQ29tcG9uZW50LFxuICAgIFRleHRGaWVsZENvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQW1wbGlmeUF1dGhlbnRpY2F0b3JNb2R1bGUge31cbiJdfQ==