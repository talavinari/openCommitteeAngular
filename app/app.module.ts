import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { MinisterDetailComponent} from './minister-detail.component';
import {MeetingDetailComponent} from './meeting-detail.component';

import { HeroesComponent }     from './heroes.component';
import { DashboardComponent }     from './dashboard.component';
import { HeroService }         from './hero.service';
import { AboutComponent }         from './about.component';
import { MeetingsComponent }         from './meetings.component';
import { IndexComponent }         from './index.component';


import { MeetingService }         from './meeting.service';
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
      AboutComponent,
      MeetingsComponent,
      MeetingDetailComponent,
      IndexComponent
	],
  providers: [HeroService,
              BillService,
              MinisterService,
              MeetingService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }




