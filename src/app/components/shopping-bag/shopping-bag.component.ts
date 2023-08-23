import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.scss']
})
export class ShoppingBagComponent {

  constructor(private router: Router){}
}
