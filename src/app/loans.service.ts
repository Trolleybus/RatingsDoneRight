import { Injectable } from '@angular/core';
import { Loan } from './loan';

@Injectable()
export class LoansService {
  loans: Loan[] = [];
  
  constructor() {
    this.loans.push(this.createLoan('Reg Dogs Company', 10000));
    this.loans.push(this.createLoan('ABB', 90));
    this.loans.push(this.createLoan('Balois', 90));
    this.loans.push(this.createLoan('SIX', 80));
    this.loans.push(this.createLoan('Swisscom', 98));
    this.loans.push(this.createLoan('Swiss', 89));
  }

  public getLoanById(id: number): Loan {
    return this.loans.find(loan => loan.id === id);
  }

  public getAllLoans(): Loan[] {
    return this.loans;
  }

  private createLoan( title: string, amount: number): Loan {
    let loan = new Loan();
    loan.id = this.loans.length + 1;
    loan.title = title;
    loan.amount = amount;
    return loan;
  }
}
