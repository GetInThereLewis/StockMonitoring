import { Component, OnInit, Input } from '@angular/core';
import { stockListingArray } from 'src/dummy-data/listings';
import { stockListing } from '../types';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-full-listings',
  templateUrl: './full-listings.component.html',
  styleUrls: ['./full-listings.component.scss']
})
export class FullListingsComponent implements OnInit {
  stockListings: stockListing[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.stockListings = stockListingArray;
  }
  
  /**
   * 
   * @returns the profit you would have made since the stock has been reommended
   */

  calcEstimatedProfit(): number {
    
    return 3;
  }
}
