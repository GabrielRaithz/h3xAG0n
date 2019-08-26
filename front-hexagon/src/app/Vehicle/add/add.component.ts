import { VehicleType } from 'src/app/Model/VehicleType';
import { Vehicle } from './../../Model/Vehicle';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  vehicle: Vehicle = new Vehicle();
  vehiclesType: VehicleType[];

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.service.getVehiclesType().subscribe(res => {
      this.vehiclesType = res;
    });
  }

  NewVehicle(vehicle: Vehicle) {
    if ( vehicle.vehicle_type && vehicle.plate && vehicle.name ) {
      this.service.newVehicle(vehicle).
      subscribe(res => {
        alert('Novo veículo inserido');
        this.router.navigate(['listVehicle']);
      });
    }
  }


}
