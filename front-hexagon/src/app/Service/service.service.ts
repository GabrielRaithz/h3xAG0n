import { Vehicle } from './../Model/Vehicle';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleType } from '../Model/VehicleType';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  UrlVehicle = 'http://ec2-18-231-109-21.sa-east-1.compute.amazonaws.com:8080/vehicle/';
  UrlVehicleType = 'http://ec2-18-231-109-21.sa-east-1.compute.amazonaws.com:8080/vehicle_type/';

  getVehicles() {
    return this.http.get<Vehicle[]>(this.UrlVehicle);
  }

  newVehicle(vehicle: Vehicle) {
    let postData = {
      name: vehicle.name,
      descr: vehicle.descr,
      plate: vehicle.plate,
      vehicle_type: {id: vehicle.vehicle_type.id }
    };
    if ( postData.name && postData.plate && postData.vehicle_type.id ){
      return this.http.post(this.UrlVehicle, postData);
    }
  }

  getVehiclesById(id: number) {
    return this.http.get<Vehicle>(this.UrlVehicle + '/' + id);
  }

  updateVehicle(vehicle: Vehicle) {
    return this.http.put<Vehicle>(this.UrlVehicle + '/' + vehicle.id, vehicle);
  }

  deleteVehicle(vehicle: Vehicle) {
    return this.http.delete<Vehicle>(this.UrlVehicle + '/' + vehicle.id);
  }

  getVehiclesType() {
    return this.http.get<VehicleType[]>(this.UrlVehicleType);
  }

  newVehicleType(vehicleType: VehicleType) {
    if (vehicleType.name) {
      return this.http.post(this.UrlVehicleType, vehicleType);
    }
  }

  getVehiclesTypeById(id: number) {
    return this.http.get<VehicleType>(this.UrlVehicleType + '/' + id);
  }

  updateVehicleType(vehicleType: VehicleType) {
    return this.http.put<VehicleType>(this.UrlVehicleType + '/' + vehicleType.id, vehicleType);
  }

  deleteVehicleType(vehicleType: VehicleType) {
    return this.http.delete<VehicleType>(this.UrlVehicleType + '/' + vehicleType.id);
  }

}
