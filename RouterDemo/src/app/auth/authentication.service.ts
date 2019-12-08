import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn : boolean = false;
  defaultSuccessPage : string = 'home';

  appUrl : string = 'http://localhost:3000/users';

  constructor(private httpClient : HttpClient) { }

  authenticate(userName : string,password : string) : Observable<User>{
    return this.httpClient.get<User[]>(this.appUrl).pipe(
      map(users  => {
        for(let user of users){
          if(user.userName === userName && user.password === password){
            this.isLoggedIn = true;
            return user;
          }
        }
        return null;
      })
    )
  }
}
