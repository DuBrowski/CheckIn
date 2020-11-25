import React from 'react';
import { Field, reduxForm } from 'redux-form';

class FutureBoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.firstInputRef = React.createRef();
    }

    /* Show error message - need to call with (meta) in renderInput functions
    renderError = ({error, touched}) => {
        if (touched && error) {
            return <div className="ui error message">
                <div className="header">{error}</div>
            </div>
        }
    }
    */

    renderInput = ({input, label, meta}) => {
        const className= `field ${meta.touched && meta.error ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input}  autoComplete="off"/>
            </div>
        );
    }

    renderTimeInput = ({input, label, meta}) => {
        const className= `field ${meta.touched && meta.error ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input}  autoComplete="off" maxLength="4"/>
            </div>
        );
    }

    renderNameInput = ({input, label, meta}) => {
        const className= `field ${meta.touched && meta.error ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input}  autoComplete="off" ref={this.firstInputRef}/>
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
        this.props.reset();
        this.firstInputRef.current.focus();
    }

    render() {
        return (
            <>
                <h4 className= "ui dividing header">Create Future Appointment</h4>
                <form className="ui form error container" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="three fields">
                        <div className="field">
                            <Field name="FName" component={this.renderNameInput} label="Name"/>
                        </div>
                        <div className="field">
                            <Field name="FDoctor" component={this.renderInput} label="Doctor/Appt Type"/>
                        </div>
                        <div className="field">
                            <Field name="FTime" component={this.renderTimeInput} label="Time"/>
                        </div>
                    </div>
                    <Field name="FDescription" component={this.renderInput} label="Description"/>
                    <button className="ui button primary">Submit</button>
                </form>
            </>
        );
    }
}

const validate = (formValues) =>  {
    const errors = {};

    if (!formValues.FName) {errors.FName = "Please populate all fields"}
    if (!formValues.FDoctor) {errors.FDoctor = "Please populate all fields"}
    if (!formValues.FTime) {errors.FTime = "Please populate all fields"}
    if (!formValues.FDescription) {errors.FDescription = "Please populate all fields"}

    return errors;
}

export default reduxForm({
    form: 'FutureBoardForm',
    validate
})(FutureBoardForm);