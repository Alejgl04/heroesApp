import { ThemeService } from './services/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private themeService: ThemeService
  ){
    this.themeService.initTheme();
  }

}
