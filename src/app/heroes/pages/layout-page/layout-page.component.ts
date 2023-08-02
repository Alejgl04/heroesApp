import { Component } from '@angular/core';
import { ThemeService } from '../../services/hero-theme.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/auth/interfaces/user.interface';
import { Router } from '@angular/router';

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
    private themeService: ThemeService,
    private authService: AuthService,
    private router: Router,
  ){
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  toggleDarkMode(): void {
    this.isDarkMode ? this.themeService.updateTheme('light-mode') : this.themeService.updateTheme('dark-mode');
    this.isDarkMode = this.themeService.isDarkMode();

  }

  logOut() {
    this.authService.logOut();
    this.themeService.updateTheme('light-mode');
    this.router.navigate(['/auth/login']);


  }

}
