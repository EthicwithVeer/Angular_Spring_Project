import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClientService } from '../services/http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  

  employees: any[] = [];

  ngOnInit() {
    this.httpClientService.getUser().subscribe(
      (response: any) => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response:any[]) {
    this.employees = response;
  }

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService,private httpClientService: HttpClientService) { }

  // checkLogin() {
  //   if (this.loginservice.authenticate(this.username, this.password)
  //   ) {
  //     alert("Login Successful")
  //     this.router.navigate(['admindashboard'])
  //     this.invalidLogin = false
  //   } else
  //   alert("Please Check Username or Password, try again.")
  //     this.invalidLogin = true
  // }
//   checkLogin(){
//     for(const a of this.employees){
//       if((a['email']==this.username &&  a["password"]==this.password)){
//         this.router.navigate(['donate']);
//     }  
//   }
//   alert("Username & Password wrong... try Again")
// }
checkLogin() {
  const matchedEmployee = this.employees.find(
    (employee) => employee.email === this.username && employee.password === this.password
  );

  if (matchedEmployee) {
    this.router.navigate(['donate']);
  } else {
    alert("Username & Password are incorrect. Please try again.");
  }
}
}
