import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../manage-user/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  appUrl : string = 'http://localhost:3000/users';

  constructor(private httpClient : HttpClient) { }

  getUsers() : Observable<User[]>{
    return  this.httpClient.get<User[]>(this.appUrl);
  }

}
