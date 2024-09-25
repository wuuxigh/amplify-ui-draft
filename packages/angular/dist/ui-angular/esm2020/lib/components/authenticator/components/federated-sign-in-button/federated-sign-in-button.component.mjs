import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/authenticator.service";
import * as i2 from "../../../../primitives/button/button.component";
export class FederatedSignInButtonComponent {
    constructor(authenticator) {
        this.authenticator = authenticator;
        this.onClick = () => {
            this.authenticator.send({
                type: 'FEDERATED_SIGN_IN',
                data: { provider: this.provider },
            });
        };
    }
}
FederatedSignInButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: FederatedSignInButtonComponent, deps: [{ token: i1.AuthenticatorService }], target: i0.ɵɵFactoryTarget.Component });
FederatedSignInButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: FederatedSignInButtonComponent, selector: "amplify-federated-sign-in-button", inputs: { provider: "provider", text: "text" }, ngImport: i0, template: "<button\n  amplify-button\n  class=\"amplify-field-group__control federated-sign-in-button\"\n  fullWidth=\"true\"\n  fontWeight=\"normal\"\n  (click)=\"onClick()\"\n>\n  <div class=\"amplify-flex federated-sign-in-button-row\">\n    <ng-content></ng-content>\n  </div>\n</button>\n", dependencies: [{ kind: "component", type: i2.ButtonComponent, selector: "button[amplify-button]", inputs: ["type", "fullWidth", "isDisabled", "size", "variation", "fontWeight"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: FederatedSignInButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'amplify-federated-sign-in-button', template: "<button\n  amplify-button\n  class=\"amplify-field-group__control federated-sign-in-button\"\n  fullWidth=\"true\"\n  fontWeight=\"normal\"\n  (click)=\"onClick()\"\n>\n  <div class=\"amplify-flex federated-sign-in-button-row\">\n    <ng-content></ng-content>\n  </div>\n</button>\n" }]
        }], ctorParameters: function () { return [{ type: i1.AuthenticatorService }]; }, propDecorators: { provider: [{
                type: Input
            }], text: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVkZXJhdGVkLXNpZ24taW4tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWFuZ3VsYXIvc3JjL2xpYi9jb21wb25lbnRzL2F1dGhlbnRpY2F0b3IvY29tcG9uZW50cy9mZWRlcmF0ZWQtc2lnbi1pbi1idXR0b24vZmVkZXJhdGVkLXNpZ24taW4tYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWFuZ3VsYXIvc3JjL2xpYi9jb21wb25lbnRzL2F1dGhlbnRpY2F0b3IvY29tcG9uZW50cy9mZWRlcmF0ZWQtc2lnbi1pbi1idXR0b24vZmVkZXJhdGVkLXNpZ24taW4tYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUWpELE1BQU0sT0FBTyw4QkFBOEI7SUFJekMsWUFBb0IsYUFBbUM7UUFBbkMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBRXZELFlBQU8sR0FBRyxHQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO2FBQ2xDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztJQVB3RCxDQUFDOzsySEFKaEQsOEJBQThCOytHQUE5Qiw4QkFBOEIsd0hDUjNDLDRSQVdBOzJGREhhLDhCQUE4QjtrQkFKMUMsU0FBUzsrQkFDRSxrQ0FBa0M7MkdBSW5DLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVkZXJhdGVkSWRlbnRpdHlQcm92aWRlcnMgfSBmcm9tICdAYXdzLWFtcGxpZnkvdWknO1xuaW1wb3J0IHsgQXV0aGVudGljYXRvclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdG9yLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbXBsaWZ5LWZlZGVyYXRlZC1zaWduLWluLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mZWRlcmF0ZWQtc2lnbi1pbi1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBGZWRlcmF0ZWRTaWduSW5CdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKSBwcm92aWRlcjogRmVkZXJhdGVkSWRlbnRpdHlQcm92aWRlcnM7XG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhlbnRpY2F0b3I6IEF1dGhlbnRpY2F0b3JTZXJ2aWNlKSB7fVxuXG4gIG9uQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5hdXRoZW50aWNhdG9yLnNlbmQoe1xuICAgICAgdHlwZTogJ0ZFREVSQVRFRF9TSUdOX0lOJyxcbiAgICAgIGRhdGE6IHsgcHJvdmlkZXI6IHRoaXMucHJvdmlkZXIgfSxcbiAgICB9KTtcbiAgfTtcbn1cbiIsIjxidXR0b25cbiAgYW1wbGlmeS1idXR0b25cbiAgY2xhc3M9XCJhbXBsaWZ5LWZpZWxkLWdyb3VwX19jb250cm9sIGZlZGVyYXRlZC1zaWduLWluLWJ1dHRvblwiXG4gIGZ1bGxXaWR0aD1cInRydWVcIlxuICBmb250V2VpZ2h0PVwibm9ybWFsXCJcbiAgKGNsaWNrKT1cIm9uQ2xpY2soKVwiXG4+XG4gIDxkaXYgY2xhc3M9XCJhbXBsaWZ5LWZsZXggZmVkZXJhdGVkLXNpZ24taW4tYnV0dG9uLXJvd1wiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L2J1dHRvbj5cbiJdfQ==