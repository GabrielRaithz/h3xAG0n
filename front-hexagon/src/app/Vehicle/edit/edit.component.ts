import { Vehicle } from './../../Model/Vehicle';
import { ServiceService } from './../../Service/service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleType } from 'src/app/Model/VehicleType';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService) { }

  vehicle: Vehicle = new Vehicle();
  vehiclesType: VehicleType[];

  ngOnInit() {
    this.service.getVehiclesType().subscribe(res => {
      this.vehiclesType = res;
    });
    this.Edit();
  }

  Edit() {
    const id = localStorage.getItem('id');
    this.service.getVehiclesById(+id)
    .subscribe(res => {
      this.vehicle = res;
    });
  }

  Update(vehicle: Vehicle) {
    if ( vehicle.vehicle_type && vehicle.plate && vehicle.name ) {
      this.service.updateVehicle(vehicle)
      .subscribe(res => {
        this.vehicle = res;
        alert('veículo atualizado');
        this.router.navigate(['listVehicle']);
      });
    }
  }

}
