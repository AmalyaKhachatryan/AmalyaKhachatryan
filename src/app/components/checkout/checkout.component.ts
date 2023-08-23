import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { countries } from 'src/app/Country-data';

import { MaineSService } from '../../services/maine-s.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  public countries: any = countries

  constructor(private router: Router, private maineSService: MaineSService) {
    // console.log(this.orders)
   }


  products = this.maineSService.getProducts();

  orders = this.maineSService.getOrder();

placeorder: any[]=[]

  adressForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('',Validators.required),
    companyName: new FormControl('',Validators.required),
    country: new FormControl('',Validators.required),
    streetAdress: new FormControl('',Validators.required),
    postcode: new FormControl('',Validators.required),
    town: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    checkbox1: new FormControl(''),
    checkbox2: new FormControl(''),
    notes: new FormControl(''),
    banktransfer: new FormControl(''),
    check: new FormControl (''),
    cash: new FormControl (''),
    paypal: new FormControl (''),
  }
  )

  placeOrder(){
    this.placeorder.push(this.adressForm.value);
    localStorage.setItem('placeorder', JSON.stringify(this.placeorder))

    console.log(this.adressForm.value);
  }
  }

    //  adressdetails: any = {
    //   firstName: '',
    //   lastName: '',
    //   companyName: '',
    //   country: '',
    //   streetAdress: '',
    //   postcode: '',
    //   town: '',
    //   phone: '',
    //   email: '',
    //   checkbox1: '',
    //   checkbox2: ''
    // }

    // addadressdetails() {
    //   let details: any = localStorage.getItem("billingaddress")

    //   console.log(details);
    // }

