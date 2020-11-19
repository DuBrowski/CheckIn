import React from 'react';

class Room extends React.Component {

    renderInput = (width=null) => {
        return (
            <div className= "ui transparent input" style={{width}}>
                <input value={this.props.room} onChange={this.props.onRoomChange} maxLength="2" type="text" />
            </div>
        );
    }

    render() {
        return (
            <td>
                {this.renderInput('30px')}
            </td>
        );
    }
}

export default Room;