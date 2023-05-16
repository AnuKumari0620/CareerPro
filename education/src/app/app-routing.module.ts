import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
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
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { ProgrammesAndCoursesComponent } from './programmes-and-courses/programmes-and-courses.component';
import { ApplicationComponent } from './application/application/application.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'frontenddeveloper', component: FrontEndDeveloperComponent},
  {path: 'backenddeveloper', component: BackEndDeveloperComponent},
  {path: 'cloudengineer', component: CloudEngineerComponent},
  {path: 'softwaredeveloper', component: SoftwareDeveloperComponent},
  {path: 'devopsengineer', component: DevopsEngineerComponent},
  {path: 'uideveloper', component: UiDeveloperComponent},
  {path: 'fullstackwebdeveloper', component: FullStackWebDeveloperComponent},
  {path: 'juniordevopsengineer', component: JuniorDevopsEngineerComponent},
  {path: 'javaj2eedeveloper', component: JavaJ2eeDeveloperComponent},
  {path: 'collaborations', component: CollaborationsComponent},
  {path: 'programmesandcourses', component: ProgrammesAndCoursesComponent},
  {path: 'application', component: ApplicationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
