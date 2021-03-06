import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  u_name:any;

  ngOnInit(): void {
    this.u_name=this.auth.getName().split(" ")[0];
  }

}
