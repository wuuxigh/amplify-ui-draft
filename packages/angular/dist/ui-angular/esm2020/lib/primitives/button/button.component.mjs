import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonComponent {
    constructor() {
        this.type = 'button';
        this.fullWidth = false;
        this.isDisabled = false;
        this.size = 'medium';
        this.variation = 'default';
        this.fontWeight = 'normal';
    }
    get getDisabled() {
        return this.isDisabled ? '' : null;
    }
    get classNames() {
        let className = 'amplify-button';
        if (this.variation) {
            className += ` amplify-button--${this.variation}`;
        }
        if (this.size) {
            className += ` amplify-button--${this.size}`;
        }
        if (this.fullWidth) {
            className += ` amplify-button--fullwidth`;
        }
        if (this.isDisabled) {
            className += ` amplify-button--disabled amplify-button--loading`;
        }
        return className;
    }
    ngOnInit() {
        this.typeAttr = this.type;
        this.fullWidthAttr = this.fullWidth;
        this.sizeAttr = this.size;
        this.variationAttr = this.variation;
        this.fontWeightAttr = this.fontWeight;
    }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: ButtonComponent, selector: "button[amplify-button]", inputs: { type: "type", fullWidth: "fullWidth", isDisabled: "isDisabled", size: "size", variation: "variation", fontWeight: "fontWeight" }, host: { properties: { "type": "this.typeAttr", "attr.data-fullwidth": "this.fullWidthAttr", "attr.data-size": "this.sizeAttr", "attr.data-variation": "this.variationAttr", "style.font-weight": "this.fontWeightAttr", "attr.disabled": "this.getDisabled", "class": "this.classNames" } }, ngImport: i0, template: "<ng-content></ng-content>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'button[amplify-button]', template: "<ng-content></ng-content>\n" }]
        }], propDecorators: { type: [{
                type: Input
            }], fullWidth: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], size: [{
                type: Input
            }], variation: [{
                type: Input
            }], fontWeight: [{
                type: Input
            }], typeAttr: [{
                type: HostBinding,
                args: ['type']
            }], fullWidthAttr: [{
                type: HostBinding,
                args: ['attr.data-fullwidth']
            }], sizeAttr: [{
                type: HostBinding,
                args: ['attr.data-size']
            }], variationAttr: [{
                type: HostBinding,
                args: ['attr.data-variation']
            }], fontWeightAttr: [{
                type: HostBinding,
                args: ['style.font-weight']
            }], getDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], classNames: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWFuZ3VsYXIvc3JjL2xpYi9wcmltaXRpdmVzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktYW5ndWxhci9zcmMvbGliL3ByaW1pdGl2ZXMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBTXRFLE1BQU0sT0FBTyxlQUFlO0lBSjVCO1FBS1csU0FBSSxHQUF3QixRQUFRLENBQUM7UUFDckMsY0FBUyxHQUFxQixLQUFLLENBQUM7UUFDcEMsZUFBVSxHQUFxQixLQUFLLENBQUM7UUFDckMsU0FBSSxHQUFpQyxRQUFRLENBQUM7UUFDOUMsY0FBUyxHQUFtQyxTQUFTLENBQUM7UUFDdEQsZUFBVSxHQUFrQyxRQUFRLENBQUM7S0FxQy9EO0lBN0JDLElBQWtDLFdBQVc7UUFDM0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBMEIsVUFBVTtRQUNsQyxJQUFJLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsU0FBUyxJQUFJLG9CQUFvQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbkQ7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixTQUFTLElBQUksb0JBQW9CLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM5QztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixTQUFTLElBQUksNEJBQTRCLENBQUM7U0FDM0M7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsU0FBUyxJQUFJLG1EQUFtRCxDQUFDO1NBQ2xFO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hDLENBQUM7OzRHQTFDVSxlQUFlO2dHQUFmLGVBQWUsdWVDTjVCLDZCQUNBOzJGREthLGVBQWU7a0JBSjNCLFNBQVM7K0JBQ0Usd0JBQXdCOzhCQUl6QixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBRWUsUUFBUTtzQkFBNUIsV0FBVzt1QkFBQyxNQUFNO2dCQUNpQixhQUFhO3NCQUFoRCxXQUFXO3VCQUFDLHFCQUFxQjtnQkFDSCxRQUFRO3NCQUF0QyxXQUFXO3VCQUFDLGdCQUFnQjtnQkFDTyxhQUFhO3NCQUFoRCxXQUFXO3VCQUFDLHFCQUFxQjtnQkFDQSxjQUFjO3NCQUEvQyxXQUFXO3VCQUFDLG1CQUFtQjtnQkFFRSxXQUFXO3NCQUE1QyxXQUFXO3VCQUFDLGVBQWU7Z0JBSUYsVUFBVTtzQkFBbkMsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b25bYW1wbGlmeS1idXR0b25dJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHR5cGU6ICdzdWJtaXQnIHwgJ2J1dHRvbicgPSAnYnV0dG9uJztcbiAgQElucHV0KCkgZnVsbFdpZHRoOiBib29sZWFuIHwgc3RyaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW4gfCBzdHJpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgc2l6ZTogJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJyA9ICdtZWRpdW0nO1xuICBASW5wdXQoKSB2YXJpYXRpb246ICdwcmltYXJ5JyB8ICdkZWZhdWx0JyB8ICdsaW5rJyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgZm9udFdlaWdodDogJ25vcm1hbCcgfCAnYm9sZCcgfCAnbGlnaHRlcicgPSAnbm9ybWFsJztcblxuICBASG9zdEJpbmRpbmcoJ3R5cGUnKSB0eXBlQXR0cjogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1mdWxsd2lkdGgnKSBmdWxsV2lkdGhBdHRyOiBib29sZWFuIHwgc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1zaXplJykgc2l6ZUF0dHI6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtdmFyaWF0aW9uJykgdmFyaWF0aW9uQXR0cjogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmZvbnQtd2VpZ2h0JykgZm9udFdlaWdodEF0dHI6IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGlzYWJsZWQnKSBnZXQgZ2V0RGlzYWJsZWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkID8gJycgOiBudWxsO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBjbGFzc05hbWVzKCk6IHN0cmluZyB7XG4gICAgbGV0IGNsYXNzTmFtZSA9ICdhbXBsaWZ5LWJ1dHRvbic7XG4gICAgaWYgKHRoaXMudmFyaWF0aW9uKSB7XG4gICAgICBjbGFzc05hbWUgKz0gYCBhbXBsaWZ5LWJ1dHRvbi0tJHt0aGlzLnZhcmlhdGlvbn1gO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICBjbGFzc05hbWUgKz0gYCBhbXBsaWZ5LWJ1dHRvbi0tJHt0aGlzLnNpemV9YDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZnVsbFdpZHRoKSB7XG4gICAgICBjbGFzc05hbWUgKz0gYCBhbXBsaWZ5LWJ1dHRvbi0tZnVsbHdpZHRoYDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgY2xhc3NOYW1lICs9IGAgYW1wbGlmeS1idXR0b24tLWRpc2FibGVkIGFtcGxpZnktYnV0dG9uLS1sb2FkaW5nYDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50eXBlQXR0ciA9IHRoaXMudHlwZTtcbiAgICB0aGlzLmZ1bGxXaWR0aEF0dHIgPSB0aGlzLmZ1bGxXaWR0aDtcbiAgICB0aGlzLnNpemVBdHRyID0gdGhpcy5zaXplO1xuICAgIHRoaXMudmFyaWF0aW9uQXR0ciA9IHRoaXMudmFyaWF0aW9uO1xuICAgIHRoaXMuZm9udFdlaWdodEF0dHIgPSB0aGlzLmZvbnRXZWlnaHQ7XG4gIH1cbn1cbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiJdfQ==