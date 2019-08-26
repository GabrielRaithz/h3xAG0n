import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './Vehicle/list/list.component';
import { AddComponent } from './Vehicle/add/add.component';
import { EditComponent } from './Vehicle/edit/edit.component';
import { ListTypeVehicleComponent } from './vehicle-type/list/list.component';
import { AddTypeVehicleComponent } from './vehicle-type/add/add.component';
import { EditTypeVehicleComponent } from './vehicle-type/edit/edit.component';


const routes: Routes = [
  { path: 'listVehicle', component: ListComponent},
  { path: 'addVehicle', component: AddComponent},
  { path: 'editVehicle', component: EditComponent},
  { path: 'listVehicleType', component: ListTypeVehicleComponent},
  { path: 'editVehicleType', component: EditTypeVehicleComponent},
  { path: 'addVehicleType', component: AddTypeVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
