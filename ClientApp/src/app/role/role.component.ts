import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Role } from '../role.model';
import { User } from '../user.model';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  isAuthenticated: boolean = false;
  user: User;
  isSuperAdmin: boolean = false;
  roles: Role[];
  superAdmin: boolean = false;
  constructor(private auth: AuthService) {

    this.user = new User("", "", "", "");
    this.roles = [];
    auth.userSubject.subscribe((user) => {
      this.isAuthenticated = true; this.user = user;

      auth.getRoles(this.user.id).subscribe((roles) => {
        this.roles = roles;

        if (this.roles.find((x) => { x.roleName == "SuperAdmin" }) != undefined)
          this.superAdmin = true;
      })
    })

  }

  onSubmit(form: NgForm) {



  }
  ngOnInit(): void {
  }

}
