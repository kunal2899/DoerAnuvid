import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
url=environment.URL
  constructor(private http:HttpClient) { }

  loginUser(usercred){
    let header=new HttpHeaders({
      "ACCESS-CONTROL-ALLOW-ORIGIN":"*",
      "Access-Control-Allow-Methods":"GET, POST, OPTIONS, DELETE, PUT",
      'Accept': 'application/json',
      'Content-Type':'application/json',
    })
   
    return this.http.post(`${this.url}/login/`,usercred,{headers:header}).pipe(
      tap((data:any)=>{
        console.log(data);
        if(data.success==1)
        this.doUserLogin(data.token,data.username,data.first_name,data.last_name);
      }),
      catchError((err:any)=>{
        console.log(err);
        throw err
      })
    )
  }
  setToken(token){
    sessionStorage.setItem("TOKEN",token)
  }
  getToken(){
    return sessionStorage.getItem("TOKEN")
  }
  getUsername(){
    return sessionStorage.getItem("USERNAME");
  }
  setUsername(username){
    sessionStorage.setItem("USERNAME",username);
  }
  setName(fname,lname){
    sessionStorage.setItem("NAME",fname+" "+lname);
  }
  getName(){
    sessionStorage.getItem("NAME");
  }
  isUserLoggedIn(){
    return sessionStorage.getItem("TOKEN")!=undefined ||  sessionStorage.getItem("TOKEN")!=null
  }

  doUserLogin(token,username,fname,lname){
    this.setToken(token);
    this.setName(fname,lname);
    this.setUsername(username);
  }
}
