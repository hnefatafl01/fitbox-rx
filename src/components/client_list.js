import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchClients } from '../actions/index';

class ClientList extends Component {
    componentDidMount() {
        this.props.fetchClients();
    }

    renderClients() {
        return _.map(this.props.clients, client => {
            return ( 
                <li
                    className="list-group-item" 
                    key={client._id}>
                    <Link to={`/clients/${client._id}`}>
                     {client.name}
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-3">
                    <ul className="list-group">
                        {this.renderClients()}
                    </ul>
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