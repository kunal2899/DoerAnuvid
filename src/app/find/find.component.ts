import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {

  constructor() { }
  searchResults = true

  open() {
    $('.container').addClass('blur');
    $('.results').addClass('blur');
    $('.card-main').addClass('active');
  }

  ngOnInit(): void {
    $('.card-main .close').on('click', function () {
      $('.container').removeClass('blur');
      $('.results').removeClass('blur');
      $('.card-main').removeClass('active');
    })
  }

}
