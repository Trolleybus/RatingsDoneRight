import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatChipsModule,
  MatGridListModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CreateLoanComponent } from './create-loan/create-loan.component';
import { AllLoansComponent } from './all-loans/all-loans.component';
import { VoteLoanComponent } from './vote-loan/vote-loan.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
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
    FormsModule,
    Ng2GoogleChartsModule,
    HttpModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatGridListModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [LoansService],
  bootstrap: [AppComponent]
})



export class AppModule { }
