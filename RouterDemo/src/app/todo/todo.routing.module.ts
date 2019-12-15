import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { AuthGuard } from '../auth/auth.guard';
const routes: Routes = [
    {path: '', component : TodosComponent,
    //{path : 'managework' , component : TodosComponent, canActivate : [AuthGuard],      
    canActivateChild : [AuthGuard],
    children : [
      {
        path : 'detail/:id' , component : TodoDetailComponent,        
      },
      // {
      //   path : 'workdetail/:id' , component : TodoDetailComponent
      // }
    ]
  },
  {path : 'workdetail/:id' , component : TodoDetailComponent},
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class TodoRoutingModule {
    constructor(){
        console.log("TodoRoutingModule Loaded...");
    }
}