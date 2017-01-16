import { Component, Input, OnInit  } from '@angular/core';
import { MeetingService } from './meeting.service';
import { Meeting } from './meeting';
import { ActivatedRoute, Params }   from '@angular/router';

@Component({
  moduleId:module.id,
  selector: 'my-app-index',
  templateUrl: 'index.component.html'
})

export class IndexComponent implements OnInit {

  constructor(
  private meetingService: MeetingService, 
  private route: ActivatedRoute
  ) {}
  
  @Input()
  lastMeeting: Meeting;      
  
  ngOnInit(): void {
      console.log("serch for last meeting ");
     this.meetingService.getLastMeeting().then(last => this.lastMeeting = last);
  }
      
}