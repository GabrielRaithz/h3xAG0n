import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-H3x@G0n';

  constructor(private router: Router){}

  ListVehicle() {
  this.router.navigate(['listVehicle']);
  }

  NewVehicle() {
  this.router.navigate(['addVehicle']);
  }

  ListVehicleType() {
    this.router.navigate(['listVehicleType']);
  }

  NewVehicleType() {
    this.router.navigate(['addVehicleType']);
  }
}
