import React, {PropTypes, Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as productActions from '../actions/ProductActions'

class Product extends Component {
    onBasketBtnClick(e) {
        e.preventDefault();
        const {data} = this.props;
        const { addProductToBasket } = this.props.productActions
        addProductToBasket(data);
    }
    render() {
        const {data} = this.props
        return <div className="product">
            <img src={require(`../images/${data.img}`)} className="product__img"/>
            <span className='product__name link'>{data.name}</span>
            <div className='product__bottom-block clear-after'>
                <div className='product__price'>{data.price} руб.</div>
                <a href="" className='product__button button button_blue'
                   onClick={::this.onBasketBtnClick}>В корзину</a>
            </div>
        </div>
    }
}

Product.propTypes = {
    data: PropTypes.object.isRequired,
}

function mapStateToProps() {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        productActions: bindActionCreators(productActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)