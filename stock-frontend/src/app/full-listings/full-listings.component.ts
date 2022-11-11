import { Component, OnInit, Input } from '@angular/core';
import { stockListingArray } from 'src/dummy-data/listings';
import { stockListing } from '../types';
@Component({
  selector: 'app-full-listings',
  templateUrl: './full-listings.component.html',
  styleUrls: ['./full-listings.component.scss']
})
export class FullListingsComponent implements OnInit {
  stockListings: stockListing[];
  constructor() { }

  ngOnInit(): void {
    this.stockListings = stockListingArray;
  }
  extendData(): void {
    
  }
  /**
   * 
   * @returns the profit you would have made since the stock has been reommended
   */

  calcEstimatedProfit(): number {
    
    return 3;
  }
}
