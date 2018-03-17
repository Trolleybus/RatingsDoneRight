import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-ratings',
  templateUrl: './all-ratings.component.html',
  styleUrls: ['./all-ratings.component.css']
})
export class AllRatingsComponent implements OnInit {
  panelOpenState: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
