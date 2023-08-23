
import { Injectable } from '@angular/core';
import { IProducts, ICard, IOrderdetails } from '../interfaces';
// import {HttpClient} from "@angular/common/http"



@Injectable({
    providedIn: 'root'
})
export class MaineSService {
    constructor() { }

    cartlist: ICard[] = []

    orderdetails: IOrderdetails[] = []



    initList() {
        this.cartlist = JSON.parse(localStorage.getItem('cards') || '[]')
    }

    getCartlist() {
        this.cartlist = JSON.parse(localStorage.getItem('cards') || '[]')
        return this.cartlist
    }

    setCartlist(item: ICard) {
        let cardsFromStorage = JSON.parse(localStorage.getItem('cards') || '[]') as ICard[]
        if (cardsFromStorage.some(x => x.id === item.id)) {
            let elem = cardsFromStorage.find(x => x.id == item.id)
            if (elem) {
                elem.num++
            }

        } else {
            item.num = 1
            cardsFromStorage.push(item);
        }

        localStorage.setItem('cards', JSON.stringify(cardsFromStorage))
        this.cartlist = cardsFromStorage

        return this.cartlist
    }




    getProducts(): IProducts[] {
        return [
            {
                id: 1,
                name: "Lira Earrings",
                price: 20,
                imageUrl: "assets/Img 01 (1).png",
                discount: 0,
                liked:false,
                showOnSlide: true,
                showDisscount: false,
                aditionalText: 'Sold Out',
                Categories: "Fashion, Style",
                Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
                AditionalInformation: {
                    weight: '0.3 kg ',
                    dimentions: "15 x 10 x 1 cm",
                    colours: " Black, Browns, White ",
                    material: "Metal"
                },
                Reviews: [{
                    name: "Scarlet withch",
                    stars: 3,
                    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
                    date: "6 May, 2020"
                }],
                SimilarItems: []
            },
            {
                id: 2,
                name: "Hal Errings",
                price: 25,
                imageUrl: "assets/Img 02.png",
                discount: 0,
                liked:false,
                showOnSlide: true,
                showDisscount: false,
                aditionalText: '',
                Categories: "Fashion, Style",
                Description: "Lorem ipsum dolor sit amet, con4 (1)sectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
                AditionalInformation: {
                    weight: '0.3 kg ',
                    dimentions: "15 x 10 x 1 cm",
                    colours: " Black, Browns, White ",
                    material: "Metal"
                },
                Reviews: [{
                    name: "Scarlet withch",
                    stars: 3,
                    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
                    date: "6 May, 2020"
                }],
                SimilarItems: []
            },
            {
                id: 3,
                name: "Kaede Hair Pin Of 3",
                price: 30,
                imageUrl: "assets/Img 04.png",
                discount: 20,
                liked:false,
                showOnSlide: true,
                showDisscount: false,
                aditionalText: '',
                Categories: "Fashion, Style",
                Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
                AditionalInformation: {
                    weight: '0.3 kg ',
                    dimentions: "15 x 10 x 1 cm",
                    colours: " Black, Browns, White ",
                    material: "Metal"
                },
                Reviews: [{
                    name: "Scarlet withch",
                    stars: 3,
                    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
                    date: "6 May, 2020"
                }],
                SimilarItems: []
            },
            {
                id: 4,
                name: "Hair Pin Set 3",
                price: 30,
                imageUrl: "assets/Img 04 (1).png",
                discount: 0,
                liked:false,
                showOnSlide: true,
                showDisscount: false,
                aditionalText: '',
                Categories: "Fashion, Style",
                Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
                AditionalInformation: {
                    weight: '0.3 kg ',
                    dimentions: "15 x 10 x 1 cm",
                    colours: " Black, Browns, White ",
                    material: "Metal"
                },
                Reviews: [{
                    name: "Scarlet withch",
                    stars: 3,
                    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
                    date: "6 May, 2020"
                }],
                SimilarItems: []
            },
            {
                id: 5,
                name: "Plaine Neclace",
                price: 19,
                imageUrl: "assets/Img 05.png",
                discount: 0,
                liked:false,
                showOnSlide: true,
                showDisscount: false,
                aditionalText: '',
                Categories: "Fashion, Style",
                Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
                AditionalInformation: {
                    weight: '0.3 kg ',
                    dimentions: "15 x 10 x 1 cm",
                    colours: " Black, Browns, White ",
                    material: "Metal"
                },
                Reviews: [{
                    name: "Scarlet withch",
                    stars: 3,
                    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
                    date: "6 May, 2020"
                }],
                SimilarItems: []
            },
            {
                id: 6,
                name: "Yuki Hair Pin Set of 3",
                price: 29,
                imageUrl: "assets/Img 07.png",
                discount: 20,
                liked:false,
                showOnSlide: true,
                showDisscount: false,
                aditionalText: 'Sold Out',
                Categories: "Fashion, Style",
                Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
                AditionalInformation: {
                    weight: '0.3 kg ',
                    dimentions: "15 x 10 x 1 cm",
                    colours: " Black, Browns, White ",
                    material: "Metal"
                },
                Reviews: [{
                    name: "Scarlet withch",
                    stars: 3,
                    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
                    date: "6 May, 2020"
                }],
                SimilarItems: []
            },

            // {
            //     name: "Lira Earrings",
            //     price: "20,00",
            //     imageUrl: "aaaaaaaaaaaaaaaaaaaaa.jpg",
            //     discount: 20,
            //     aditionalText: 'Sold Out',
            //     Categories: "Fashion, Style",
            //     Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
            //     AditionalInformation: {
            //         weight: '0.3 kg ',
            //         dimentions: "15 x 10 x 1 cm",
            //         colours: " Black, Browns, White ",
            //         material: "Metal"
            //     },
            //     Reviews: [{
            //         name: "Scarlet withch",
            //         stars: 3,
            //         text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
            //         date: "6 May, 2020"
            //     }],
            //     SimilarItems: []
            // },
            // {
            //     name: "Lira Earrings",
            //     price: "20,00",
            //     imageUrl: "aaaaaaaaaaaaaaaaaaaaa.jpg",
            //     discount: 20,
            //     aditionalText: 'Sold Out',
            //     Categories: "Fashion, Style",
            //     Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
            //     AditionalInformation: {
            //         weight: '0.3 kg ',
            //         dimentions: "15 x 10 x 1 cm",
            //         colours: " Black, Browns, White ",
            //         material: "Metal"
            //     },
            //     Reviews: [{
            //         name: "Scarlet withch",
            //         stars: 3,
            //         text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
            //         date: "6 May, 2020"
            //     }],
            //     SimilarItems: []
            // },
        ]
    }

//     getCartlist(): ICard [] {
//         return[
//        { num: 1,
//         id: number,
//         name: string,
//         price: number,
//         imageUrl: string,
//         discount: number,
//         showOnSlide: boolean,
//         showDisscount: boolean,
//         aditionalText: string,
//         Categories: string,
//         Description: string,
//     }
    
// ]
//     }

    getOrder(): IOrderdetails[] {
        return [
            {
                ordernumber: 157,
                email: "analya84@gmail.com",
                paymentMethod: "Mastercard ******",
                date: "6 May, 2020",
                delivery: "Standard delivery",
                adress: "Erevan",
                contactNomber: " 055 55 55 55",
                status: "",
                action1: "View Order",
                action2: "Dowload",
                product: "",
                subtotal: 85,
                shipping: "Free shipping",
                total: 85,
            }
        ]
    }


    //  users=[];
    //  address= "http://.........../";
    //  constructor(private maineSService: MaineSService, private router: Router,private httpClient: HttpClient) {
    //   }

    // getUsers() {
    //  this.httpClient.get(url:this.address+"users").subscribe (observerOn (res:any)=>{
    //   this.users=res
    //  })}

}




