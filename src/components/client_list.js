import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link, Route, Redirect } from 'react-router-dom';
import ClientDetail from './client_detail';
import { fetchClients } from '../actions/index';

class ClientList extends Component {
    componentDidMount() {
        this.props.fetchClients();
    }

    renderClients() {
        return _.map(this.props.clients, client => {
            return ( 
                <Link 
                    className="list-group-item" 
                    key={client._id} to={`/clients/${client._id}`}>
                    {client.name}
                </Link>
            );
        });
    }

    handleLogout() {
        sessionStorage.removeItem("x-auth");
        this.props.history.push('/user/login')
    }

    handleAddClient() {
        this.props.history.push('/clients/new');
    }

    render() {
        const token = sessionStorage.getItem('x-auth');
        if (token === null) {
            return <Redirect to={{
                pathname: '/user/login',
                state: { from: this.props.location }
            }}/>
        }

        return (
            <div className="row dashboard__container">
                <div className="col-10 col-md-3">
                    <div className="list-group">
                        <button
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={this.handleAddClient.bind(this)}>
                            Add Client
                        </button>
                        {this.renderClients()}
                    </div>
                </div>
                <div className="col-md-7">
                    <Route  path="/clients/:id" component={ ClientDetail } />
                </div>
                <div className="col-md-2">
                    <button 
                        onClick={this.handleLogout.bind(this)}
                        className="btn btn-outline-secondary">
                        logout
                    </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps, { fetchClients })(ClientList)