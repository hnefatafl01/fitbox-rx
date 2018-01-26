import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {fetchClient} from '../actions/index';

class ClientDetail extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchClient(id);
    }

    render() {
        const client = this.props.client;
        if (!client) {
            return <div>Loading...</div>
        }

        return (
            <div className="container">
                <h3>{this.props.client.name}</h3>
            </div>
        );
    }
}

function mapStateToProps({ clients }, ownProps) {
    return {
        client: clients[ownProps.match.params.id]
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchClient
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetail);

