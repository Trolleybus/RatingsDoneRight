import { Injectable } from '@angular/core';
import { Loan } from './loan';

@Injectable()
export class LoansService {
  loans: Loan[] = [];
  draftLoan: Loan;
  
  constructor() {
    this.draftLoan = new Loan();
    this.loans.push(this.createLoan('Reg Dogs Company', 10000, false, false, new Date(), "Urs Heini", 51, 49, 0, 1.5, [], "Some Random Descriptionn with loads of text. So this guy is going BIG!",2));
    this.loans.push(this.createLoan('ABB', 90000, false, false, new Date(), "Urs Heini", 51, 49, 0, 1.5, [], "Some Random Description",6));
    this.loans.push(this.createLoan('Balois', 90000, true, true, new Date(), "Urs Heini", 51, 49, 0, 1.5, [], "Some Random Description",8));
    this.loans.push(this.createLoan('SIX', 80000, true, true, new Date(), "Urs Heini", 51, 49, 0, 1.5, [], "Some Random Description",1));
    this.loans.push(this.createLoan('Swisscom', 98000, true, true, new Date(), "Urs Heini", 51, 49, 0, 1.5, [], "Some Random Description",2));
    this.loans.push(this.createLoan('Swiss', 8900000, false, true, new Date(), "Urs Heini", 51, 49, 0, 1.5, [], "Some Random Description",1));
  }

  public saveDraft(draft: Loan): void {
    this.draftLoan = draft;
  }

  public loadDraft(): Loan {
    return this.draftLoan;
  }

  public getAllLoans(): Loan[] {
    return this.loans;
  }

  public resetDraft(): void {
    this.draftLoan = new Loan();
  }

  public setApprovalStatus(id: number, isApproved: boolean): void {
    let loanToUpdate = this.loans.find(loan => loan.id === id);
    let index = this.loans.indexOf(loanToUpdate);
    loanToUpdate.isApproved = isApproved;
    loanToUpdate.isVoted = true;
    this.loans[index] = loanToUpdate;
  }

  public getLoansToApprove(): Loan[] {
    return this.loans.filter(loan => loan.isVoted == false);
  }

  public publishNewLoanApplication(draft: Loan): void {
    this.loans.push(this.createLoan(draft.title, draft.amount, draft.isApproved, draft.isVoted, draft.applicationDate, draft.applicant, draft.percentYes, draft.percentNo, draft.percentUndecided, draft.interestRate, draft.friends, draft.description, draft.period));
  }

  private createLoan( title, amount, isApproved, isVoted, applicationDate, applicant, percentYes, percentNo, percentUndecided, interestRate, friends, description, period ): Loan {
    let loan = new Loan();
    loan.id = this.loans.length + 1;
    loan.title = title;
    loan.amount = amount;
    loan.isApproved = isApproved;
    loan.isVoted = isVoted;
    loan.applicationDate = applicationDate;
    loan.applicant = applicant;
    loan.percentYes = percentYes;
    loan.percentNo = percentNo;
    loan.percentUndecided = percentUndecided;
    loan.interestRate = interestRate;
    loan.friends = friends;
    loan.description = description;
    loan.period = period;
    return loan;
  }
}
