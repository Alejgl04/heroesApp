import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private renderer: Renderer2;
  private colorTheme!: string | any;

  constructor( rendererFactory: RendererFactory2 ) {

    this.renderer = rendererFactory.createRenderer( null, null );

   }

   initTheme() {
    this.getColorTheme();
    this.renderer.addClass( document.body, this.colorTheme );
   }


   private getColorTheme() {
    if ( localStorage.getItem('user-theme') ) {
      this.colorTheme = 'light-mode';
    } else {
      this.colorTheme = 'light-mode';
    }
   }
}
