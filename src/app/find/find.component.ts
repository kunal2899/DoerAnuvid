import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {

  constructor(private db:DatabaseService) { }
  searchResults

  open() {
    $('.container').addClass('blur');
    $('.results').addClass('blur');
    $('.card-main').addClass('active');
  }
  searchForm=new FormGroup({
    query:new FormControl(""),
    city:new FormControl(""),
    category:new FormControl(""),
  })
  ngOnInit(): void {
    $('.card-main .close').on('click', function () {
      $('.container').removeClass('blur');
      $('.results').removeClass('blur');
      $('.card-main').removeClass('active');
    })
    }
searchResult(){
  alert("called");
      let params={
        "query":this.searchForm.get("query").value,
        "category":this.searchForm.get("category").value,
        "city":this.searchForm.get("city").value
      }
    this.db.getSearchResult(params).subscribe((data:any)=>{
      this.searchResults=data;  
    });
    }
}
