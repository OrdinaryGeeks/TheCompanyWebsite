import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Role } from './role.model';
import { SignInRequest } from './sign-in-request.model';
import { UserDTO } from './user-dto.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;

  userSubject: Subject<User>;
  signOutSubject: Subject<boolean>;


  constructor(private http: HttpClient) {
    this.userSubject =new Subject<User>();
    this.signOutSubject = new Subject<boolean>();
    

  }

  postUser(userDTO:UserDTO){


    //return this.http.post("https://localhost:7007/api/users ", user);
    return this.http.post("https://www.alectosinterdimensionalblog.com/api/users/", userDTO);
  }

  getUsers(){

    return this.http.get("https://www.alectosinterdimensionalblog.com/api/users");
  }

  signIn(signInRequest: SignInRequest):Observable<User> {
   
    return this.http.post<User>("https://www.alectosinterdimensionalblog.com/api/auth/signin", signInRequest);
  }

  getRoles(userId: number): Observable<Role[]> {

    return this.http.post<Role[]>("https://www.alectosinterdimensionalblog.com/api/auth/getUserRoles", userId);
  }

  signOut() {
    this.isAuthenticated = false;

  }
}
