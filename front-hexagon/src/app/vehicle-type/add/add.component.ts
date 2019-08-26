import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { VehicleType } from 'src/app/Model/VehicleType';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddTypeVehicleComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService) { }

  vehicleType: VehicleType = new VehicleType();

  ngOnInit() {
  }

  NewVehicleType(vehicleType: VehicleType) {
    if ( vehicleType.name ) {
      this.service.newVehicleType(vehicleType).
      subscribe(res => {
        alert('Novo tipo de veículo inserido');
        this.router.navigate(['listVehicleType']);
      });
    }
  }


}
