import { Component } from '@angular/core';
import { Bill } from './bill';
import { BillService } from './bill.service';
import { Router } from '@angular/router';

@Component({
  moduleId:module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html'
})

export class HeroesComponent { 
  selectedBill: Bill;
  bills : Bill[];
  
  constructor(private billService: BillService , private router : Router) { 
     console.log("constructyo");
  }
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