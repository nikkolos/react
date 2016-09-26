import React, {Component} from "react";
import { findDOMNode } from 'react-dom';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as orderActions from "../actions/OrderActions";


class OrderForm extends Component {
    submitForm(e) {
        e.preventDefault();
        let name = findDOMNode(this.refs.name),
            email = findDOMNode(this.refs.email),
            phone = findDOMNode(this.refs.phone),
            address = findDOMNode(this.refs.address),
            comment = findDOMNode(this.refs.comment);
        const {submitOrder} = this.props.orderActions;
        submitOrder({
            name: name.value,
            email: email.value,
            phone: phone.value,
            address: address.value,
            comment: comment.value,
        });
        name.value = '';
        email.value = '';
        phone.value = '';
        address.value = '';
        comment.value = '';

    }

    render() {

        return <form className='order-form' onSubmit={::this.submitForm}>
            <input className="order-form__input"
                   type='text'
                   defaultValue=''
                   placeholder='Ваше имя'
                   ref='name'
            />
            <input className="order-form__input"
                   type='email'
                   defaultValue=''
                   placeholder='Email'
                   ref='email'
            />
            <input className="order-form__input"
                   type='text'
                   defaultValue=''
                   placeholder='Телефон'
                   ref='phone'
            />
            <input className="order-form__input"
                   type='text'
                   defaultValue=''
                   placeholder='Адрес доставки'
                   ref='address'
            />
            <textarea
                className='order-form__textarea'
                placeholder='Комментарий'
                ref='comment'
            ></textarea>
            <button className='button button_blue'>Оформить заказ</button>
        </form>
    }
}
function mapStateToProps() {
    return {}
}
function mapDispatchToProps(dispatch) {
    return {
        orderActions: bindActionCreators(orderActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)