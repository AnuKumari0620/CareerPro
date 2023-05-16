import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { FrontEndDeveloperComponent } from './apply/front-end-developer/front-end-developer.component';
import { BackEndDeveloperComponent } from './apply/back-end-developer/back-end-developer.component';
import { CloudEngineerComponent } from './apply/cloud-engineer/cloud-engineer.component';
import { SoftwareDeveloperComponent } from './apply/software-developer/software-developer.component';
import { DevopsEngineerComponent } from './apply/devops-engineer/devops-engineer.component';
import { UiDeveloperComponent } from './apply/ui-developer/ui-developer.component';
import { FullStackWebDeveloperComponent } from './apply/full-stack-web-developer/full-stack-web-developer.component';
import { JuniorDevopsEngineerComponent } from './apply/junior-devops-engineer/junior-devops-engineer.component';
import { JavaJ2eeDeveloperComponent } from './apply/java-j2ee-developer/java-j2ee-developer.component';
import { ProgrammesAndCoursesComponent } from './programmes-and-courses/programmes-and-courses.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { ApplicationComponent } from './application/application/application.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    ContactComponent,
    FrontEndDeveloperComponent,
    BackEndDeveloperComponent,
    CloudEngineerComponent,
    SoftwareDeveloperComponent,
    DevopsEngineerComponent,
    UiDeveloperComponent,
    FullStackWebDeveloperComponent,
    JuniorDevopsEngineerComponent,
    JavaJ2eeDeveloperComponent,
    ProgrammesAndCoursesComponent,
    CollaborationsComponent,
    ApplicationComponent
    
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
