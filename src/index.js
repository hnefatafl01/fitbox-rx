import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore, applyMiddleware, compose } from 'redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ClientList from './components/client_list';
import ClientNew from './components/client_new';
import Login from './components/user_login';
import Signup from './components/signup';
import reducers from './reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(promise)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/user/login" component={ Login } />
                <Route path="/user/signup" component={ Signup } />
                <Route exact={true} path="/clients/new" component={ ClientNew } />
                <Route path="/clients" component={ ClientList } />
                <Route path="/" component={ ClientList } />
            </Switch>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
