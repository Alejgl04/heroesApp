import { ThemeService } from './services/theme.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isDarkMode!: boolean;
  public iconColor?: string;


  constructor(
    private themeService: ThemeService
  ){
    this.themeService.initTheme();

  }

}
