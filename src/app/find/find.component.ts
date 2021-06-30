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

  constructor(private db: DatabaseService) { }
  searchResults
  searching = false
  loaded = false

  cardLoaded = false

  open() {
    this.cardLoaded = true;
    //setTimeOut is written to check spinner on delay of coming data replace it by data calling function
    // cardLoaded boolean value is used to trigger spinner
    setTimeout(() => {
      this.cardLoaded = false;
      $('.container').addClass('blur');
      $('.results').addClass('blur');
      $('.card-main').addClass('active');
    }, 2000)
  }
  searchForm = new FormGroup({
    query: new FormControl(""),
    city: new FormControl(""),
    category: new FormControl("service"),
  })
  ngOnInit(): void {
    $('.card-main .close').on('click', function () {
      $('.container').removeClass('blur');
      $('.results').removeClass('blur');
      $('.card-main').removeClass('active');
    })
  }
  searchResult() {
    this.searching = true
    let params = {
      "query": this.searchForm.get("query").value,
      "category": this.searchForm.get("category").value,
      "city": this.searchForm.get("city").value
    }
    this.db.getSearchResult(params).subscribe((data: any) => {
      this.searching = false
      this.loaded = true;
      this.searchResults = data;
    });
  }
}
