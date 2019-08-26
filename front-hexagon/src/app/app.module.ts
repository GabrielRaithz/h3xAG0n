import { AddTypeVehicleComponent } from './vehicle-type/add/add.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Vehicle/list/list.component';
import { AddComponent } from './Vehicle/add/add.component';
import { EditComponent } from './Vehicle/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { ListTypeVehicleComponent } from './vehicle-type/list/list.component';
import { EditTypeVehicleComponent } from './vehicle-type/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    AddTypeVehicleComponent,
    ListTypeVehicleComponent,
    EditTypeVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
