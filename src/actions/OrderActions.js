import {SUBMIT_ORDER, SUBMIT_ORDER_SUCCESS} from '../constants/Basket'

export function submitOrder(data) {
    return (dispatch)=> {
        dispatch({
            type: SUBMIT_ORDER,
            payload: data
        });
        // отправка формы на сервер
        setTimeout(() => {
            dispatch({
                type: SUBMIT_ORDER_SUCCESS,
            })
            alert('Заказ отправлен!');
        }, 500)

    }
}