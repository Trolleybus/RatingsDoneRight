import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { LoansService } from '../loans.service';

@Component({
  selector: 'app-vote-loan',
  templateUrl: './vote-loan.component.html',
  styleUrls: ['./vote-loan.component.css']
})
export class VoteLoanComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private loansService: LoansService) { 
    this.route.params.subscribe( params => this.id = Number.parseInt(params['id']) );
  }

  ngOnInit() {
  }

}
