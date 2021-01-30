import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
//const baseUrl = 'http://localhost:8080/api/';
export class WelcomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
