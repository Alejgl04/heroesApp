import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'List Heroes', icon: 'label', url: './list-hero'},
    { label: 'Add Heroes', icon: 'add', url: './new-hero'},
    { label: 'Search Heroes', icon: 'search', url: './search-hero'},
  ]
}
