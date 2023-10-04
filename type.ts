export interface IRestaurant {
    _id: string;
    Image?: Object | undefined;
    imgUrl: Object | undefined;
    name: string;
    rating: number;
    type: Object;
    address: string;
    short_description: string;
    dishes: [];
    long: number;
    lat: number;
}

export interface IFeaturedCategory {
    _id: string;
    name: string;
    short_description: string;
}

export interface IDish {
    _id: string;
    name: string;
    short_description: string;
    price: number;
    image: string;
}

export interface Category {
    _id: string;
    name: string;
    imgUrl?: Object | undefined;
    image?: Object | undefined;
}