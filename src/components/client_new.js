import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createClient } from '../actions/index';

class ClientNew extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'input-error' : '' }`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    placeholder="add client name"
                    className="form-control"
                    type="text"
                    { ...field.input }
                />
                <div className="form-text text-danger">{ touched ? error : '' }</div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createClient(values, () => {
            this.props.history.push('/clients');
        });
    }

    render() {
        const { handleSubmit, invalid } = this.props;

        const token = sessionStorage.getItem('x-auth');
        if (token == null) {
            return <Redirect to={{
                pathname: '/user/login',
                state: { from: this.props.location }
            }}/>
            this.props.history.push('/user/login');
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 offset-md-4">
                        <div className="form-box">
                            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                <Field
                                    label="Client Name"
                                    name="name"
                                    component={this.renderField} />
                                <button className="btn btn-success" disabled={ invalid }>Save</button>
                                <Link to="/clients" className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function validate(values) {
    const errors = {}; //if no properties form is valid

    if (!values.name) {
        errors.name = "Add a name!";
    }  
    
    return errors;
}

export default reduxForm({
    validate,
    form: 'ClientsNewForm'
})(
    connect(null, { createClient })(ClientNew)
);