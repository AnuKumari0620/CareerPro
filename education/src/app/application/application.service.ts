import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";


import { AuthData } from "./application-data.model";

import { LoginData } from "./application-data.model";
import { apiService } from '../services/api.service';



@Injectable({ providedIn: "root" })
export class AuthService {
  apiConnection = apiService.apiURL;
  private isAuthenticated = false;
  private token: any;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}


  applicationUser(first_name: string, last_name: string, email: string, applied_position: string, contact_number: string, gender: string, resume: string) {
    const authData: AuthData = {first_name: first_name, last_name: last_name, email: email, applied_position: applied_position, contact_number: contact_number, gender: gender, resume: resume};
    this.http.post(apiService.apiURL + "jobapplication", authData)
    .subscribe(response => {
        console.log(response);
    })
  }

  getToken(){
    // return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListner() {
    return this.authStatusListener.asObservable();
  }


  login(email: string, password: string) {
    const loginData: LoginData = {email:email, password:password}
    console.log(loginData);
    this.http.post<{token: string, expiresIn: number }>(apiService.apiURL + "witslogin", loginData)
    .subscribe(response => {
      const token = response.token;
      this.token = token;
      console.log(response);
      if(token) {
        const expiresInDuration = response.expiresIn;
        console.log("This is Token Expire Time");
        console.log(expiresInDuration);
        this.setAuthTimer(expiresInDuration);
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        const now = new Date();
        const expirationDate = new Date (now.getTime() + expiresInDuration * 1000);
        this.saveAuthData(token, expirationDate);
        console.log(expirationDate);
        this.router.navigate(['dashboard']);
      }
    });
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if(!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }


  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);

  }

  private setAuthTimer(duration: number) {
    console.log("Setting Timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }


  private saveAuthData(token:string, expirationDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
  }


  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    if(!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate)
    }
  }

}
