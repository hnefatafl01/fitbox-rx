import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
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

    handleAddClient() {
        this.props.history.push('/clients/new');
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-3">
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