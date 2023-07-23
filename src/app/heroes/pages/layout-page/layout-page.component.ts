import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public isDarkMode!: boolean;
  public iconColor?: string;

  public sidebarItems = [
    { label: 'List Heroes', icon: 'label', url: './list-hero'},
    { label: 'Add Heroes', icon: 'add', url: './new-hero'},
    { label: 'Search Heroes', icon: 'search', url: './search-hero'},
  ];

  constructor(
    private themeService: ThemeService
  ){
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();

  }

  toggleDarkMode(): void {
    this.isDarkMode ? this.themeService.updateTheme('light-mode') : this.themeService.updateTheme('dark-mode');
    this.isDarkMode = this.themeService.isDarkMode();

  }

}
