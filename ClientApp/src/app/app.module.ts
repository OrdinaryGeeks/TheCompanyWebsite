import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RoleComponent } from './role/role.component';
import { TWLHomeComponent } from './twlhome/twlhome.component';
import { LevityComponent } from './levity/levity.component';
import { CounselingComponent } from './counseling/counseling.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    RoleComponent,
    TWLHomeComponent,
    LevityComponent,
    CounselingComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'SignIn', component: SignInComponent, pathMatch: 'full' },
      { path: 'SignUp', component: SignUpComponent, pathMatch: 'full' },
      { path: 'Roles', component: RoleComponent, pathMatch: 'full' },
      { path: 'Transformative', component: TWLHomeComponent, pathMatch: 'full' },
      { path: 'Levity', component: LevityComponent, pathMatch: 'full' },
      { path: 'Counseling', component: CounselingComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
