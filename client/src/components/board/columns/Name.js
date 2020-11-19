import React from 'react';

class Name extends React.Component {

    renderInput = (width=null) => {
        return (
            <div className= "ui transparent input" style={{width}}>
                <input value={this.props.name} onChange={this.props.onNameChange} type="text" />
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

export default Name;