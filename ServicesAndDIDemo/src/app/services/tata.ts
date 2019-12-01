import { IVehicle } from './iVehicle';

export class Tata extends IVehicle{
    public name : string = 'TATA';
    avgPriceRange(): string {
        return "100000 to 2000000";
    }
    
}