import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path : 'manageusers' , component : ManageUserComponent},
  {path : 'dashboard' , component : DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
