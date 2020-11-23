import React from 'react';
import { connect } from 'react-redux';
import { createAppt } from '../../../actions';
import BoardForm from './BoardForm';

class BoardRecordCreate extends React.Component {
    state= { isOpen: false };

    onFormSubmit = (formValues) => {
        this.props.createAppt(formValues);
        this.toggleCreateForm();
    }

    toggleCreateForm = () => {
        this.setState({ isOpen: !this.state.isOpen})
    }

    renderCreateState = () => {
        if (this.state.isOpen) {
            return (
                <div className="ui container">
                    <div style={{display:'flex', alignItems:'center'}}>
                        <h2 style={{margin:'2px'}}>New appointment</h2>
                        <button  style={{display: 'inline', marginLeft: '5px'}} className="ui icon button" onClick={this.toggleCreateForm}>
                            Cancel
                        </button>
                    </div>
                    <BoardForm onSubmit={this.onFormSubmit} />
                </div>
            )
        } else {
            return <button className="ui primary button" onClick={this.toggleCreateForm}>New</button>
        }
    }

    render() {
        return (
            <>
                {this.renderCreateState()}
            </>
        );
    }
}


export default connect(null, {createAppt})(BoardRecordCreate);