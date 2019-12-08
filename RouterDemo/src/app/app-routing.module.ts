import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {path : 'home' , component : HomeComponent },
  {path : 'aboutus' , component : AboutusComponent},
  {path : 'contactus' , component : ContactusComponent},
  {path : 'managework' , component : TodosComponent, canActivate : [AuthGuard],
    canActivateChild : [AuthGuard],  
    children : [
      {
        path : 'detail/:id' , component : TodoDetailComponent
      }
    ]
  },
  {path : 'workdetail/:id' , component : TodoDetailComponent},
  {path : 'signin' , component : LoginComponent},
  {path : 'signout' , component : LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
