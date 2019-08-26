import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { VehicleType } from 'src/app/Model/VehicleType';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditTypeVehicleComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService) { }

  vehicleType: VehicleType;

  ngOnInit() {
    this.Edit();
  }

  Edit(){
    let id = localStorage.getItem('id');
    this.service.getVehiclesTypeById(+id)
    .subscribe(res => {
      this.vehicleType = res;
    });
  }

  Update(vehicleType: VehicleType){
    if ( vehicleType.name ) {
      this.service.updateVehicleType(vehicleType)
      .subscribe(res => {
        this.vehicleType = res;
        alert('Tipo de veículo atualizado');
        this.router.navigate(['listVehicleType']);
      });
    }
  }

}
