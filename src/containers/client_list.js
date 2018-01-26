import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClients } from '../actions/index';
import _ from 'lodash';

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
                    {client.name}
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