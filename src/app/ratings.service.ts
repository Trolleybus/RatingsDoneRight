import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Rating } from './rating';

@Injectable()
export class RatingsService {
  public apiHost: string = './assets/data/ratings.json';
  constructor(private http: Http) { }

  public getAllRatings(): Promise<Rating[]> {
    return this.http.get(this.apiHost)
      .toPromise()
      .then((response) => {
        return response.json().ratings;
      }).catch((err) => {
        console.log(err);
      });
  }
}
