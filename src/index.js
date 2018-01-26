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
import ClientDetail from './components/client_detail';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path="/clients/:id" component={ ClientDetail } />
                <Route path="/clients" component={ ClientList } />
                <Route path="/" component={ ClientList } />
            </Switch>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
