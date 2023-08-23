export interface IProducts {
    id: number,
    name: string,
    price: number,
    imageUrl: string,
    discount: number,
    liked:boolean,
    showOnSlide: boolean,
    showDisscount: boolean,
    aditionalText: string,
    Categories: string,
    Description: string,
    AditionalInformation: {
        weight: string,
        dimentions: string,
        colours: string,
        material: string
    },
    Reviews: [{
        name: string,
        stars: number,
        text: string,
        date: string
    }],
    SimilarItems: Array<IProducts>;
}


export interface ICard {
    num: number,
    id: number,
    name: string,
    price: number,
    imageUrl: string,
    discount: number,
    showOnSlide: boolean,
    showDisscount: boolean,
    aditionalText: string,
    Categories: string,
    Description: string,
    
}

export interface SlideInterface {
    name: string,
    image: string,
    price: number,

}

export interface IOrderdetails {
    ordernumber: number,
    email: string,
    paymentMethod: string,
    date: string,
    delivery: string,
    adress: string,
    contactNomber: string,
    status: string,
    action1: string,
    action2: string,
    product: string,
    subtotal: number,
    shipping: string,
    total: number,
}


export interface Countries {
    code: string
    code3: string
    name: string
    number: string
}