import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
// import { Link } from 'react-router-dom';
import { fetchClient, deleteClient } from '../actions/index';

class ClientDetail extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchClient(id);
    }

    onDeleteClient() {
        const { id } = this.props.match.params;
        deleteClient(id, () => {
            this.props.history.push('/clients');
        });
    }

    render() {
        const client = this.props.client;
        if (!client) {
            return <div>Loading...</div>
        }

        return (
                <div className="card text-center h-100">
                    <div className="card-body">
                        <h5 className="card-title ">{this.props.client.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{moment(this.props.client.join_date).format('MMMM Do YYYY')}</h6>
                        <hr />
                        <p className="card-text">More Text content</p>
                        <button 
                            onClick={this.onDeleteClient.bind(this)}
                            className="btn btn-danger">Delete Client</button>
                    </div>
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
        fetchClient,
        deleteClient
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetail);

