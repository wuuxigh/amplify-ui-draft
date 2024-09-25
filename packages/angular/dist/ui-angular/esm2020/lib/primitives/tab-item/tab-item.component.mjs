import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TabItemComponent {
    constructor() {
        this.active = false;
        this.display = 'block'; // emulate div behavior
    }
}
TabItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TabItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: TabItemComponent, selector: "amplify-tab-item", inputs: { title: "title", active: "active", id: "id", labelledById: "labelledById", tabIndex: "tabIndex" }, host: { properties: { "style.display": "this.display" } }, ngImport: i0, template: "<div\n  role=\"tabpanel\"\n  class=\"amplify-tabs__panel\"\n  [class]=\"active ? 'amplify-tabs__panel--active' : ''\"\n  [id]=\"id\"\n  [attr.aria-labelledby]=\"labelledById\"\n  [attr.tabindex]=\"tabIndex\"\n>\n  <ng-content *ngIf=\"active\"></ng-content>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TabItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'amplify-tab-item', template: "<div\n  role=\"tabpanel\"\n  class=\"amplify-tabs__panel\"\n  [class]=\"active ? 'amplify-tabs__panel--active' : ''\"\n  [id]=\"id\"\n  [attr.aria-labelledby]=\"labelledById\"\n  [attr.tabindex]=\"tabIndex\"\n>\n  <ng-content *ngIf=\"active\"></ng-content>\n</div>\n" }]
        }], propDecorators: { title: [{
                type: Input
            }], active: [{
                type: Input
            }], id: [{
                type: Input
            }], labelledById: [{
                type: Input
            }], tabIndex: [{
                type: Input
            }], display: [{
                type: HostBinding,
                args: ['style.display']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktYW5ndWxhci9zcmMvbGliL3ByaW1pdGl2ZXMvdGFiLWl0ZW0vdGFiLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktYW5ndWxhci9zcmMvbGliL3ByaW1pdGl2ZXMvdGFiLWl0ZW0vdGFiLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNOUQsTUFBTSxPQUFPLGdCQUFnQjtJQUo3QjtRQU1XLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFJTSxZQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsdUJBQXVCO0tBQ3pFOzs2R0FQWSxnQkFBZ0I7aUdBQWhCLGdCQUFnQiwrTkNON0IsNFFBVUE7MkZESmEsZ0JBQWdCO2tCQUo1QixTQUFTOytCQUNFLGtCQUFrQjs4QkFJbkIsS0FBSztzQkFBYixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUN3QixPQUFPO3NCQUFwQyxXQUFXO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbXBsaWZ5LXRhYi1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1pdGVtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFiSXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbGxlZEJ5SWQ6IHN0cmluZztcbiAgQElucHV0KCkgdGFiSW5kZXg6IG51bWJlcjtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JykgZGlzcGxheSA9ICdibG9jayc7IC8vIGVtdWxhdGUgZGl2IGJlaGF2aW9yXG59XG4iLCI8ZGl2XG4gIHJvbGU9XCJ0YWJwYW5lbFwiXG4gIGNsYXNzPVwiYW1wbGlmeS10YWJzX19wYW5lbFwiXG4gIFtjbGFzc109XCJhY3RpdmUgPyAnYW1wbGlmeS10YWJzX19wYW5lbC0tYWN0aXZlJyA6ICcnXCJcbiAgW2lkXT1cImlkXCJcbiAgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImxhYmVsbGVkQnlJZFwiXG4gIFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4XCJcbj5cbiAgPG5nLWNvbnRlbnQgKm5nSWY9XCJhY3RpdmVcIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==