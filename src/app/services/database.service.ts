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
        if(data.success==1 || data.ErrorDetails!=undefined)
          this.auth.doUserLogin(data.token,data.username,data.first_name,data.last_name);
        else{
          alert("User with same username Already exist")
        }
      }),
      catchError((err:any)=>{
        console.log(err);
        throw err
      })
    )
  }
  getUserDetails(){
    let header=new HttpHeaders({
      "Authorization":"Token "+this.auth.getToken()
    })
    return this.http.get(`${this.url}/profile/`,{headers:header}).pipe(
      tap((data:any)=>{
        console.log(data);
      }),
      catchError((err:any)=>{
        console.log(err);
        throw err
      })
    )
  }
  updateUserDetails(details){
    let header=new HttpHeaders({
      "Authorization":"Token "+this.auth.getToken()
    })
    return this.http.post(`${this.url}/profile/`,details,{headers:header}).pipe(
      tap((data:any)=>{
        console.log(data);
      }),
      catchError((err:any)=>{
        console.log(err);
        throw err
      })
    )
  }
  getSearchResult(params){
    let header=new HttpHeaders({
      "Authorization":"Token "+this.auth.getToken()
    })
    return this.http.post(`${this.url}/search/`,params,{headers:header}).pipe(
      tap((data:any)=>{
        console.log(data);
      }),
      catchError((err:any)=>{
        console.log(err);
        throw err
      })
    )
  }
}
