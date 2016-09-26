import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import App from "./containers/App";
import Content from "./containers/Content";
import Basket from "./containers/Basket";
import "./styles/app.css";
import configureStore from "./store/configureStore";
const store = configureStore();
const history = browserHistory;
render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Content} />
                <Route path="basket" component={Basket}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
/*{/!*<div className='app'>
 <App />
 </div>*!/}*/