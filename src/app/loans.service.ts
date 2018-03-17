import { Injectable } from '@angular/core';
import { Loan } from './loan';

@Injectable()
export class LoansService {
  loans: Loan[] = [];
  
  
  constructor() {
    this.loans.push(this.createLoan('Reg Dogs Company', 10000, false, false));
    this.loans.push(this.createLoan('ABB', 90000, false, false));
    this.loans.push(this.createLoan('Balois', 90000, true, true));
    this.loans.push(this.createLoan('SIX', 80000, true, true));
    this.loans.push(this.createLoan('Swisscom', 98000, true, true));
    this.loans.push(this.createLoan('Swiss', 8900000, false, true));
  }

  public getLoanById(id: number): Loan {
    return this.loans.find(loan => loan.id === id);
  }

  public getAllLoans(): Loan[] {
    return this.loans;
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

  private createLoan( title: string, amount: number, isApproved, isVoted): Loan {
    let loan = new Loan();
    loan.id = this.loans.length + 1;
    loan.title = title;
    loan.amount = amount;
    loan.isApproved = isApproved;
    loan.isVoted = isVoted;
    return loan;
  }
}
