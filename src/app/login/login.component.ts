import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { AuthenticationService } from '../services/authentication.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private db:DatabaseService,private auth:AuthenticationService) { }

  loginForm=new FormGroup({
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
  })

  registerForm=new FormGroup({
    fname:new FormControl("",Validators.required),
    lname:new FormControl("",Validators.required),
    mobile1:new FormControl("",Validators.required),
    mobile2:new FormControl(""),
    email:new FormControl("",Validators.required),
    address1:new FormControl("",Validators.required),
    address2:new FormControl(""),
    city:new FormControl("",Validators.required),
    state:new FormControl("",Validators.required),
    pincode:new FormControl("",Validators.required),
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
  })

  ngOnInit(): void {
    $('.containers #show-reg').on('click', function () {
      $('.login').css('display', 'none');
      $('.reg').fadeIn(500);
    });
    $('.containers #show-log').on('click', function () {
      $('.reg').css('display', 'none');
      $('.login').fadeIn(500);
    });
    $('.pass input').on('focus', function () {
      $(this).css('margin-left','15px');
      $('#eye').show();
    });
    $('.pass input').on('blur', function () {
      $('#eye').hide();
      $(this).css('margin-left','0px');
    });
    $('#eye').on('mouseover',function(){
      $('.pass input').attr('type','text');
    });
    $('#eye').on('mouseout',function(){
      $('.pass input').attr('type','password');
    });
  }
  loginUser(){
    let body={
      "username":this.loginForm.get('username').value,
      "password":this.loginForm.get('password').value
    }
    this.auth.loginUser(body).subscribe(data=>{
      // console.log(data)
      alert("Logged In");
    })
  }
  registerUser(){
    alert("working");
    let body=new Array
    body.push({
      "username": this.registerForm.get("username").value,
      "email": this.registerForm.get('email').value,
      "password": this.registerForm.get('password').value,
      "first_name": this.registerForm.get('fname').value,
      "last_name": this.registerForm.get('lname').value
    })
    body.push({
      "address1":this.registerForm.get('address1').value,
      "address2":this.registerForm.get('address2').value,
      "city":this.registerForm.get('city').value,
      "pincode":this.registerForm.get('pincode').value,
      "state":this.registerForm.get('state').value,
      "mobile1":this.registerForm.get('mobile1').value,
      "mobile2":this.registerForm.get('mobile2').value
    })
    this.db.registerUser(body).subscribe(data=>{
      alert("user registered Successfully");
    })
  }
}
