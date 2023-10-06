import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor() {}
  
  // authenticate(username: string, password: string) {
  //   // Iterate through the 'employee' array
  //   for (const emp of this.employees) {
  //     if (emp.email == username && emp.password == password) {
  //       sessionStorage.setItem('username', username);
  //       return true; 
  //     }
  //   }
  
  //   return false; 
  // }


  authenticate(username: string, password: string) {
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
