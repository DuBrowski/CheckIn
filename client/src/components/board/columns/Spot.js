import React from 'react';

class Spot extends React.Component {

    renderInput = (width=null) => {
        return (
            <div className= "ui transparent input" style={{width}}>
                <input value={this.props.spot} onChange={this.props.onSpotChange} maxLength="2" type="text" />
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

export default Spot;