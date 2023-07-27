import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-new-hero-page',
  templateUrl: './new-hero-page.component.html',
  styles: [
  ]
})
export class NewHeroPageComponent {

  constructor(
    private readonly heroesService: HeroesService
  ){}

  public heroForm = new FormGroup({
    id:        new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>( Publisher.DCComics ),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img:    new FormControl(''),

  });

  public publishers = [
    {
      id: 'DC Comics',
      value: 'Dc - Comics'
    },
    {
      id: 'Marvel Comics',
      value: 'Marvel - Comics'
    },
  ];

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero
    return hero;
  }

  onSubmit(): void {
    if ( this.heroForm.invalid ) return;
    if ( this.currentHero.id ) {
      this.heroesService.updateHero( this.currentHero )
        .subscribe( hero => {
          // TODO: show snacbkar
        });
      return;
    }

    this.heroesService.addHero( this.currentHero )
      .subscribe( hero => {
        // TODO: show snackbar and navigate to /heroes/edit.........
      })

  }
}
