import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { OwnersComponent } from './owners/owners.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { OwnerComponent } from './owners/owner/owner.component';
import { EditOwnerComponent } from './owners/edit-owner/edit-owner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    OwnersComponent,
    DetailsComponent,
    OwnerComponent,
    EditOwnerComponent,
    PageNotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
