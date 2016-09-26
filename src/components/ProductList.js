import React, {PropTypes, Component} from "react";
import Product from "../containers/Product";

export default class ProductList extends Component {
    getProducts(e) {
        e.preventDefault();
        this.props.getProducts();
    }

    render() {
        const {products, category, load} = this.props
        return <div className='product-list'>
            <h1 className="product-list__h1">{category}</h1>
            <div className="product-list__list list">
                { products.map((item, index) =>
                    <div className={`list__item ${index % 3 == 1 ? 'list__item_middle' : ''}`}
                         key={`product_${item.id}`}>
                        <Product data={item}/>
                    </div>
                )}
                <a href='' className='product-list__add'
                   onClick={::this.getProducts}>{load ? 'Загрузка...' : 'Показать ещё 6 товаров'}</a>
            </div>
        </div>
    }
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired,
    getProducts: PropTypes.func.isRequired,
}