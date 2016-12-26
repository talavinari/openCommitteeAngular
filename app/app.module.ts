import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { MinisterDetailComponent} from './minister-detail.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent }     from './dashboard.component';
import { HeroService }         from './hero.service';
import { AboutComponent }         from './about.component';
import { BillService }         from './bill.service';
import { MinisterService }         from './minister.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule]
,
  declarations: [ AppComponent,
      HeroDetailComponent,
      HeroesComponent, 
      DashboardComponent,
      MinisterDetailComponent,
      AboutComponent
	],
  providers: [HeroService, BillService, MinisterService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }




