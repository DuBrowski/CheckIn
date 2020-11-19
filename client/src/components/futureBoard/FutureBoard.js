import React from 'react';
import { connect } from 'react-redux';
import { fetchFutureAppts, editFutureAppt } from '../../actions';
import { getMilTimeFromApptTime } from '../../utilities'

import FutureTableHead from './FutureTableHead';
import FutureTableRow from './FutureTableRow';

class FutureBoard extends React.Component {

    componentDidMount() {
        this.props.fetchFutureAppts();

        /* Enable live updates
        this.intervalID = setInterval(() => {
            this.props.fetchAppts();
        }, 3000);
        */
    }


    onValChange = vals => {
        this.props.editFutureAppt(vals, vals.id);
    }

    renderRows() {
        if (!this.props.appts) {
            return <div>Loading...</div>
        }
        const rows = this.props.appts.sort((a, b) => {
            return getMilTimeFromApptTime(a.FTime) > getMilTimeFromApptTime(b.FTime) ? 1 : -1;
        }).map(appt => {
            console.log(appt);
            return (
                <FutureTableRow
                    onValChange={this.onValChange} 
                    key={appt.id}
                    id={appt.id}
                />
            );
        });
        
        return (
            <tbody>
                {rows}
            </tbody>
        );
    }

    render() {
        return (
            <React.Fragment>
                    <div>
                        <div className="ui raised segments">
                        <table className="ui celled table unstackable">
                            <FutureTableHead/>
                            {this.renderRows()}
                        </table>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        appts: Object.values(state.future)
    }
}

export default connect(mapStateToProps, { fetchFutureAppts, editFutureAppt })(FutureBoard);