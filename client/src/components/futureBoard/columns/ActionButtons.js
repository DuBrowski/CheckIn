import React from 'react';

class ActionButtons extends React.Component {
    render() {
        return (
            <td>
                <div style={{marginLeft: "25%"}}>
                    <i style={{color:"green", marginRight:""}} className="check icon"/>
                    <i style={{color:"red"}} className="trash icon"/>

                </div>
            </td>
        );
    }
}

export default ActionButtons;