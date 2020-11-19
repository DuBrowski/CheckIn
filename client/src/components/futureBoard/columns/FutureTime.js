import React from 'react';

class FutureTime extends React.Component {

    renderInput = (width=null) => {
        return (
            <div className= "ui transparent input" style={{width}}>
                <input value={this.props.time} onChange={this.props.onFutureTimeChange} type="text" maxLength="4"/>
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

export default FutureTime;