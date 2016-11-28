import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  moduleId:module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
})

export class HeroesComponent { 
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes : Hero[];
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }
  constructor(private heroService: HeroService , private router : Router) { }
  getHeroes(): void {
    this.heroService.getHeroes().then(heros => this.heroes = heros);
  }
   ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
  }

}

