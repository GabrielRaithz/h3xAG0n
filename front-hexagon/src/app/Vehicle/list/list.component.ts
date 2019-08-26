import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/Model/Vehicle';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  vehicles: Vehicle[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getVehicles().subscribe(data => {
      this.vehicles = data;
    });
  }

  Edit(vehicle: Vehicle) {
    localStorage.setItem('id', vehicle.id.toString());
    this.router.navigate(['editVehicle']);
  }

  Delete(vehicle: Vehicle) {
    this.service.deleteVehicle(vehicle).subscribe(res => {
      this.vehicles = this.vehicles.filter(v => v !== vehicle);
      alert('Veículo retirado');
    });
  }
}
