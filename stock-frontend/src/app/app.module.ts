import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FullListingsComponent } from './components/full-listings/full-listings.component';
import { AddListingRestrictedComponent } from './components/add-listing-restricted/add-listing-restricted.component';
import { ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { ContentBoxComponent } from './components/content-box/content-box.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestPageComponent } from './components/charts/test-page.component';
import { BootstrapnavComponent } from './components/bootstrapnav/bootstrapnav.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';

@NgModule({
  declarations: [
    AppComponent,
    
    LandingPageComponent,
    FullListingsComponent,
    AddListingRestrictedComponent,
    ContentBoxComponent,
    FooterComponent,
    TestPageComponent,
    BootstrapnavComponent,
    InfoBoxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
