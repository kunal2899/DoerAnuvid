import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { pathToFileURL } from 'url';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  constructor(private router:Router) { }
  
  ngOnInit(): void {
    var path = window.location.href.split("/");
    let p = "/dashboard/"+path[path.length-1];
      $('.nav-links ul').children('li').each(function(){
        let x = $(this).children('a');
        if($(x).attr('href') == p){
          $(x).addClass('active').parent('li').siblings().children('a').removeClass('active');
        }
      })
      $('.nav-links ul').children('li').each(function(){
        let x = $(this).children('a');
        $(x).on('click',function(){
          $(x).addClass('active').parent('li').siblings().children('a').removeClass('active');
        })
      })
  }
  logoutUser(){
    this.router.navigate(['/login']);
  }
}
