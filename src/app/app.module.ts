import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
//import { routing } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import {UserService} from './services/user.service.client';
import {RouterModule} from '@angular/router';
import {CourseService} from './services/CourseService';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    CourseNavigatorComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
      CourseService,
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
