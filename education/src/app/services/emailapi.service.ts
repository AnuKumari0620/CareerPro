import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})


export class emailapiService {

  public static emailapiURL: string = "http://localhost:3000/";

  //UAT API
  // public static apiURL: string = "http://13.233.9.36:3000/";

  //Prod API
  // public static apiURL: string = "http://localhost:3000/";

  constructor() { }

}
