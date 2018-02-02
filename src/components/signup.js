import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';

class Signup extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'input-error' : '' }`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    placeholder={field.name}
                    className="form-control"
                    type={field.type}
                    { ...field.input }
                />
                <div className="form-text text-danger">{ touched ? error : '' }</div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.signup(values, () => {
            // this.props.history.push('/clients');
        });
    }

    render() {
        const { handleSubmit, invalid } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 offset-md-4">
                        <div className="form-box">
                            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                <Field
                                    label="Email"
                                    name="email"
                                    type="email"
                                    component={this.renderField} />
                                <Field
                                    label="Password"
                                    name="password"
                                    type="password"
                                    component={this.renderField} />
                                <button className="btn btn-success" disabled={ invalid }>Submit</button>
                                <Link to="/user/login" >login existing user</Link>
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

    if (!values.password) {
        errors.password = "Add a name!";
    }  
    
    return errors;
}

export default reduxForm({
    validate,
    form: 'SignupForm'
})(
    connect(null, { signup })(Signup)
);