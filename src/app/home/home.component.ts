import { Component, OnInit } from '@angular/core';

import { MaineSService } from '../services/maine-s.service';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from '../interfaces';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private maineSService: MaineSService, private router: Router) {

  }

  elems = this.maineSService.getProducts();

  cardProducts = this.elems.filter((p) => !p.showOnSlide);

  //   get updateCartIcon() {
  //     router this.maineSService.cartlist
  // }

  item = 1

  cartlist: any[] = []

  user_likedItems = []


  ngOnInit(): void {
     this.maineSService.initList()

      for (let elem of this.maineSService.getProducts()) {
        const storedIsLiked = localStorage.getItem('product_' + elem.id)
        if (storedIsLiked !== null) {
          elem.liked = true
        }
      }
    }

    toggleLike(product:IProducts) {
      product.liked=!product.liked;
      localStorage.setItem('product_' + product.id, JSON.stringify(product.liked))
  }


  
  click() { }

  slider = [
    {
      id: '1',
      name: 'Gold big hoops',
      imageUrl: 'assets/Img 01.png',
      price: '68',
    },
    {
      id: 2,
      name: 'Fast Faison',
      imageUrl: 'assets/Img 08.png',
      price: '30',
    },
    {
      id: 3,
      name: 'Gold big hoops',
      imageUrl: 'assets/Img 01.png',
      price: '68',
    },
    {
      id: 4,
      name: 'Fast Faison',
      imageUrl: 'assets/Img 08.png',
      price: '30',
    },
    {
      id: 5,
      name: 'Gold big hoops',
      imageUrl: 'assets/Img 01.png',
      price: '68',
    },
  ];




  addToCart(elem: IProducts): void {

    this.maineSService.setCartlist(elem as any)
    this.cardProducts.push(elem)
    console.log(this.cardProducts);
  }

  getItems() {
    return this.elems
  }



}





// clearCart(){
//   this.elems = []
//   return this.elems;
// }
