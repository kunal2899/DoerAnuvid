import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, mapTo, tap } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  url=environment.URL;
  constructor(private http:HttpClient,private auth:AuthenticationService) { }

  registerUser(body){
   return this.http.post(`${this.url}/register/`,body).pipe(
      tap((data:any)=>{
        console.log(data);
        if(data.success==1)
        this.auth.doUserLogin(data.token,data.username,data.first_name,data.last_name);
      }),
      catchError((err:any)=>{
        console.log(err);
        throw err
      })
    )
  }

}
