import { IVehicle } from './iVehicle';
import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
@Injectable()
export class Maruti extends IVehicle{

    constructor(private loggingService:LoggingService){super()}

    public name : string = 'Maruti';
    

    avgPriceRange(): string {
        this.loggingService.logInfo("Inseide Maruti Class...");
        return "200000 to 1200000";
    }
    
}