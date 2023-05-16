import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule
  ],
  declarations: [],
  imports: [

  ]
})

export class LoginModule {}


