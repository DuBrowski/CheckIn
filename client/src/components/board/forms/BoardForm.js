import React from 'react';
import { Field, reduxForm } from 'redux-form';

class BoardForm extends React.Component {

    renderError = ({error, touched}) => {
        if (touched && error) {
            return <div className="ui error message">
                <div className="header">{error}</div>
            </div>
        }
    }

    renderInput = ({input, label, meta}) => {
        const className= `field ${meta.touched && meta.error ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input}  autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            
            <form className="ui form error container" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="name" component={this.renderInput} label="Name"/>
                <Field name="doctor" component={this.renderInput} label="Doctor/Appt Type"/>
                <Field name="time" component={this.renderInput} label="Time"/>
                <Field name="description" component={this.renderInput} label="Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) =>  {
    const errors = {};

    if (!formValues.spot) {errors.spot = "Please populate all fields"}
    if (!formValues.name) {errors.name = "Please populate all fields"}
    if (!formValues.doctor) {errors.doctor = "Please populate all fields"}
    if (!formValues.time) {errors.time = "Please populate all fields"}
    if (!formValues.tech) {errors.tech = "Please populate all fields"}
    if (!formValues.room) {errors.room = "Please populate all fields"}
    if (!formValues.description) {errors.description = "Please populate all fields"}

    return errors;
}

export default reduxForm({
    form: 'boardForm',
    validate
})(BoardForm);