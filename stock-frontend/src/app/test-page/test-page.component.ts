import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Chart } from "chart.js/auto"

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  chart;
  ctx;

  xData;
  yData;
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
    this.http.get("http://localhost:8000/stock_price_data/aapl")
    .subscribe(data => {

      // Convert it to readable format
      this.stockData = Object.entries(data).map(entry => entry[1]);
      
      console.log(this.stockData);
      
      // Map time to x and price to y axis data
      this.xData = this.stockData.map(row => row["date_time"])
      this.yData = this.stockData.map(row => row["price"])
      
      this.renderChart()
      this.ctx = document.getElementById('canvas');
    })
  }


  ngOnInit(): void {
  }

  public renderChart(){
    this.chart = new Chart("canvas", {
      type: "line",
      data : {
        labels: this.xData,
        datasets: [{
          label: "Prices",
          data: this.yData,
          backgroundColor: "red",
          borderColor: "red",
        }
        ]
      }
    })
  }

  public getStockData(){
    return this.stockData;
  }

}
