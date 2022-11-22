import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  
})
export class InfoBoxComponent implements OnInit {
  input: boolean;
  stockCard: boolean;
  perfomance: string;
  @Input() styles;
  @Input() stockCardBool;
  @Input() currentValue;
  @Input() isin;
  @Input() content;
 
  
  constructor() { 
    this.perfomance = this.input ? "red" : "green";
    this.stockCard = this.stockCardBool;
  }

  ngOnInit(): void {
  }

}
