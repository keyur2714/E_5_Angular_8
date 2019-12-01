import { IVehicle } from './iVehicle';

export class Honda extends IVehicle{
    public name : string = 'Honda';
    
    avgPriceRange(): string {
        return "500000 to 1500000";
    }    
}