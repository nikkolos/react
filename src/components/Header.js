import React, {PropTypes, Component} from "react";
import {Link} from "react-router";

export default class Header extends Component {
    render() {
        const {sections, basket} = this.props
        return <header className='header'>
            <Link to='/'>
                <img className='header__logo' src={require('../images/logo.png')}/>
            </Link>
            <div className='header__sections'>
                { sections.map((item) =>
                    <a href='' className='link header__section-link link_black' key={item.id}>{item.name}</a>)}
            </div>
            <div className='header__basket'>
                <Link to='/basket' className="link">
                    {`В корине ${basket.reduce((sum, item)=>sum + item.count, 0)} товаров`}
                </Link>
            </div>
        </header>
    }
}

Header.propTypes = {
    sections: PropTypes.array.isRequired,
    basket: PropTypes.array.isRequired,
}