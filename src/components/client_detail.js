import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
// import { Link } from 'react-router-dom';
import PlanOverview from './plan_overview';
import SessionNew from './session_new';
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
                    <h5 className="card-title">
                        {this.props.client.name}
                        <button 
                            onClick={this.onDeleteClient.bind(this)}
                            className="btn btn-danger position-absolute top-right">
                            Delete Client
                        </button>
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {moment(this.props.client.join_date).format('MMMM Do YYYY')}
                    </h6>
                    <hr />
                    <p className="card-text">Client Training Overview</p>
                    <Switch>
                      <Route path="/plan/add" component={SessionNew} />
                      <Route path="/plan" component={PlanOverview} />
                    </Switch>
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

