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
import { LetterBoxComponent } from './letter-box/letter-box.component';
import { LetterBoxGridComponent } from './letter-box-grid/letter-box-grid.component';
import { CrosswordComponent } from './crossword/crossword.component';
import { CrosswordBuildComponent } from './crossword-build/crossword-build.component';
import { ClueBoxGridComponent } from './clue-box-grid/clue-box-grid.component';


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
    LetterBoxComponent,
    LetterBoxGridComponent,
    CrosswordComponent,
    CrosswordBuildComponent,
    ClueBoxGridComponent,
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
      { path: 'Crossword', component: CrosswordComponent, pathMatch: 'full' },
      { path: 'CrosswordAdmin', component: CrosswordBuildComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
