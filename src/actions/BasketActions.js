import {SET_COUNT, DEL_PRODUCT} from '../constants/Basket'
function setCount(data) {
    return (dispatch)=> {
        dispatch({
            type: SET_COUNT,
            payload: data
        });

    }
}

function delProduct(data) {
    return (dispatch)=> {
        dispatch({
            type: DEL_PRODUCT,
            payload: data
        });

    }
}

export {
    setCount,
    delProduct
}