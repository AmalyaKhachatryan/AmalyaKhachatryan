import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import {ShoppingBagComponent} from './components/shopping-bag/shopping-bag.component';
import {ViewOorderComponent} from './components/view-oorder/view-oorder.component';
import {AccountComponent} from './components/account/account.component';
import { AccountdetailsComponent} from './components/accountdetails/accountdetails.component'
import {RegisterComponent} from './components/register/register.component'
import {CheckoutComponent} from './components/checkout/checkout.component'


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: "product", component: ProductsComponent },
  { path: "myaccount", component: MyAccountComponent},
  { path: "resetpassword", component: ResetPasswordComponent},
  { path:"shoppingBag", component: ShoppingBagComponent},
  { path:"viewOrder", component: ViewOorderComponent},
  { path: "account", component: AccountComponent},
  { path: "accountdetails", component:  AccountdetailsComponent},
  {path:"register", component: RegisterComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"**", component:HomeComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
ServiceWorker