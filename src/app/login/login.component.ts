import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  username = '';
  password = '';

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

}
