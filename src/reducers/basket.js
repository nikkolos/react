import {ADD_PRODUCT_TO_BASKET} from "../constants/Product";
import {SET_COUNT, DEL_PRODUCT, SUBMIT_ORDER_SUCCESS} from "../constants/Basket";

const initialState = {
    basket: [
    ]
}

export default function basket(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_BASKET: {
            let basket = state.basket,
                index = state.basket.findIndex((item)=>item.id == action.payload.id)

            if (index !== -1) {
                basket[index].count++;
            } else {
                basket = [...basket, {...action.payload, count: 1}];
            }
            return {...state, basket: basket}
        }
        case SET_COUNT: {
            let basket = state.basket,
                index = state.basket.findIndex((item)=>item.id == action.payload.id),
                count = +action.payload.count<1?1:+action.payload.count;

            if (index !== -1) {
                basket[index].count = +count;
            } else {
                basket = [...basket, {...action.payload, count: +count}];
            }
            return {...state, basket: basket}
        }
        case DEL_PRODUCT: {
            let basket = state.basket.filter((item)=>item.id != action.payload);

            return {...state, basket: basket}
        }
        case SUBMIT_ORDER_SUCCESS: {
            return {...state, basket:[]}
        }
        default:
            return state;
    }
}