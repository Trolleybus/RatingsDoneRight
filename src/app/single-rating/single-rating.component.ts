import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Rating } from '../rating';
import { RatingsService } from '../ratings.service';

@Component({
  selector: 'app-single-rating',
  templateUrl: './single-rating.component.html',
  styleUrls: ['./single-rating.component.css']
})
export class SingleRatingComponent implements OnInit {
  id: number;
  rating: Rating;

  constructor(private route: ActivatedRoute, private ratingsService: RatingsService) { 
    this.route.params.subscribe( params => this.id = Number.parseInt(params['id']) );
  }

  ngOnInit() {
    this.rating = this.ratingsService.getRatingById(this.id);
  }

}
