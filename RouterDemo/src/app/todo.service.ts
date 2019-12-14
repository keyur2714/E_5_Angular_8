import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo/todos/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url : string = 'http://localhost:3000/todos';

  constructor(private httpCLient : HttpClient) { }

  getTodos() : Observable<Todo[]>{
    return this.httpCLient.get<Todo[]>(this.url);
  }

  getTodoById(id : number) : Observable<Todo> {
    return this.httpCLient.get<Todo>(this.url+"/"+id);
  }
}
