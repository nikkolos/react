import {ADD_PRODUCT_TO_BASKET, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS} from "../constants/Product";
function addProductToBasket(data) {
    return (dispatch)=> {
        dispatch({
            type: ADD_PRODUCT_TO_BASKET,
            payload: data
        });


    }
}

function getProducts() {
    return (dispatch) => {
        dispatch({
            type: GET_PRODUCT_REQUEST,
        })

        setTimeout(() => {
            var rand = +(new Date);
            dispatch({
                type: GET_PRODUCT_SUCCESS,
                payload: [
                    {
                        id: rand,
                        name: 'Новый товак 1',
                        price: 2000,
                        img: 'product.png'
                    },
                    {
                        id: rand + 1,
                        name: 'Новый товак 2',
                        price: 5000,
                        img: 'product.png'
                    },
                    {
                        id:  rand + 2,
                        name: 'Новый товак 3',
                        price: 6500,
                        img: 'product.png'
                    },
                    {
                        id:  rand + 3,
                        name: 'Новый товак 4',
                        price: 6000,
                        img: 'product.png'
                    },
                    {
                        id:  rand + 4,
                        name: 'Новый товак 5',
                        price: 2000,
                        img: 'product.png'
                    },
                    {
                        id:  rand + 5,
                        name: 'Новый товак 6',
                        price: 8000,
                        img: 'product.png'
                    }]
            })
        }, 1000)
    }
}

export{
    addProductToBasket,
    getProducts
}