import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  stockData;
  dataReceived = false;
  constructor(private http:HttpClient) {
    this.getJSON().subscribe(data => {
      this.stockData = data;
      this.dataReceived = true;
   });
 
  }

   public getJSON(): Observable<any> {
    return this.http.get("http://localhost:8000/stockdata/");
   }

  ngOnInit(): void {
  }

  public getStockData(){
    return this.stockData;
  }

}
