import { Component, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { MinisterService } from './minister.service';
import { Minister } from './minister';


@Component({
  moduleId: module.id,
  selector: 'my-minister-detail',
  templateUrl: 'minister-detail.component.html'
})

export class MinisterDetailComponent implements OnInit {

  constructor(
  private ministerService: MinisterService,
  private route: ActivatedRoute,
  private location: Location) {}

	@Input()
	minister: Minister;

  ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.ministerService.getMinsterDetail(+params['id']))
    .subscribe(minister => this.minister = minister);
  }

  goBack(): void {
  this.location.back();
  }
}