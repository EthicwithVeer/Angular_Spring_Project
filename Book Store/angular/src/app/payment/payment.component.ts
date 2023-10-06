import { Component } from '@angular/core';
import { HttpClientService, payment } from '../services/http-client.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  paypal(){
    alert("This service Available Soon.")
  }

  gpay(){
    alert("Sorry This service is not available Right Now...")
  }

  successful(){
    alert("Thank you for Donate.\n It Help Poor People.");
  };

  pay: payment = new payment("","","","");

  // constructor(
  //   private httpClientService: HttpClientService
  // ) { }

  // createpayment(): void {
  //   if (!this.pay.card_holder_name || !this.pay.card_number || !this.pay.expiry_date || !this.pay.cvv) {
  //      alert("Please provide Card Details (Card Holder Name, Card Number, Expiry , CVV).");
  //   } else {
  //     this.httpClientService.createpayment(this.pay)
  //       .subscribe(data => {
  //         alert(" Payment successfully.");
  //       });
  //   }}
}
