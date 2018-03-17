import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import {MatButtonModule, MatCheckboxModule, MatExpansionModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SingleRatingComponent } from './single-rating/single-rating.component';
import { AllRatingsComponent } from './all-ratings/all-ratings.component';

import { Rating } from './rating';

import { RatingsService } from './ratings.service'

const appRoutes: Routes = [
  { path: ':id', component: SingleRatingComponent },
  { path: '**', component: AllRatingsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SingleRatingComponent,
    AllRatingsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [RatingsService],
  bootstrap: [AppComponent]
})



export class AppModule { }
