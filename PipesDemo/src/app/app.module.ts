import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomePipe } from './welcome.pipe';
import { MaskPipe } from './mask.pipe';
import { LoopPipe } from './loop.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePipe,
    MaskPipe,
    LoopPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
