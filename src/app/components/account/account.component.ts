import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import { countries } from 'src/app/Country-data';
import { MaineSService } from 'src/app/services/maine-s.service';

import { AbstractControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {


  public countries: any = countries;


  constructor(private router: Router, private maineSService: MaineSService,) { }


  tab = 1;
  addressDiv = 1;

  orders = this.maineSService.getOrder()

  billingaddress: any[] = []



  adressForm = new FormGroup({
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl(''),
    CompanyName: new FormControl(''),
    Country: new FormControl(''),
    StreetAdress: new FormControl(''),
    Postcode: new FormControl(''),
    Town: new FormControl(''),
    Phone: new FormControl(''),
    Email: new FormControl('')
  }
  )


  click() { }


  saveAdress() {
    this.billingaddress.push(this.adressForm.value);
    localStorage.setItem('billingaddress', JSON.stringify(this.billingaddress))

    console.log(this.adressForm.value);
  }

  ngOnInit(): void {
  }



  
  currentIndex: number = 0

  slides = [1, 2, 3, 4, 5, 6]

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.currentIndex = newIndex;
  }



}


