import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { LoansService } from '../loans.service';
import { Loan } from '../loan';

@Component({
  selector: 'app-vote-loan',
  templateUrl: './vote-loan.component.html',
  styleUrls: ['./vote-loan.component.css']
})
export class VoteLoanComponent implements OnInit {
  loans: Loan[] = [];

  constructor(private loansService: LoansService) { }

  ngOnInit() {
    this.loans = this.loansService.getLoansToApprove();
  }

  public approveLoan(event, id: number): void {
    this.loansService.setApprovalStatus(id, true);
    this.loans = this.loansService.getLoansToApprove();
  }

  public disapproveLoan(event, id: number): void {
    this.loansService.setApprovalStatus(id, false);
    this.loans = this.loansService.getLoansToApprove();
  }

  public getFormattedAmount(amount: number): string {
    return amount.toLocaleString('de-CH');
  }
}
