import React from 'react';
import { Field, reduxForm } from 'redux-form';

class BoardForm extends React.Component {

    renderError = ({error, touched}) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
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
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="four fields">
                    <div className="field">
                        <Field name="spot" component={this.renderInput} label="Spot"/>
                    </div>
                    <div className="field">
                        <Field name="name" component={this.renderInput} label="Name"/>
                    </div>
                    <div className="field">
                        <Field name="doctor" component={this.renderInput} label="Doctor/Appt Type"/>
                    </div>
                    <div className="field">
                        <Field name="time" component={this.renderInput} label="Time"/>
                    </div>
                </div>
                <div className="field">
                        <Field name="description" component={this.renderInput} label="Description"/>
                </div>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) =>  {
    const errors = {};

    if (!formValues.spot) {errors.spot = "Please enter a spot"}
    if (!formValues.name) {errors.name = "Please enter a name"}

    return errors;
}

export default reduxForm({
    form: 'boardForm',
    validate
})(BoardForm);