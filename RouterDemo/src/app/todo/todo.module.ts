import { NgModule } from '@angular/core';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoEntryComponent } from './todo-entry/todo-entry.component';
import { AuthGuard } from '../auth/auth.guard';
import { TodoRoutingModule } from './todo.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations : [
        TodosComponent,
        TodoDetailComponent,
        TodoEntryComponent
    ],
    imports : [
        CommonModule,
        TodoRoutingModule
    ],
    providers : [
        
    ]
})
export class TodoModule {
    constructor(){
        console.log("Todo Module Loaded...");
    }
}