import React from 'react';
import { connect } from 'react-redux';
import { createFutureAppt } from '../../../actions';
import FutureBoardForm from './FutureBoardForm';
import FutureBoard from '../../futureBoard/FutureBoard';
import ScheduleLoader from '../../futureBoard/ScheduleLoader';

class FutureBoardCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createFutureAppt(formValues);
    }

    render() {
        return (
            <div className="ui container">
                <FutureBoardForm onSubmit={this.onSubmit} />
                <br/>
                <ScheduleLoader/>
                <h2>Pre-loaded Appointments</h2>
                <FutureBoard/>
            </div>
        );
    }
}


export default connect(null, {createFutureAppt})(FutureBoardCreate);