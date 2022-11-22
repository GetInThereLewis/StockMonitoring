import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrapnav',
  templateUrl: './bootstrapnav.component.html',
  
})
export class BootstrapnavComponent implements OnInit {
  collapsed = true;
  collapsedStyle = false;
  constructor() { }
  
  ngOnInit(): void {

  }

  toggleNav(): void {
    this.collapsed = !this.collapsed;
    this.collapsedStyle = !this.collapsedStyle;
    console.debug("toggled nav");
  }
}
