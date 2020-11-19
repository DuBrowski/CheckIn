import React from 'react';

class Doctor extends React.Component {

    renderInput = (width=null) => {
        return (
            <div className= "ui transparent input" style={{width}}>
                <input value={this.props.doctor} onChange={this.props.onDoctorChange} type="text" />
            </div>
        );
    }

    render() {
        return (
            <td>
                {this.renderInput()}
            </td>
        );
    }
}

export default Doctor;