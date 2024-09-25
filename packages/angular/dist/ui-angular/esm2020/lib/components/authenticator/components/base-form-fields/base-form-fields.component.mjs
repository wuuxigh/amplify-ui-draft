import { Component, HostBinding, Input } from '@angular/core';
import { getSortedFormFields, } from '@aws-amplify/ui';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/authenticator.service";
import * as i2 from "@angular/common";
import * as i3 from "../form-field/form-field.component";
/**
 * Sorts the given formFields, then renders them in order.
 */
export class BaseFormFieldsComponent {
    constructor(authenticator) {
        this.authenticator = authenticator;
        this.display = 'contents';
        this.formFields = [];
    }
    ngOnInit() {
        const state = this.authenticator.authState;
        this.formFields = getSortedFormFields(this.route, state);
    }
}
BaseFormFieldsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BaseFormFieldsComponent, deps: [{ token: i1.AuthenticatorService }], target: i0.ɵɵFactoryTarget.Component });
BaseFormFieldsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: BaseFormFieldsComponent, selector: "amplify-base-form-fields", inputs: { route: "route" }, host: { properties: { "style.display": "this.display" } }, ngImport: i0, template: "<ng-container *ngFor=\"let formField of formFields\">\n  <amplify-form-field\n    [name]=\"formField[0]\"\n    [formField]=\"formField[1]\"\n  ></amplify-form-field>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i3.FormFieldComponent, selector: "amplify-form-field", inputs: ["name", "formField"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BaseFormFieldsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'amplify-base-form-fields', template: "<ng-container *ngFor=\"let formField of formFields\">\n  <amplify-form-field\n    [name]=\"formField[0]\"\n    [formField]=\"formField[1]\"\n  ></amplify-form-field>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i1.AuthenticatorService }]; }, propDecorators: { route: [{
                type: Input
            }], display: [{
                type: HostBinding,
                args: ['style.display']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mb3JtLWZpZWxkcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS1hbmd1bGFyL3NyYy9saWIvY29tcG9uZW50cy9hdXRoZW50aWNhdG9yL2NvbXBvbmVudHMvYmFzZS1mb3JtLWZpZWxkcy9iYXNlLWZvcm0tZmllbGRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWFuZ3VsYXIvc3JjL2xpYi9jb21wb25lbnRzL2F1dGhlbnRpY2F0b3IvY29tcG9uZW50cy9iYXNlLWZvcm0tZmllbGRzL2Jhc2UtZm9ybS1maWVsZHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFHTCxtQkFBbUIsR0FDcEIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFHekI7O0dBRUc7QUFLSCxNQUFNLE9BQU8sdUJBQXVCO0lBS2xDLFlBQW9CLGFBQW1DO1FBQW5DLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUh6QixZQUFPLEdBQUcsVUFBVSxDQUFDO1FBQzVDLGVBQVUsR0FBb0IsRUFBRSxDQUFDO0lBRWtCLENBQUM7SUFFM0QsUUFBUTtRQUNOLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDOztvSEFWVSx1QkFBdUI7d0dBQXZCLHVCQUF1Qix1SkNmcEMsMExBTUE7MkZEU2EsdUJBQXVCO2tCQUpuQyxTQUFTOytCQUNFLDBCQUEwQjsyR0FJM0IsS0FBSztzQkFBYixLQUFLO2dCQUN3QixPQUFPO3NCQUFwQyxXQUFXO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGb3JtRmllbGRDb21wb25lbnRzLFxuICBGb3JtRmllbGRzQXJyYXksXG4gIGdldFNvcnRlZEZvcm1GaWVsZHMsXG59IGZyb20gJ0Bhd3MtYW1wbGlmeS91aSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdG9yU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0b3Iuc2VydmljZSc7XG5cbi8qKlxuICogU29ydHMgdGhlIGdpdmVuIGZvcm1GaWVsZHMsIHRoZW4gcmVuZGVycyB0aGVtIGluIG9yZGVyLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbXBsaWZ5LWJhc2UtZm9ybS1maWVsZHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFzZS1mb3JtLWZpZWxkcy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VGb3JtRmllbGRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcm91dGU6IEZvcm1GaWVsZENvbXBvbmVudHM7IC8vIGZvcm1GaWVsZHMgdG8gc29ydCBhbmQgcmVuZGVyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIGRpc3BsYXkgPSAnY29udGVudHMnO1xuICBwdWJsaWMgZm9ybUZpZWxkczogRm9ybUZpZWxkc0FycmF5ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoZW50aWNhdG9yOiBBdXRoZW50aWNhdG9yU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuYXV0aGVudGljYXRvci5hdXRoU3RhdGU7XG4gICAgdGhpcy5mb3JtRmllbGRzID0gZ2V0U29ydGVkRm9ybUZpZWxkcyh0aGlzLnJvdXRlLCBzdGF0ZSk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZvcm1GaWVsZCBvZiBmb3JtRmllbGRzXCI+XG4gIDxhbXBsaWZ5LWZvcm0tZmllbGRcbiAgICBbbmFtZV09XCJmb3JtRmllbGRbMF1cIlxuICAgIFtmb3JtRmllbGRdPVwiZm9ybUZpZWxkWzFdXCJcbiAgPjwvYW1wbGlmeS1mb3JtLWZpZWxkPlxuPC9uZy1jb250YWluZXI+XG4iXX0=