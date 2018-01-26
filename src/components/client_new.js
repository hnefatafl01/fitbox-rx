import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createClient } from '../actions/index';

class ClientNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    placeholder="add client name"
                    className="form-control"
                    type="text"
                    { ...field.input }
                />
            </div>
        );
    }

    onSubmit(values) {
        this.props.createClient(values, () => {
            this.props.history.push('/clients');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <Field
                                label="Client Name"
                                name="name"
                                component={this.renderField} />
                            <button className="btn btn-success">Save</button>
                            <Link to="/clients" className="btn btn-danger">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'ClientsNewForm'
})(
    connect(null, { createClient })(ClientNew)
);