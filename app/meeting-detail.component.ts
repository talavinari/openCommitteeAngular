import { Component, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { MeetingService } from './meeting.service';
import { Meeting } from './meeting';


@Component({
  moduleId: module.id,
  selector: 'my-meeting-detail',
  templateUrl: 'meeting-detail.component.html'
})

export class MeetingDetailComponent implements OnInit {

  constructor(
  private meetingService: MeetingService,
  private route: ActivatedRoute,
  private location: Location) {}

@Input()
meeting: Meeting;

  ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.meetingService.getMeetingDetail(+params['id']))
    .subscribe(meeting => this.meeting = meeting);
  }

  goBack(): void {
  this.location.back();
  }
}