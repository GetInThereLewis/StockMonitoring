import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { stockListing } from '../../stockListing';
import { Router, Route } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-listing-restricted',
  templateUrl: './add-listing-restricted.component.html',
 
})
export class AddListingRestrictedComponent implements OnInit {

  form: FormGroup;


  stockName: string;
  stockISIN: string;
  stockRecDate: string;
  
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      isin: new FormControl(''),
      recommend: new FormControl('')

    });
    this.stockName = '';
  }
  onSubmit(): void {
    alert('Added a new Listing');
    
  }
}
