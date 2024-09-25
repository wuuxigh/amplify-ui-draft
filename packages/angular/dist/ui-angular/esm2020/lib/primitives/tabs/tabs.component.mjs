import { Component, ContentChildren, Output, EventEmitter, } from '@angular/core';
import { nanoid } from 'nanoid';
import { TabItemComponent } from '../tab-item/tab-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TabsComponent {
    constructor() {
        this.tabChange = new EventEmitter();
    }
    ngAfterContentInit() {
        // assign ids
        this.tabs.forEach((tab, index) => {
            tab.id = `tab-${nanoid(12)}-panel-${index}`;
            tab.labelledById = `tab-${nanoid(12)}-tab-${index}`;
        });
        // find active tab
        // TODO(enhancement): more declarative way for choosing the initial tab to render
        const activeTabs = this.tabs.filter((tab) => tab.active);
        // set active tab
        if (activeTabs.length !== 1) {
            this.selectTab(this.tabs.first);
        }
    }
    selectTab(tab) {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });
        tab.active = true;
    }
    handleTabClick(tab) {
        if (tab.active)
            return; // don't do anything if clicks the current active tab
        this.tabChange.emit();
        this.selectTab(tab);
    }
}
TabsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TabsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: TabsComponent, selector: "amplify-tabs", outputs: { tabChange: "tabChange" }, queries: [{ propertyName: "tabs", predicate: TabItemComponent }], ngImport: i0, template: "<div class=\"amplify-tabs\">\n  <div\n    class=\"amplify-tabs__list amplify-tabs__list--top amplify-tabs__list--equal\"\n    role=\"tablist\"\n  >\n    <button\n      *ngFor=\"let tab of tabs\"\n      class=\"amplify-tabs__item\"\n      role=\"tab\"\n      [id]=\"tab.labelledById\"\n      [tabindex]=\"tab.active ? '0' : '-1'\"\n      [attr.aria-selected]=\"tab.active\"\n      [attr.aria-controls]=\"tab.id\"\n      [class]=\"tab.active ? 'amplify-tabs__item--active' : ''\"\n      (click)=\"handleTabClick(tab)\"\n    >\n      {{ tab.title }}\n    </button>\n  </div>\n</div>\n\n<ng-content></ng-content>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TabsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'amplify-tabs', template: "<div class=\"amplify-tabs\">\n  <div\n    class=\"amplify-tabs__list amplify-tabs__list--top amplify-tabs__list--equal\"\n    role=\"tablist\"\n  >\n    <button\n      *ngFor=\"let tab of tabs\"\n      class=\"amplify-tabs__item\"\n      role=\"tab\"\n      [id]=\"tab.labelledById\"\n      [tabindex]=\"tab.active ? '0' : '-1'\"\n      [attr.aria-selected]=\"tab.active\"\n      [attr.aria-controls]=\"tab.id\"\n      [class]=\"tab.active ? 'amplify-tabs__item--active' : ''\"\n      (click)=\"handleTabClick(tab)\"\n    >\n      {{ tab.title }}\n    </button>\n  </div>\n</div>\n\n<ng-content></ng-content>\n" }]
        }], propDecorators: { tabs: [{
                type: ContentChildren,
                args: [TabItemComponent]
            }], tabChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS1hbmd1bGFyL3NyYy9saWIvcHJpbWl0aXZlcy90YWJzL3RhYnMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktYW5ndWxhci9zcmMvbGliL3ByaW1pdGl2ZXMvdGFicy90YWJzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUVmLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNoQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBTWxFLE1BQU0sT0FBTyxhQUFhO0lBSjFCO1FBTVksY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7S0ErQjFDO0lBN0JDLGtCQUFrQjtRQUNoQixhQUFhO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDL0IsR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQztZQUM1QyxHQUFHLENBQUMsWUFBWSxHQUFHLE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO1FBRUgsa0JBQWtCO1FBQ2xCLGlGQUFpRjtRQUNqRixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpELGlCQUFpQjtRQUNqQixJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFRCxTQUFTLENBQUMsR0FBcUI7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUN4QixHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUNILEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxjQUFjLENBQUMsR0FBcUI7UUFDbEMsSUFBSSxHQUFHLENBQUMsTUFBTTtZQUFFLE9BQU8sQ0FBQyxxREFBcUQ7UUFDN0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7OzBHQWhDVSxhQUFhOzhGQUFiLGFBQWEsOEdBQ1AsZ0JBQWdCLDZCQ2hCbkMsb21CQXNCQTsyRkRQYSxhQUFhO2tCQUp6QixTQUFTOytCQUNFLGNBQWM7OEJBSVcsSUFBSTtzQkFBdEMsZUFBZTt1QkFBQyxnQkFBZ0I7Z0JBQ3ZCLFNBQVM7c0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tICduYW5vaWQnO1xuaW1wb3J0IHsgVGFiSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL3RhYi1pdGVtL3RhYi1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FtcGxpZnktdGFicycsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKFRhYkl0ZW1Db21wb25lbnQpIHRhYnM6IFF1ZXJ5TGlzdDxUYWJJdGVtQ29tcG9uZW50PjtcbiAgQE91dHB1dCgpIHRhYkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgLy8gYXNzaWduIGlkc1xuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XG4gICAgICB0YWIuaWQgPSBgdGFiLSR7bmFub2lkKDEyKX0tcGFuZWwtJHtpbmRleH1gO1xuICAgICAgdGFiLmxhYmVsbGVkQnlJZCA9IGB0YWItJHtuYW5vaWQoMTIpfS10YWItJHtpbmRleH1gO1xuICAgIH0pO1xuXG4gICAgLy8gZmluZCBhY3RpdmUgdGFiXG4gICAgLy8gVE9ETyhlbmhhbmNlbWVudCk6IG1vcmUgZGVjbGFyYXRpdmUgd2F5IGZvciBjaG9vc2luZyB0aGUgaW5pdGlhbCB0YWIgdG8gcmVuZGVyXG4gICAgY29uc3QgYWN0aXZlVGFicyA9IHRoaXMudGFicy5maWx0ZXIoKHRhYikgPT4gdGFiLmFjdGl2ZSk7XG5cbiAgICAvLyBzZXQgYWN0aXZlIHRhYlxuICAgIGlmIChhY3RpdmVUYWJzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgdGhpcy5zZWxlY3RUYWIodGhpcy50YWJzLmZpcnN0KTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RUYWIodGFiOiBUYWJJdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgdGFiLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHRhYi5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgaGFuZGxlVGFiQ2xpY2sodGFiOiBUYWJJdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgaWYgKHRhYi5hY3RpdmUpIHJldHVybjsgLy8gZG9uJ3QgZG8gYW55dGhpbmcgaWYgY2xpY2tzIHRoZSBjdXJyZW50IGFjdGl2ZSB0YWJcbiAgICB0aGlzLnRhYkNoYW5nZS5lbWl0KCk7XG4gICAgdGhpcy5zZWxlY3RUYWIodGFiKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImFtcGxpZnktdGFic1wiPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJhbXBsaWZ5LXRhYnNfX2xpc3QgYW1wbGlmeS10YWJzX19saXN0LS10b3AgYW1wbGlmeS10YWJzX19saXN0LS1lcXVhbFwiXG4gICAgcm9sZT1cInRhYmxpc3RcIlxuICA+XG4gICAgPGJ1dHRvblxuICAgICAgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzXCJcbiAgICAgIGNsYXNzPVwiYW1wbGlmeS10YWJzX19pdGVtXCJcbiAgICAgIHJvbGU9XCJ0YWJcIlxuICAgICAgW2lkXT1cInRhYi5sYWJlbGxlZEJ5SWRcIlxuICAgICAgW3RhYmluZGV4XT1cInRhYi5hY3RpdmUgPyAnMCcgOiAnLTEnXCJcbiAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwidGFiLmFjdGl2ZVwiXG4gICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cInRhYi5pZFwiXG4gICAgICBbY2xhc3NdPVwidGFiLmFjdGl2ZSA/ICdhbXBsaWZ5LXRhYnNfX2l0ZW0tLWFjdGl2ZScgOiAnJ1wiXG4gICAgICAoY2xpY2spPVwiaGFuZGxlVGFiQ2xpY2sodGFiKVwiXG4gICAgPlxuICAgICAge3sgdGFiLnRpdGxlIH19XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiJdfQ==