import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Todo } from '../todos/todo.model';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  id : number = 0;
  todo : Todo = new Todo();

  constructor(private activatedRoute : ActivatedRoute,private location : Location,private todoService : TodoService) { }

  ngOnInit() {
    //this.id = this.activatedRoute.snapshot.params.id;
    //this.activatedRoute.params.subscribe(
    this.activatedRoute.paramMap.subscribe(
      (param)=>{
        //this.id = param.id;
        this.id = parseInt(param.get('id'));
        this.todoService.getTodoById(this.id).subscribe(
          (data : Todo)=>{
            this.todo = data;
          }
        )
      }
    )
    
  }

  back() : void{
    this.location.back();
  }
}
