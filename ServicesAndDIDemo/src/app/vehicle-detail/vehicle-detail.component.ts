import { Component, OnInit } from '@angular/core';
import { IVehicle } from '../services/iVehicle';
import { Honda } from '../services/honda';
import { Maruti } from '../services/maruti';
import { Tata } from '../services/tata';
import { LoggingService } from '../services/logging.service';
const dependencyObjects = {provide : IVehicle , useClass : Maruti};

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css'],
  providers : [
    dependencyObjects,
  //  LoggingService  
  ]
})
export class VehicleDetailComponent implements OnInit {
  
  vehicleName : string = '';
  vehicleAvgPrice : string = '';

  //iVehicle : IVehicle = new Tata();

  constructor(private iVehicle : IVehicle) { }

  ngOnInit() {
    this.vehicleName = this.iVehicle.name;
    this.vehicleAvgPrice = this.iVehicle.avgPriceRange();
  }

}
