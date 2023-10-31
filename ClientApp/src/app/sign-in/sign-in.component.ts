import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SignInRequest } from '../sign-in-request.model';
import { User } from '../user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  ErrorMessage: string = "";
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  SignIn(form: NgForm) {


    this.auth.signIn(new SignInRequest(form.value["Email"], form.value["Password"])).subscribe(
      (result) => { this.ErrorMessage = ""; this.auth.isAuthenticated = true; this.auth.userSubject.next(result); this.router.navigate(["/"]); },
      error => { this.ErrorMessage = "Email and Password do not match an account" }
      )

  }

}
