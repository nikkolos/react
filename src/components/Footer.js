import React, {PropTypes, Component} from "react";

export default class Footer extends Component {
    render() {
        const {sections} = this.props
        return <footer className='footer'>
            <div className='footer__content'>
                <div className='footer__company'>Company name — {(new Date).getFullYear()}</div>
                <div className='footer__sections'>
                    { sections.map((item) =>
                        <a href='' className='footer__section-link link link_black'
                           key={`footer-section-${item.id}`}>{item.name}</a>)}
                </div>
            </div>
        </footer>
    }
}

Footer.propTypes = {
    sections: PropTypes.array.isRequired,
}