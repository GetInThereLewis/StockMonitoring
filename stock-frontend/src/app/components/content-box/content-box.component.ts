import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.scss']
})
export class ContentBoxComponent implements OnInit {

  
  @Input() styles;
  @Input() imgSub = "";
  @Input() contentImg = "";
  @Input() contentTxt = "";
  constructor() { }

  ngOnInit(): void {
    
  }

}
