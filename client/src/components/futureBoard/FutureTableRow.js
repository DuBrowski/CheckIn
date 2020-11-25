import React from 'react';
import { connect } from 'react-redux';

import Name from '../board/columns/Name';
import Doctor from '../board/columns/Doctor';
import FutureTime from './columns/FutureTime';
import Description from '../board/columns/Description';
import ActionButtons from './columns/ActionButtons';

class FutureTableRow extends React.Component {

    onNameChange = (e) => { 
        let newProps = {...this.props.appt, FName: e.target.value};
        console.log(newProps);
        this.props.onValChange(newProps);
    }

    onDoctorChange = (e) => { 
        let newProps = {...this.props.appt, FDoctor: e.target.value};
        this.props.onValChange(newProps);
    }

    onFutureTimeChange = (e) => { 
        let newProps = {...this.props.appt, FTime: e.target.value};
        this.props.onValChange(newProps);
    }

    onDescriptionChange = (e) => { 
        let newProps = {...this.props.appt, FDescription: e.target.value};
        this.props.onValChange(newProps);
    }


    render() {
        if (!this.props.appt) {
            return (
                <tr>
                    <td>Loading...</td>
                </tr>
            );  
        }

        return (
            <tr>
                <Name onNameChange={this.onNameChange} name={this.props.appt.FName}/>
                <Doctor onDoctorChange={this.onDoctorChange} doctor={this.props.appt.FDoctor}/>
                <FutureTime onFutureTimeChange={this.onFutureTimeChange} time={this.props.appt.FTime}/>
                <Description onDescriptionChange={this.onDescriptionChange} description={this.props.appt.FDescription}/>
                <ActionButtons/>
            </tr>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        appt: state.future[ownProps.id]
    }
}

export default connect(mapStateToProps)(FutureTableRow);