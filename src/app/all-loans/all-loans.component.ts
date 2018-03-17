import { Component, OnInit } from '@angular/core';

import { LoansService } from '../loans.service'
import { Loan } from '../loan';

@Component({
  selector: 'app-all-loans',
  templateUrl: './all-loans.component.html',
  styleUrls: ['./all-loans.component.css']
})

export class AllLoansComponent implements OnInit {
  loans: Loan[];

  panelOpenState: boolean = false;

  constructor( private loansService: LoansService ) { }

  ngOnInit() {
    this.loans = this.loansService.getAllLoans();
  }

}
