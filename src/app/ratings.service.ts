import { Injectable } from '@angular/core';
import { Rating } from './rating';

@Injectable()
export class RatingsService {
  ratings: Rating[] = [];
  
  constructor() { 
    this.ratings.push(this.createRating('Migros', 100));
    this.ratings.push(this.createRating('ABB', 90));
    this.ratings.push(this.createRating('Balois', 90));
    this.ratings.push(this.createRating('SIX', 80));
    this.ratings.push(this.createRating('Swisscom', 98));
  }

  public getRatingById(id: number): Rating {
    return this.ratings.find(rating => rating.id === id);
  }

  public getAllRatings(): Rating[] {
    return this.ratings;
  }

  private createRating( company_number: string, ratingPer: number): Rating {
    let rating = new Rating();
    rating.id = this.ratings.length + 1;
    rating.company_name = company_number;
    rating.rating = ratingPer;
    return rating;
  }
}
