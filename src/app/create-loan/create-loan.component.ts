import { Component, OnInit } from '@angular/core';
import { Loan } from '../loan';
import { LoansService } from '../loans.service';

@Component({
  selector: 'app-create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.css']
})
export class CreateLoanComponent implements OnInit {
  draft: Loan;

  title: string;
  description: string;
  amount: number;
  interestRate: number;
  period: number;

  constructor(private loansService: LoansService) { }

  ngOnInit() { 
    this.draft = this.loansService.loadDraft();
    this.title = this.draft.title;
    this.description = this.draft.description;
    this.amount = this.draft.amount;
    this.interestRate = this.draft.interestRate;
    this.period = this.draft.period;
  }

  public saveDraft(): void {
    this.draft.title = this.title;
    this.draft.description = this.description;
    this.draft.amount = this.amount;
    this.draft.interestRate = this.interestRate;
    this.draft.period = this.period;
    this.loansService.saveDraft(this.draft);
  }

  public applyForLoan(event): void {
    this.draft.title = this.title;
    this.draft.amount = this.amount;
    this.draft.isApproved = false;
    this.draft.isVoted = false;
    this.draft.applicationDate = new Date();
    this.draft.applicant = "James";
    this.draft.percentYes = 0;
    this.draft.percentNo = 0;
    this.draft.percentUndecided = 100;
    this.draft.interestRate = this.interestRate;
    this.draft.friends = [];
    this.draft.description = this.description;
    this.draft.period = this.period;

    this.loansService.publishNewLoanApplication(this.draft);
    
    // reset
    this.title = "";
    this.description = "";
    this.amount = 0;
    this.interestRate = 0;
    this.period = 0;
    this.draft = new Loan();
    this.loansService.resetDraft();
  }
}
