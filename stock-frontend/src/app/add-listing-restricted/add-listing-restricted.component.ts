import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { stockListing } from '../types';
@Component({
  selector: 'app-add-listing-restricted',
  templateUrl: './add-listing-restricted.component.html',
  styleUrls: ['./add-listing-restricted.component.scss']
})
export class AddListingRestrictedComponent implements OnInit {
  stockName: string;
  stockISIN: string;
  stockRecDate: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
