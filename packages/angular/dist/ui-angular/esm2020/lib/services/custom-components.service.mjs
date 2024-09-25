import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Stores and provides custom components that users provide with `amplify-slot`.
 */
export class CustomComponentsService {
    constructor() {
        this._customComponents = {};
    }
    get customComponents() {
        return this._customComponents;
    }
    set customComponents(customComponents) {
        this._customComponents = { ...this._customComponents, ...customComponents };
    }
}
CustomComponentsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CustomComponentsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CustomComponentsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CustomComponentsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CustomComponentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWNvbXBvbmVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWFuZ3VsYXIvc3JjL2xpYi9zZXJ2aWNlcy9jdXN0b20tY29tcG9uZW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDOztHQUVHO0FBSUgsTUFBTSxPQUFPLHVCQUF1QjtJQUhwQztRQUlVLHNCQUFpQixHQUFxQixFQUFFLENBQUM7S0FTbEQ7SUFQQyxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBVyxnQkFBZ0IsQ0FBQyxnQkFBa0M7UUFDNUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzlFLENBQUM7O29IQVRVLHVCQUF1Qjt3SEFBdkIsdUJBQXVCLGNBRnRCLE1BQU07MkZBRVAsdUJBQXVCO2tCQUhuQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudHMgfSBmcm9tICcuLi9jb21tb24nO1xuXG4vKipcbiAqIFN0b3JlcyBhbmQgcHJvdmlkZXMgY3VzdG9tIGNvbXBvbmVudHMgdGhhdCB1c2VycyBwcm92aWRlIHdpdGggYGFtcGxpZnktc2xvdGAuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21Db21wb25lbnRzU2VydmljZSB7XG4gIHByaXZhdGUgX2N1c3RvbUNvbXBvbmVudHM6IEN1c3RvbUNvbXBvbmVudHMgPSB7fTtcblxuICBwdWJsaWMgZ2V0IGN1c3RvbUNvbXBvbmVudHMoKTogQ3VzdG9tQ29tcG9uZW50cyB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUNvbXBvbmVudHM7XG4gIH1cblxuICBwdWJsaWMgc2V0IGN1c3RvbUNvbXBvbmVudHMoY3VzdG9tQ29tcG9uZW50czogQ3VzdG9tQ29tcG9uZW50cykge1xuICAgIHRoaXMuX2N1c3RvbUNvbXBvbmVudHMgPSB7IC4uLnRoaXMuX2N1c3RvbUNvbXBvbmVudHMsIC4uLmN1c3RvbUNvbXBvbmVudHMgfTtcbiAgfVxufVxuIl19