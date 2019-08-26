import { VehicleType } from './VehicleType';

export class Vehicle {
    id: number;
    plate: string;
    name: string;
    descr: string;
    vehicle_type: VehicleType = new VehicleType();

    constructor() {
    }


}

