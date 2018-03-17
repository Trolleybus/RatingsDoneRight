import { Component, OnInit } from '@angular/core';

import { RatingsService } from '../ratings.service'
import { Rating } from '../rating';

@Component({
  selector: 'app-all-ratings',
  templateUrl: './all-ratings.component.html',
  styleUrls: ['./all-ratings.component.css']
})

export class AllRatingsComponent implements OnInit {
  ratings: Rating[];

  panelOpenState: boolean = false;

  constructor( private ratingsService: RatingsService ) { }

  ngOnInit() {
    this.ratings = this.ratingsService.getAllRatings();
  }

}
