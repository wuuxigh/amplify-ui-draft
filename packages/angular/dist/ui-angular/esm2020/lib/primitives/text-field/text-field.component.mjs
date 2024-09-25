import { Component, HostBinding, Input } from '@angular/core';
import { nanoid } from 'nanoid';
import * as i0 from "@angular/core";
export class TextFieldComponent {
    constructor() {
        this.autocomplete = 'new-password';
        this.disabled = false;
        this.fieldId = `amplify-field-${nanoid(12)}`;
        this.initialValue = '';
        this.label = '';
        this.placeholder = '';
        this.required = true;
        this.labelHidden = false;
        this.display = 'contents';
    }
}
TextFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TextFieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TextFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: TextFieldComponent, selector: "amplify-text-field", inputs: { autocomplete: "autocomplete", disabled: "disabled", fieldId: "fieldId", initialValue: "initialValue", label: "label", name: "name", placeholder: "placeholder", required: "required", type: "type", labelHidden: "labelHidden", hasError: "hasError", describedBy: "describedBy" }, host: { properties: { "style.display": "this.display" } }, ngImport: i0, template: "<label\n  class=\"amplify-label\"\n  [class.amplify-visually-hidden]=\"labelHidden\"\n  [for]=\"fieldId\"\n>\n  {{ label }}\n</label>\n<input\n  class=\"amplify-input\"\n  autocapitalize=\"off\"\n  [id]=\"fieldId\"\n  [type]=\"type\"\n  [name]=\"name\"\n  [placeholder]=\"placeholder\"\n  [required]=\"required\"\n  [value]=\"initialValue\"\n  [autocomplete]=\"autocomplete\"\n  [attr.disabled]=\"disabled ? '' : null\"\n  [attr.aria-invalid]=\"hasError ? 'true' : 'false'\"\n  [attr.aria-describedby]=\"describedBy\"\n/>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TextFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'amplify-text-field', template: "<label\n  class=\"amplify-label\"\n  [class.amplify-visually-hidden]=\"labelHidden\"\n  [for]=\"fieldId\"\n>\n  {{ label }}\n</label>\n<input\n  class=\"amplify-input\"\n  autocapitalize=\"off\"\n  [id]=\"fieldId\"\n  [type]=\"type\"\n  [name]=\"name\"\n  [placeholder]=\"placeholder\"\n  [required]=\"required\"\n  [value]=\"initialValue\"\n  [autocomplete]=\"autocomplete\"\n  [attr.disabled]=\"disabled ? '' : null\"\n  [attr.aria-invalid]=\"hasError ? 'true' : 'false'\"\n  [attr.aria-describedby]=\"describedBy\"\n/>\n" }]
        }], propDecorators: { autocomplete: [{
                type: Input
            }], disabled: [{
                type: Input
            }], fieldId: [{
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
            }], hasError: [{
                type: Input
            }], describedBy: [{
                type: Input
            }], display: [{
                type: HostBinding,
                args: ['style.display']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS1hbmd1bGFyL3NyYy9saWIvcHJpbWl0aXZlcy90ZXh0LWZpZWxkL3RleHQtZmllbGQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktYW5ndWxhci9zcmMvbGliL3ByaW1pdGl2ZXMvdGV4dC1maWVsZC90ZXh0LWZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sUUFBUSxDQUFDOztBQU1oQyxNQUFNLE9BQU8sa0JBQWtCO0lBSi9CO1FBS1csaUJBQVksR0FBRyxjQUFjLENBQUM7UUFDOUIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsaUJBQWlCLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3hDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFWCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBSUMsWUFBTyxHQUFHLFVBQVUsQ0FBQztLQUNwRDs7K0dBZlksa0JBQWtCO21HQUFsQixrQkFBa0IsbVpDUC9CLDZnQkFxQkE7MkZEZGEsa0JBQWtCO2tCQUo5QixTQUFTOytCQUNFLG9CQUFvQjs4QkFJckIsWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFFd0IsT0FBTztzQkFBcEMsV0FBVzt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FtcGxpZnktdGV4dC1maWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWZpZWxkLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dEZpZWxkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlID0gJ25ldy1wYXNzd29yZCc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZpZWxkSWQgPSBgYW1wbGlmeS1maWVsZC0ke25hbm9pZCgxMil9YDtcbiAgQElucHV0KCkgaW5pdGlhbFZhbHVlID0gJyc7XG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcbiAgQElucHV0KCkgcmVxdWlyZWQgPSB0cnVlO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsSGlkZGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhhc0Vycm9yOiBib29sZWFuO1xuICBASW5wdXQoKSBkZXNjcmliZWRCeTogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIGRpc3BsYXkgPSAnY29udGVudHMnO1xufVxuIiwiPGxhYmVsXG4gIGNsYXNzPVwiYW1wbGlmeS1sYWJlbFwiXG4gIFtjbGFzcy5hbXBsaWZ5LXZpc3VhbGx5LWhpZGRlbl09XCJsYWJlbEhpZGRlblwiXG4gIFtmb3JdPVwiZmllbGRJZFwiXG4+XG4gIHt7IGxhYmVsIH19XG48L2xhYmVsPlxuPGlucHV0XG4gIGNsYXNzPVwiYW1wbGlmeS1pbnB1dFwiXG4gIGF1dG9jYXBpdGFsaXplPVwib2ZmXCJcbiAgW2lkXT1cImZpZWxkSWRcIlxuICBbdHlwZV09XCJ0eXBlXCJcbiAgW25hbWVdPVwibmFtZVwiXG4gIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gIFt2YWx1ZV09XCJpbml0aWFsVmFsdWVcIlxuICBbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXG4gIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkID8gJycgOiBudWxsXCJcbiAgW2F0dHIuYXJpYS1pbnZhbGlkXT1cImhhc0Vycm9yID8gJ3RydWUnIDogJ2ZhbHNlJ1wiXG4gIFthdHRyLmFyaWEtZGVzY3JpYmVkYnldPVwiZGVzY3JpYmVkQnlcIlxuLz5cbiJdfQ==