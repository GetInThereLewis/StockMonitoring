import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Chart } from "chart.js/auto"

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  chart;
  xData;
  yData;
  stock_symbols = [];
  stock_data;
  dataReceived = false;

  constructor(private http:HttpClient) {
    // Get all symbols
    this.http.get("http://localhost:8000/all_stock_symbols")
    .subscribe(data => {
      for(let i = 0; i < Object.entries(data).length; i++){
        this.stock_symbols.push(Object.entries(data)[i][1]["ticker_symbol"]);
      }
      
      console.log(this.stock_symbols);
    
    this.stock_symbols.forEach(function(symbol){
      
      http.get("http://localhost:8000/stock_price_data/" + symbol)
      .subscribe(data => {
        // Convert it to readable format
        let stock_data = Object.entries(data).map(entry => entry[1]);
        
        console.log(stock_data);
        
        // Map time to x and price to y axis data
        let xData = stock_data.map(row => row["date_time"])
        let yData = stock_data.map(row => row["price"])
        
        this.renderChart(xData, yData, symbol)
    })}.bind(this))
  this.dataReceived = true});

  }

  ngOnInit(): void {
  }

  public renderChart(xData, yData, symbol){
    this.chart = new Chart("canvas" + symbol, {
      type: "line",
      data : {
        labels: xData,
        datasets: [{
          label: symbol,
          data: yData,
          backgroundColor: "red",
          borderColor: "red",
        }
        ]
      }
    })
  }
}
