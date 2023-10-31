import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  userName: string;
  isAuthenticated: boolean = false;
  constructor(private auth: AuthService) {
    this.userName = "";
    this.auth.userSubject.subscribe(p => {  this.userName = p.userName; this.isAuthenticated = true });
    
  }
  collapse() {
    this.isExpanded = false;
  }
  SignOut() {
    this.isAuthenticated = false;
    this.auth.isAuthenticated = false;
    this.auth.signOutSubject.next(true);
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  onDestroy() {

    this.auth.userSubject.unsubscribe();
  }
}
