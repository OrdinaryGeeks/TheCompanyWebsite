import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserDTO } from '../user-dto.model';
import { User } from '../user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  ErrorMessages: string[] = [];
  constructor(private auth: AuthService, private router: Router) {

    this.ErrorMessages = [];
}

  ngOnInit(): void {
  }

  submit(form: NgForm) {

    let userDTO : UserDTO  = new User(form.value["PhoneNumber"], form.value["Email"], form.value["UserName"], form.value["Password"]);
    this.auth.postUser(userDTO).subscribe(p => { this.router.navigate(["/"]); }, 
      error => { this.ErrorMessages = error.error })




    

  }

}
