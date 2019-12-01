import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { LoggingService } from './services/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    VehicleDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
