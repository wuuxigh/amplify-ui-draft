import { Component, HostBinding, Input } from '@angular/core';
import { nanoid } from 'nanoid';
import { countryDialCodes } from '@aws-amplify/ui';
import * as i0 from "@angular/core";
import * as i1 from "../select/select.component";
export class PhoneNumberFieldComponent {
    constructor() {
        this.autocomplete = 'new-password';
        this.disabled = false;
        this.selectFieldId = `amplify-field-${nanoid(12)}`;
        this.textFieldId = `amplify-field-${nanoid(12)}`;
        this.initialValue = '';
        this.label = '';
        this.placeholder = '';
        this.required = true;
        this.labelHidden = false;
        this.display = 'contents';
    }
    ngOnInit() {
        this.countryDialCodesValues = this.dialCodeList ?? countryDialCodes;
    }
}
PhoneNumberFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PhoneNumberFieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PhoneNumberFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: PhoneNumberFieldComponent, selector: "amplify-phone-number-field", inputs: { autocomplete: "autocomplete", disabled: "disabled", defaultCountryCode: "defaultCountryCode", selectFieldId: "selectFieldId", textFieldId: "textFieldId", initialValue: "initialValue", label: "label", name: "name", placeholder: "placeholder", required: "required", type: "type", labelHidden: "labelHidden", dialCodeList: "dialCodeList", hasError: "hasError", describedBy: "describedBy" }, host: { properties: { "style.display": "this.display" } }, ngImport: i0, template: "<div\n  class=\"amplify-flex amplify-field amplify-textfield amplify-phonenumberfield\"\n>\n  <label\n    class=\"amplify-label\"\n    [class.amplify-visually-hidden]=\"labelHidden\"\n    [for]=\"textFieldId\"\n  >\n    {{ label }}\n  </label>\n  <div class=\"amplify-flex amplify-field-group amplify-field-group--horizontal\">\n    <div class=\"amplify-field-group__outer-start\">\n      <div\n        class=\"amplify-flex amplify-field amplify-selectfield amplify-dialcodeselect\"\n        style=\"flex-direction: column\"\n      >\n        <amplify-form-select\n          name=\"country_code\"\n          label=\"Country Code\"\n          [id]=\"selectFieldId\"\n          [items]=\"countryDialCodesValues\"\n          [defaultValue]=\"defaultCountryCode\"\n        ></amplify-form-select>\n      </div>\n    </div>\n\n    <div\n      class=\"amplify-field-group__field-wrapper amplify-field-group__field-wrapper--horizontal\"\n    >\n      <input\n        class=\"amplify-input amplify-field-group__control\"\n        [id]=\"textFieldId\"\n        [type]=\"type\"\n        [name]=\"name\"\n        [placeholder]=\"placeholder\"\n        [required]=\"required\"\n        [value]=\"initialValue\"\n        [autocomplete]=\"autocomplete\"\n        [attr.disabled]=\"disabled ? '' : null\"\n        [attr.aria-invalid]=\"hasError ? 'true' : 'false'\"\n        [attr.aria-describedby]=\"describedBy\"\n      />\n    </div>\n  </div>\n</div>\n", dependencies: [{ kind: "component", type: i1.SelectComponent, selector: "amplify-form-select", inputs: ["items", "name", "label", "id", "defaultValue"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PhoneNumberFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'amplify-phone-number-field', template: "<div\n  class=\"amplify-flex amplify-field amplify-textfield amplify-phonenumberfield\"\n>\n  <label\n    class=\"amplify-label\"\n    [class.amplify-visually-hidden]=\"labelHidden\"\n    [for]=\"textFieldId\"\n  >\n    {{ label }}\n  </label>\n  <div class=\"amplify-flex amplify-field-group amplify-field-group--horizontal\">\n    <div class=\"amplify-field-group__outer-start\">\n      <div\n        class=\"amplify-flex amplify-field amplify-selectfield amplify-dialcodeselect\"\n        style=\"flex-direction: column\"\n      >\n        <amplify-form-select\n          name=\"country_code\"\n          label=\"Country Code\"\n          [id]=\"selectFieldId\"\n          [items]=\"countryDialCodesValues\"\n          [defaultValue]=\"defaultCountryCode\"\n        ></amplify-form-select>\n      </div>\n    </div>\n\n    <div\n      class=\"amplify-field-group__field-wrapper amplify-field-group__field-wrapper--horizontal\"\n    >\n      <input\n        class=\"amplify-input amplify-field-group__control\"\n        [id]=\"textFieldId\"\n        [type]=\"type\"\n        [name]=\"name\"\n        [placeholder]=\"placeholder\"\n        [required]=\"required\"\n        [value]=\"initialValue\"\n        [autocomplete]=\"autocomplete\"\n        [attr.disabled]=\"disabled ? '' : null\"\n        [attr.aria-invalid]=\"hasError ? 'true' : 'false'\"\n        [attr.aria-describedby]=\"describedBy\"\n      />\n    </div>\n  </div>\n</div>\n" }]
        }], propDecorators: { autocomplete: [{
                type: Input
            }], disabled: [{
                type: Input
            }], defaultCountryCode: [{
                type: Input
            }], selectFieldId: [{
                type: Input
            }], textFieldId: [{
                type: Input
            }], initialValue: [{
                type: Input
            }], label: [{
                type: Input
            }], name: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], required: [{
                type: Input
            }], type: [{
                type: Input
            }], labelHidden: [{
                type: Input
            }], dialCodeList: [{
                type: Input
            }], hasError: [{
                type: Input
            }], describedBy: [{
                type: Input
            }], display: [{
                type: HostBinding,
                args: ['style.display']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtbnVtYmVyLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWFuZ3VsYXIvc3JjL2xpYi9wcmltaXRpdmVzL3Bob25lLW51bWJlci1maWVsZC9waG9uZS1udW1iZXItZmllbGQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktYW5ndWxhci9zcmMvbGliL3ByaW1pdGl2ZXMvcGhvbmUtbnVtYmVyLWZpZWxkL3Bob25lLW51bWJlci1maWVsZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNoQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBTW5ELE1BQU0sT0FBTyx5QkFBeUI7SUFKdEM7UUFLVyxpQkFBWSxHQUFHLGNBQWMsQ0FBQztRQUM5QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGtCQUFhLEdBQUcsaUJBQWlCLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzlDLGdCQUFXLEdBQUcsaUJBQWlCLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzVDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFWCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBS0MsWUFBTyxHQUFHLFVBQVUsQ0FBQztLQU9wRDtJQUhDLFFBQVE7UUFDTixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxnQkFBZ0IsQ0FBQztJQUN0RSxDQUFDOztzSEF2QlUseUJBQXlCOzBHQUF6Qix5QkFBeUIsMmdCQ1J0QyxtNkNBNkNBOzJGRHJDYSx5QkFBeUI7a0JBSnJDLFNBQVM7K0JBQ0UsNEJBQTRCOzhCQUk3QixZQUFZO3NCQUFwQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csa0JBQWtCO3NCQUExQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUV3QixPQUFPO3NCQUFwQyxXQUFXO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tICduYW5vaWQnO1xuaW1wb3J0IHsgY291bnRyeURpYWxDb2RlcyB9IGZyb20gJ0Bhd3MtYW1wbGlmeS91aSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FtcGxpZnktcGhvbmUtbnVtYmVyLWZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Bob25lLW51bWJlci1maWVsZC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBob25lTnVtYmVyRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBhdXRvY29tcGxldGUgPSAnbmV3LXBhc3N3b3JkJztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZGVmYXVsdENvdW50cnlDb2RlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNlbGVjdEZpZWxkSWQgPSBgYW1wbGlmeS1maWVsZC0ke25hbm9pZCgxMil9YDtcbiAgQElucHV0KCkgdGV4dEZpZWxkSWQgPSBgYW1wbGlmeS1maWVsZC0ke25hbm9pZCgxMil9YDtcbiAgQElucHV0KCkgaW5pdGlhbFZhbHVlID0gJyc7XG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcbiAgQElucHV0KCkgcmVxdWlyZWQgPSB0cnVlO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsSGlkZGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpYWxDb2RlTGlzdDogQXJyYXk8c3RyaW5nPjtcbiAgQElucHV0KCkgaGFzRXJyb3I6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRlc2NyaWJlZEJ5OiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JykgZGlzcGxheSA9ICdjb250ZW50cyc7XG5cbiAgcHVibGljIGNvdW50cnlEaWFsQ29kZXNWYWx1ZXM6IEFycmF5PHN0cmluZz47XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb3VudHJ5RGlhbENvZGVzVmFsdWVzID0gdGhpcy5kaWFsQ29kZUxpc3QgPz8gY291bnRyeURpYWxDb2RlcztcbiAgfVxufVxuIiwiPGRpdlxuICBjbGFzcz1cImFtcGxpZnktZmxleCBhbXBsaWZ5LWZpZWxkIGFtcGxpZnktdGV4dGZpZWxkIGFtcGxpZnktcGhvbmVudW1iZXJmaWVsZFwiXG4+XG4gIDxsYWJlbFxuICAgIGNsYXNzPVwiYW1wbGlmeS1sYWJlbFwiXG4gICAgW2NsYXNzLmFtcGxpZnktdmlzdWFsbHktaGlkZGVuXT1cImxhYmVsSGlkZGVuXCJcbiAgICBbZm9yXT1cInRleHRGaWVsZElkXCJcbiAgPlxuICAgIHt7IGxhYmVsIH19XG4gIDwvbGFiZWw+XG4gIDxkaXYgY2xhc3M9XCJhbXBsaWZ5LWZsZXggYW1wbGlmeS1maWVsZC1ncm91cCBhbXBsaWZ5LWZpZWxkLWdyb3VwLS1ob3Jpem9udGFsXCI+XG4gICAgPGRpdiBjbGFzcz1cImFtcGxpZnktZmllbGQtZ3JvdXBfX291dGVyLXN0YXJ0XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYW1wbGlmeS1mbGV4IGFtcGxpZnktZmllbGQgYW1wbGlmeS1zZWxlY3RmaWVsZCBhbXBsaWZ5LWRpYWxjb2Rlc2VsZWN0XCJcbiAgICAgICAgc3R5bGU9XCJmbGV4LWRpcmVjdGlvbjogY29sdW1uXCJcbiAgICAgID5cbiAgICAgICAgPGFtcGxpZnktZm9ybS1zZWxlY3RcbiAgICAgICAgICBuYW1lPVwiY291bnRyeV9jb2RlXCJcbiAgICAgICAgICBsYWJlbD1cIkNvdW50cnkgQ29kZVwiXG4gICAgICAgICAgW2lkXT1cInNlbGVjdEZpZWxkSWRcIlxuICAgICAgICAgIFtpdGVtc109XCJjb3VudHJ5RGlhbENvZGVzVmFsdWVzXCJcbiAgICAgICAgICBbZGVmYXVsdFZhbHVlXT1cImRlZmF1bHRDb3VudHJ5Q29kZVwiXG4gICAgICAgID48L2FtcGxpZnktZm9ybS1zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiYW1wbGlmeS1maWVsZC1ncm91cF9fZmllbGQtd3JhcHBlciBhbXBsaWZ5LWZpZWxkLWdyb3VwX19maWVsZC13cmFwcGVyLS1ob3Jpem9udGFsXCJcbiAgICA+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3M9XCJhbXBsaWZ5LWlucHV0IGFtcGxpZnktZmllbGQtZ3JvdXBfX2NvbnRyb2xcIlxuICAgICAgICBbaWRdPVwidGV4dEZpZWxkSWRcIlxuICAgICAgICBbdHlwZV09XCJ0eXBlXCJcbiAgICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICAgIFt2YWx1ZV09XCJpbml0aWFsVmFsdWVcIlxuICAgICAgICBbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXG4gICAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkID8gJycgOiBudWxsXCJcbiAgICAgICAgW2F0dHIuYXJpYS1pbnZhbGlkXT1cImhhc0Vycm9yID8gJ3RydWUnIDogJ2ZhbHNlJ1wiXG4gICAgICAgIFthdHRyLmFyaWEtZGVzY3JpYmVkYnldPVwiZGVzY3JpYmVkQnlcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==