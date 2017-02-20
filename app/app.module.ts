import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { BillDetailComponent } from './bill-detail.component';
import { MinisterDetailComponent} from './minister-detail.component';
import {MeetingDetailComponent} from './meeting-detail.component';

import { BillsComponent }     from './bills.component';
import { MinisterComponent }     from './minister.component';
import { AboutComponent }         from './about.component';
import { MeetingsComponent }         from './meetings.component';
import { IndexComponent }         from './index.component';
import { MeetingMinistersComponent }         from './meeting.ministers.component';

import { MeetingService }         from './meeting.service';
import { BillService }         from './bill.service';
import { MinisterService }         from './minister.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule]
,
  declarations: [ AppComponent,
      BillDetailComponent,
      BillsComponent, 
      MinisterComponent,
      MinisterDetailComponent,
      AboutComponent,
      MeetingsComponent,
      MeetingDetailComponent,
      IndexComponent,
      MeetingMinistersComponent
	],
  providers: [BillService,
              MinisterService,
              MeetingService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }




