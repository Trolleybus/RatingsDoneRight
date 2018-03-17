import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SingleRatingComponent } from './single-rating/single-rating.component';
import { AllRatingsComponent } from './all-ratings/all-ratings.component';

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
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
