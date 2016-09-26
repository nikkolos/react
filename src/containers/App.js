import React, {Component} from "react";
import {connect} from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";

class App extends Component {
    render() {
        const {basket, sections} = this.props;
        return <div>
            <div className='wrapper'>
                <Header sections={sections.sections} basket={basket.basket}/>
                {this.props.children}
            </div>
            <Footer sections={sections.sections}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        basket: state.basket,
        sections: state.sections,
    }
}


export default connect(mapStateToProps)(App)