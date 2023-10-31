import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isAuthenticated: boolean;
  user: User;

  constructor(private auth: AuthService) {

    this.isAuthenticated = this.auth.isAuthenticated;
    this.user = new User("", "", "", "");
    this.auth.userSubject.subscribe((user: User) => { this.isAuthenticated = true; this.user = user; });
    this.auth.signOutSubject.subscribe(() => { this.isAuthenticated = false; this.user = new User("", "", "", ""); })
  }

  onDestroy() {

    this.auth.userSubject.unsubscribe();
  }

}
