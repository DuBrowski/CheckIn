import React from 'react';

class FutureTableHead extends React.Component {
    render() {
        return (
            <React.Fragment>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Dr</th>
                        <th>Time</th>
                        <th>Description</th>
                    </tr>
                </thead>
            </React.Fragment>
        );
    }
}

export default FutureTableHead;