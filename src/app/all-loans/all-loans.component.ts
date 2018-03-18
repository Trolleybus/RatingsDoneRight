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

  public getFormattedAmount(amount: number): string {
    return amount.toLocaleString('de-CH');
  }

  public getFormattedDate(date: Date): string {
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  }

  public constructPieChart(loan: Loan ): any {
    return {
      chartType: 'corechart',
      dataTable: [
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
      ],
      options: {'title': 'Tasks'},
    };
  }

  pieChartData = {
    chartType: 'PieChart',
    dataTable: [
      ['Vote', 'Percentage'],
      ['Yes', 11],
      ['No', 2],
      ['Undecidet', 2]
    ]
  };


}
