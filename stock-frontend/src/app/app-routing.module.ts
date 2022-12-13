import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

import { FullListingsComponent } from './components/full-listings/full-listings.component';
import { AddListingRestrictedComponent } from './components/add-listing-restricted/add-listing-restricted.component';
import { TestPageComponent } from './components/charts/test-page.component';
const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'}, 
  {path: 'home', component: LandingPageComponent}, 
  {path: 'all-listings', component: FullListingsComponent},
  {path: 'admin-panel/add', component: AddListingRestrictedComponent},
  {path: 'testpage', component: TestPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
