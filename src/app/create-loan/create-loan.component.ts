import { Component, OnInit } from '@angular/core';
import { Loan } from '../loan';
import { LoansService } from '../loans.service';

@Component({
  selector: 'app-create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.css']
})
export class CreateLoanComponent implements OnInit {
  loan: Loan;

  constructor(private loansService: LoansService) { }

  ngOnInit() { }
}
