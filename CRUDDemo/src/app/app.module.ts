import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ManageFriendsComponent } from './manage-friends/manage-friends.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageFriendsComponent,
    ManageStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
