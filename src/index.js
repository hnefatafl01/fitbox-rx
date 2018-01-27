import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ClientList from './components/client_list';
import ClientNew from './components/client_new';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/clients/new" component={ ClientNew } />
                <Route path="/clients" component={ ClientList } />
                <Route path="/" component={ ClientList } />
            </Switch>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
