import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  response: Array<string>;
  state: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  requestData(): void {
    const url = 'http://localhost:8000/api';
    
    this.http.get(url).subscribe(data => 
      console.log(data))
    }
  
  sendData(): void {
    const url = 'http://localhost:8000/api/markus';
    
    this.http.post(url, {"name": "richard", "age": 800});
    console.log("send data");
      

    
  }

}
