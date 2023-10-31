import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twlsidebar',
  templateUrl: './twlsidebar.component.html',
  styleUrls: ['./twlsidebar.component.css']
})
export class TWLSidebarComponent implements OnInit {
  showSideBar: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  sideBarClasses() {
    if (this.showSideBar) {

      return {
        'sideNavigation': true
      }
    }
    else
      return {
        'sideNavigation': true
      }
  }
  toggleSideBarOnClick() {
    if (this.showSideBar)
      this.showSideBar = false;
    else
      this.showSideBar = true;
  }
}
