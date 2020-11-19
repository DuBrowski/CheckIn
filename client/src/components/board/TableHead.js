import React from 'react';

class TableHead extends React.Component {

    renderHead = () => {
        return (
            <React.Fragment>
                <thead>
                    <tr>
                        <th>Spot</th>
                        <th>Name</th>
                        <th>Dr</th>
                        <th>Appt/Arrv</th>
                        <th>Tech</th>
                        <th>Rm</th>
                        <th>Description</th>
                    </tr>
                </thead>
            </React.Fragment>
        );
    }

    render() {
        return this.renderHead();
    }
}


export default TableHead;