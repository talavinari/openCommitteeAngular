import { Component } from '@angular/core';
import { Bill } from './bill';
import { BillService } from './bill.service';
import { Router } from '@angular/router';

@Component({
  moduleId:module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
})

export class HeroesComponent { 
  selectedBill: Bill;
  bills : Bill[];
  // onSelect(bill: Bill): void {
  // this.selectedBill = bill;
  // }
  constructor(private billService: BillService , private router : Router) { }
  getBills(): void {
    this.billService.getBills().then(bills => this.bills = bills);
  }
   ngOnInit(): void {
    this.getBills();
  }

  gotoDetail(bill: Bill): void {
  this.router.navigate(['/detail', bill.id]);
  }

}

// export class HeroesComponent { 
//   title = 'Tour of Heroes';
//   selectedHero: Hero;
//   heroes : Hero[];
//   onSelect(hero: Hero): void {
//   this.selectedHero = hero;
//   }
//   constructor(private heroService: HeroService , private router : Router) { }
//   getHeroes(): void {
//     this.heroService.getHeroes().then(heros => this.heroes = heros);
//   }
//    ngOnInit(): void {
//     this.getHeroes();
//   }

//   gotoDetail(): void {
//   this.router.navigate(['/detail', this.selectedHero.id]);
//   }

// }

