import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { OwnersComponent } from './owners/owners.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owners/owner/owner.component';
import { EditOwnerComponent } from './owners/edit-owner/edit-owner.component';

const appRoutes: Routes = [
  {path: 'owners', component: OwnersComponent},
  {path: 'owners/:id', component: OwnerComponent},
  {path: 'owners/:id/edit', component: EditOwnerComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'details', component: DetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    OwnersComponent,
    DetailsComponent,
    OwnerComponent,
    EditOwnerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) //musim importovat společne s Routes co je nahoře
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
