import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-rating',
  templateUrl: './single-rating.component.html',
  styleUrls: ['./single-rating.component.css']
})
export class SingleRatingComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.id = params.id );
  }

  ngOnInit() {
  }

}
