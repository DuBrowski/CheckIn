import React from 'react';

class Description extends React.Component {

    renderInput = (style) => {
        return (
            <div className= "ui transparent input">
                <textarea value={this.props.description} onChange={this.props.onDescriptionChange} type="text" 
                style={{...style}}/>
            </div>
        );
    }

    render() {
        return (
            <td>
                {this.renderInput({width: '500px', height: '40px'})}
            </td>
        );
    }
}

export default Description;