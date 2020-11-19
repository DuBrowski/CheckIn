import React from 'react';
import { connect } from 'react-redux';
import { createAppt } from '../../../actions';
import BoardForm from './BoardForm';

class BoardRecordCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createAppt(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create Board Records</h3>
                <BoardForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}


export default connect(null, {createAppt})(BoardRecordCreate);