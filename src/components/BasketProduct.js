import React, {PropTypes, Component} from "react";

export default class BasketProduct extends Component {
    onChangeCount(e) {
        const {data} = this.props;
        const count = +e.target.value;
        this.props.setCount({id: data.id, count: count});
    }

    onClickCountUp(e) {
        e.preventDefault();
        const {data} = this.props;
        this.props.setCount({id: data.id, count: ++data.count});
    }

    onClickCountDown(e) {
        e.preventDefault();
        const {data} = this.props;
        this.props.setCount({id: data.id, count: --data.count});
    }

    delProduct(e) {
        e.preventDefault();
        const {data} = this.props;
        this.props.delProduct(data.id);
    }

    render() {
        const {data} = this.props;
        return <div className='basket-product'>
            <img src={require(`../images/${data.img}`)} className="basket-product__img"/>
            <a className='basket-product__name link'>{data.name}</a>
            <a className='basket-product__price'>{data.price} руб.</a>
            <div className='basket-product__count'>
                <div className="basket-product__count-up arrow arrow_up" onClick={::this.onClickCountUp}></div>
                <div className="basket-product__count-down arrow arrow_down" onClick={::this.onClickCountDown}></div>
                <input
                    type='number'
                    className='basket-product__count-input'
                    value={data.count}
                    onChange={::this.onChangeCount}
                    min='1'
                />
            </div>
            <div className='basket-product__del'>
                <a href=''
                   className="link link_dashed"
                   onClick={::this.delProduct}>Удалить</a>
            </div>
        </div>
    }
}

BasketProduct.propTypes = {
    data: PropTypes.object.isRequired,
    setCount: PropTypes.func.isRequired,
    delProduct: PropTypes.func.isRequired,
}