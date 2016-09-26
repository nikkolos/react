import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import ProductList from "../components/ProductList";
import * as productActions from "../actions/ProductActions";


class Content extends Component {
    render() {
        const brands = ['Бренд 1', 'Бренд 2', 'Бренд 3', 'Бренд 4', 'Бренд 5', 'Бренд 6', 'Бренд 7', 'Бренд 8', 'Бренд 9', 'Бренд 10',];
        const {products} = this.props;
        const {getProducts} = this.props.productActions;

        return <div className='content clear-after'>
            <div className="content__left filter">
                <div className="filter__label">
                    Цена
                </div>
                <div className="filter__counter">
                    <input type="text" className="filter__input" defaultValue="0" />
                    <span className="filter__blank">—</span>
                    <input type="text" className="filter__input" defaultValue="1000000"/>
                </div>
                <div className='filter__label'>
                    Бренды
                </div>
                <div className="filter__counter clear-after">
                    {brands.map((item, index)=><div className="filter__input-group" key={`brand_${index}`}>
                        <label><input type="checkbox" className="filter__input-checbox" />
                        {item}</label>
                    </div>)}

                </div>
                <div className="filter__buttons clear-after">
                    <div className="filter__button">
                        <a className="button button_theme_filter">Применить</a>
                    </div>
                    <div className="filter__button">
                        <a className="link link_black">Сбросить</a>
                    </div>
                </div>
            </div>
            <div className="content__right">
                <ProductList
                    products={products.products}
                    category={products.category}
                    getProducts={getProducts}
                    load={products.load}
                />
            </div>
        </div>
    }
}
function mapStateToProps(state) {
    return {
        products: state.products,
        basket: state.basket
    }
}
function mapDispatchToProps(dispatch) {
    return {
        productActions: bindActionCreators(productActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)