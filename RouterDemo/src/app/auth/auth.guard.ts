import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { User } from './user.model';


@Injectable()
export class AuthGuard implements CanActivate , CanActivateChild{
    
    
    constructor(private authentiationService : AuthenticationService,private router : Router){}

    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {        
        if(this.authentiationService.isLoggedIn){            
            return true;
        }
        this.authentiationService.defaultSuccessPage = state.url;
        this.router.navigate(['signin']);
        return false;        
    }

    canActivateChild(childRoute: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        let loggedInUser : User = JSON.parse(sessionStorage.getItem('user'));
        //alert(loggedInUser);
        if(loggedInUser.role === 'ADMIN'){
            return true;
        }
        alert("Sorry but you don't have access to this Link...!");
        return false;        
    }

}