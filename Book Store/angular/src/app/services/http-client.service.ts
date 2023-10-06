import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class signin{
  constructor(
    public name:string,
    public email:string,
    public password:string,
  ) {}
}

export class login{
  constructor(
    public email:string,
    public password:string,
  ) {}
}

export class payment{
  constructor(
    public card_holder_name:string,
    public card_number:string,
    public expiry_date:string,
    public cvv:string

  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient) { }

    getUserlogin()
    {
      console.log("test call");
      return this.httpClient.get<login>('http://localhost:8090/signin');
    }

    getUser()
  {
    console.log("test call");
    return this.httpClient.get<signin>('http://localhost:8090/signin');
  }

  public createEmployee(employee: any) {
    return this.httpClient.post<signin>('http://localhost:8090', employee);
  }

  public createpayment(pay: any) {
    return this.httpClient.post<payment>('http://localhost:8090', pay);
  }
}
