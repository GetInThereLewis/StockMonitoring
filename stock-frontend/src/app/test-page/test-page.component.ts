import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Chart } from "chart.js"

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  chart;
  ctx;
  xData = [1,2,3,4];
  yData = [51, 20, 76, 100];
  dataExample = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];
  stockData;
  dataReceived = false;
  constructor(private http:HttpClient) {
    this.http.get<Observable<any>>("http://localhost:8000/all_stock_symbols/")
    .subscribe(data => {
      this.stockData = data;
      console.log(this.stockData);
      
      this.ctx = document.getElementById('canvas');
/*       this.chart = new Chart(this.ctx, {
        type:"bar",
        data: {
          labels: this.dataExample.map(row => row.year),
          datasets: [
            {
              label: "Test bla",
              data: this.dataExample.map(row => row.count),
              borderColor: "3cba9f",
              
            },
          ]
        }
      }
      ) */
    })
  }


  ngOnInit(): void {
  }

  public getStockData(){
    return this.stockData;
  }

}
