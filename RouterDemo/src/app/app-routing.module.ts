import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules, NoPreloading } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth/auth.guard';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';


const routes: Routes = [
  {path : 'home' , component : HomeComponent },
  {path : 'aboutus' , component : AboutusComponent},
  {path : 'contactus' , component : ContactusComponent},  
  {path : 'signin' , component : LoginComponent},
  {path: 'managework', loadChildren: () => import('./todo/todo.module').then(a => a.TodoModule),canActivate : [AuthGuard]},  
  {path : 'signout' , component : LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("AppRoutingModule Loaded....");
  }
}
