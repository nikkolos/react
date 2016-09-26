import {GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS} from "../constants/Product";

const initialState = {
    categories: [
        {
            id: 1,
            name: 'Категория 1'
        },
        {
            id: 2,
            name: 'Категория 2'
        },
        {
            id: 3,
            name: 'Категория 3'
        },
        {
            id: 4,
            name: 'Категория 4'
        },
    ],
    category: 'Категория товаров #1',
    products: [
        {
            id: 1,
            name: 'Товар 1',
            price: 2000,
            img: 'product.png'
        },
        {
            id: 2,
            name: 'Товар 2',
            price: 5000,
            img: 'product.png'
        },
        {
            id: 3,
            name: 'Товар 3',
            price: 6500,
            img: 'product.png'
        },
        {
            id: 4,
            name: 'Товар 4',
            price: 6000,
            img: 'product.png'
        },
        {
            id: 5,
            name: 'Товар 5',
            price: 2000,
            img: 'product.png'
        },
        {
            id: 6,
            name: 'Товар 6',
            price: 8000,
            img: 'product.png'
        }
    ],
    load: false
}

export default function products(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_REQUEST:
            return { ...state, load: true }

        case GET_PRODUCT_SUCCESS:{
            let products = [...state.products, ...action.payload];
            return { ...state, products: products, load: false }
        }
        default:
            return state;
    }
}