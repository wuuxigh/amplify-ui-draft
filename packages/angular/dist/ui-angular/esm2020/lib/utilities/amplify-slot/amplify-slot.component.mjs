import { Component, HostBinding, Input, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/custom-components.service";
import * as i2 from "@angular/common";
export class AmplifySlotComponent {
    constructor(propService) {
        this.propService = propService;
        this.display = 'contents';
        this.isOverriden = false;
    }
    ngAfterContentInit() {
        const { customComponents } = this.propService;
        const overridingComponent = customComponents[this.name];
        if (overridingComponent) {
            this.overridingComponent = overridingComponent;
            this.isOverriden = true;
        }
    }
}
AmplifySlotComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AmplifySlotComponent, deps: [{ token: i1.CustomComponentsService }], target: i0.ɵɵFactoryTarget.Component });
AmplifySlotComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: AmplifySlotComponent, selector: "amplify-slot", inputs: { name: "name", context: "context" }, host: { properties: { "style.display": "this.display" } }, ngImport: i0, template: "<!-- \n  if slot isn't overwritten, we display the the default coponent, which is the \n  children passed onto this component.\n-->\n<ng-content *ngIf=\"!isOverriden\"></ng-content>\n\n<!-- If slot is overwritten, we render that instead. -->\n<ng-container\n  *ngIf=\"isOverriden\"\n  [ngTemplateOutlet]=\"overridingComponent\"\n  [ngTemplateOutletContext]=\"context\"\n></ng-container>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AmplifySlotComponent, decorators: [{
            type: Component,
            args: [{ selector: 'amplify-slot', template: "<!-- \n  if slot isn't overwritten, we display the the default coponent, which is the \n  children passed onto this component.\n-->\n<ng-content *ngIf=\"!isOverriden\"></ng-content>\n\n<!-- If slot is overwritten, we render that instead. -->\n<ng-container\n  *ngIf=\"isOverriden\"\n  [ngTemplateOutlet]=\"overridingComponent\"\n  [ngTemplateOutletContext]=\"context\"\n></ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i1.CustomComponentsService }]; }, propDecorators: { name: [{
                type: Input
            }], context: [{
                type: Input
            }], display: [{
                type: HostBinding,
                args: ['style.display']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1wbGlmeS1zbG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWFuZ3VsYXIvc3JjL2xpYi91dGlsaXRpZXMvYW1wbGlmeS1zbG90L2FtcGxpZnktc2xvdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS1hbmd1bGFyL3NyYy9saWIvdXRpbGl0aWVzL2FtcGxpZnktc2xvdC9hbXBsaWZ5LXNsb3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxHQUVOLE1BQU0sZUFBZSxDQUFDOzs7O0FBT3ZCLE1BQU0sT0FBTyxvQkFBb0I7SUFTL0IsWUFBb0IsV0FBb0M7UUFBcEMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBTDFCLFlBQU8sR0FBRyxVQUFVLENBQUM7UUFHNUMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFFZ0MsQ0FBQztJQUU1RCxrQkFBa0I7UUFDaEIsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM5QyxNQUFNLG1CQUFtQixHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4RCxJQUFJLG1CQUFtQixFQUFFO1lBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztZQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNILENBQUM7O2lIQW5CVSxvQkFBb0I7cUdBQXBCLG9CQUFvQiw2SkNiakMsc1lBWUE7MkZEQ2Esb0JBQW9CO2tCQUpoQyxTQUFTOytCQUNFLGNBQWM7OEdBSWYsSUFBSTtzQkFBWixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFFd0IsT0FBTztzQkFBcEMsV0FBVzt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY3VzdG9tLWNvbXBvbmVudHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FtcGxpZnktc2xvdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbXBsaWZ5LXNsb3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBbXBsaWZ5U2xvdENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbnRleHQ6IFJlY29yZDxQcm9wZXJ0eUtleSwgdW5rbm93bj47XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JykgZGlzcGxheSA9ICdjb250ZW50cyc7XG5cbiAgcHVibGljIG92ZXJyaWRpbmdDb21wb25lbnQ6IFRlbXBsYXRlUmVmPHVua25vd24+O1xuICBwdWJsaWMgaXNPdmVycmlkZW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb3BTZXJ2aWNlOiBDdXN0b21Db21wb25lbnRzU2VydmljZSkge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjdXN0b21Db21wb25lbnRzIH0gPSB0aGlzLnByb3BTZXJ2aWNlO1xuICAgIGNvbnN0IG92ZXJyaWRpbmdDb21wb25lbnQgPSBjdXN0b21Db21wb25lbnRzW3RoaXMubmFtZV07XG5cbiAgICBpZiAob3ZlcnJpZGluZ0NvbXBvbmVudCkge1xuICAgICAgdGhpcy5vdmVycmlkaW5nQ29tcG9uZW50ID0gb3ZlcnJpZGluZ0NvbXBvbmVudDtcbiAgICAgIHRoaXMuaXNPdmVycmlkZW4gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIiwiPCEtLSBcbiAgaWYgc2xvdCBpc24ndCBvdmVyd3JpdHRlbiwgd2UgZGlzcGxheSB0aGUgdGhlIGRlZmF1bHQgY29wb25lbnQsIHdoaWNoIGlzIHRoZSBcbiAgY2hpbGRyZW4gcGFzc2VkIG9udG8gdGhpcyBjb21wb25lbnQuXG4tLT5cbjxuZy1jb250ZW50ICpuZ0lmPVwiIWlzT3ZlcnJpZGVuXCI+PC9uZy1jb250ZW50PlxuXG48IS0tIElmIHNsb3QgaXMgb3ZlcndyaXR0ZW4sIHdlIHJlbmRlciB0aGF0IGluc3RlYWQuIC0tPlxuPG5nLWNvbnRhaW5lclxuICAqbmdJZj1cImlzT3ZlcnJpZGVuXCJcbiAgW25nVGVtcGxhdGVPdXRsZXRdPVwib3ZlcnJpZGluZ0NvbXBvbmVudFwiXG4gIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJjb250ZXh0XCJcbj48L25nLWNvbnRhaW5lcj5cbiJdfQ==