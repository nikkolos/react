import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import BasketProduct from "../components/BasketProduct";
import OrderForm from "./OrderForm"
import * as basketActions from "../actions/BasketActions";


class Basket extends Component {
    render() {
        const {basket,} = this.props;
        const {setCount, delProduct} = this.props.basketActions;

        return <div className='basket'>
            <h1>Оформление заказа</h1>
            <div className="basket__table">
                { basket.basket.map((item) =>
                    <div className='basket__product'
                         key={`product_${item.id}`}>
                        <BasketProduct data={item} setCount={setCount} delProduct={delProduct}/>
                    </div>
                )}
            </div>
            <div className='basket__total-price'>
                {`Итого: ${basket.basket.reduce((sum, item)=>sum + item.count * item.price, 0)} руб.`}
            </div>
            <OrderForm />
        </div>
    }
}
function mapStateToProps(state) {
    return {
        basket: state.basket
    }
}
function mapDispatchToProps(dispatch) {
    return {
        basketActions: bindActionCreators(basketActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Basket)