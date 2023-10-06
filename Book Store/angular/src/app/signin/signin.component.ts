import { Component } from '@angular/core';
import { HttpClientService, signin } from '../services/http-client.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  user: signin = new signin("","","");

  constructor(
    private httpClientService: HttpClientService
  ) { }

  employees: any[] = [];

  ngOnInit() {
    this.httpClientService.getUser().subscribe(
      (response: any) => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response:any[]) {
    this.employees = response;
  }

  createEmployee(): void {
    if (!this.user.name || !this.user.email || !this.user.password) {
       alert("Please provide all user details (Name, email, password).");
    } else {
      this.httpClientService.createEmployee(this.user)
        .subscribe(data => {
          alert("Employee created successfully.");
        });
    }}




}
