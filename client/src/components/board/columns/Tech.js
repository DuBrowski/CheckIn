import React from 'react';

class Tech extends React.Component {

    renderInput = (width=null) => {
        return (
            <div className= "ui transparent input" style={{width}}>
                <input value={this.props.tech} onChange={this.props.onTechChange} type="text" />
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

export default Tech;