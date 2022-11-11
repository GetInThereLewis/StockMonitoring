import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { FullListingsComponent } from './full-listings/full-listings.component';
import { AddListingRestrictedComponent } from './add-listing-restricted/add-listing-restricted.component';
const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'}, 
  {path: 'home', component: LandingPageComponent}, 
  {path: 'all-listings', component: FullListingsComponent},
  {path: 'admin-panel/add', component: AddListingRestrictedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
