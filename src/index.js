import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';


import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ClientList from './containers/client_list';
import reducers from './reducers';

// add to provider store when using api
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" component={ ClientList } />
                <Route path="/" component={ ClientList } />
            </Switch>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
