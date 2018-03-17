import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import {
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CreateLoanComponent } from './create-loan/create-loan.component';
import { AllLoansComponent } from './all-loans/all-loans.component';
import { VoteLoanComponent } from './vote-loan/vote-loan.component';

import { Loan } from './loan';

import { LoansService } from './loans.service';

const appRoutes: Routes = [
  { path: 'create', component: CreateLoanComponent },
  { path: 'vote', component: VoteLoanComponent},
  { path: '**', component: AllLoansComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateLoanComponent,
    AllLoansComponent,
    VoteLoanComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [LoansService],
  bootstrap: [AppComponent]
})



export class AppModule { }
