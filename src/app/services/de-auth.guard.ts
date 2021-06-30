import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DeAuthGuard implements CanDeactivate<AuthenticationService> {
  constructor(private auth:AuthenticationService,private router:Router){}
  canDeactivate():boolean{
    if(confirm("Are you sure you want to Logout ?"))
    {
      this.auth.logoutUser().subscribe(data=>{
      });
      return true;
    } 
    else return false;
  }
  
}
