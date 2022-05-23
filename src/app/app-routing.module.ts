import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { CarsComponent } from "./cars/cars.component";
import { DetailsComponent } from "./details/details.component";
import { EditOwnerComponent } from "./owners/edit-owner/edit-owner.component";
import { OwnerComponent } from "./owners/owner/owner.component";
import { OwnersComponent } from "./owners/owners.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
    {path: 'owners', component: OwnersComponent, children: [
      {path: ':id', component: OwnerComponent},
      {path: ':id/edit', component: EditOwnerComponent}
    ]},
    {path: 'cars', component: CarsComponent},
    {path: 'details', component: DetailsComponent},
    {path: '**', component: PageNotFoundComponent}  //tohle uplně na konec aby to nechytalo npř /owners /cars.. etc
  ]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}