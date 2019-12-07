import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from './todo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers : [TodoService]
})
export class TodosComponent implements OnInit {

  todosList : Todo[] = [];

  constructor(private todoService : TodoService,private router : Router) { }

  ngOnInit() {
    this.getAllTodos();
  }

  getAllTodos() : void {
    this.todoService.getTodos().subscribe(
      (data : Todo[])=>{
        this.todosList = data;
      }      
    )
  }

  edit(id : number) : void {    
    this.router.navigate(['workdetail',id]);
  }

}
