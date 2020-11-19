import React from 'react';
import { connect } from 'react-redux';

import Spot from './columns/Spot';
import Name from './columns/Name';
import Doctor from './columns/Doctor';
import Time from './columns/Time';
import Tech from './columns/Tech';
import Room from './columns/Room';
import Description from './columns/Description';

import'../../styles/Board.css';


class TableRow extends React.Component {

    onSpotChange = (e) => { 
        let newProps = {...this.props.appt, spot: e.target.value};
        this.props.onValChange(newProps);
    }

    onNameChange = (e) => { 
        let newProps = {...this.props.appt, name: e.target.value};
        this.props.onValChange(newProps);
    }

    onDoctorChange = (e) => { 
        let newProps = {...this.props.appt, doctor: e.target.value};
        this.props.onValChange(newProps);
    }
    onTimeChange = (e) => { 
        let newProps = {...this.props.appt, time: e.target.value};
        this.props.onValChange(newProps);
    }
    onTechChange = (e) => { 
        let newProps = {...this.props.appt, tech: e.target.value};
        this.props.onValChange(newProps);
    }
    onRoomChange = (e) => { 
        let newProps = {...this.props.appt, room: e.target.value};
        this.props.onValChange(newProps);
    }
    onDescriptionChange = (e) => { 
        let newProps = {...this.props.appt, description: e.target.value};
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
                <Spot onSpotChange={this.onSpotChange} spot={this.props.appt.spot}/>
                <Name onNameChange={this.onNameChange} name={this.props.appt.name}/>
                <Doctor onDoctorChange={this.onDoctorChange} doctor={this.props.appt.doctor}/>
                <Time onTimeChange={this.onTimeChange} time={this.props.appt.time}/>
                <Tech onTechChange={this.onTechChange} tech={this.props.appt.tech}/>
                <Room onRoomChange={this.onRoomChange} room={this.props.appt.room}/>
                <Description onDescriptionChange={this.onDescriptionChange} description={this.props.appt.description}/>
            </tr>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        appt: state.appts[ownProps.id]
    }
}

export default connect(mapStateToProps)(TableRow);