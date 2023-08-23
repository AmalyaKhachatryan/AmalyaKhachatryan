import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, Validators } from '@angular/forms';

// import { NewpipePipe } from './Pipes/newpipe.pipe';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ShoppingBagComponent } from './components/shopping-bag/shopping-bag.component';
import { ViewOorderComponent } from './components/view-oorder/view-oorder.component';
import { AccountComponent } from './components/account/account.component';
import { AccountdetailsComponent } from './components/accountdetails/accountdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { CheckoutComponent } from './components/checkout/checkout.component';



export const LOCALSTORAGE_TOKEN_KEY = "angular_login";

export function tokenGetter() {
  return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent,
    // NewpipePipe,
    HomeComponent,
    ProductsComponent,
    MyAccountComponent,
    ResetPasswordComponent,
    ShoppingBagComponent,
    ViewOorderComponent,
    AccountComponent,
    AccountdetailsComponent,
    RegisterComponent,
    CheckoutComponent,
  

   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule  { }
