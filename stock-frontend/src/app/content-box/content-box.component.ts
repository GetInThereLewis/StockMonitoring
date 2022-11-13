import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.scss']
})
export class ContentBoxComponent implements OnInit {

  displayTxt: string;
  displayImg: string;
  @Input() styles;
  @Input() contentImg;
  @Input() contentTxt;
  constructor() { }

  ngOnInit(): void {
    this.displayImg = this.contentImg;
    this.displayTxt = this.contentTxt;
  }

}
