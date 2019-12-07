import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';


const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'aboutus' , component : AboutusComponent},
  {path : 'contactus' , component : ContactusComponent},
  {path : 'managework' , component : TodosComponent,
    children : [
      {
        path : 'detail/:id' , component : TodoDetailComponent
      }
    ]
  },
  {path : 'workdetail/:id' , component : TodoDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
