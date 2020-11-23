import React from 'react';
import { connect } from 'react-redux';
import { fetchAppts, editAppt } from '../../actions';

import '../../styles/Board.css';

import BoardRecordCreate from './forms/BoardRecordCreate';
import TableHead from './TableHead';
import TableRow from './TableRow';

class Board extends React.Component {
    componentDidMount() {
        this.props.fetchAppts();

        /* Enable live updates
        this.intervalID = setInterval(() => {
            this.props.fetchAppts();
        }, 3000);
        */
    }

    onValChange = vals => {
        this.props.editAppt(vals, vals.id);
    }

    renderRows() {
        if (!this.props.appts) {
            return <div>Loading...</div>
        }
        const rows = this.props.appts.sort((a, b) => {
            return parseInt(a.spot) > parseInt(b.spot) ? 1 : -1;
        }).map(appt => {
            return (
                <TableRow
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
                        <BoardRecordCreate/>
                        <div className="ui raised segments">
                        <table className="ui celled table unstackable">
                            <TableHead/>
                            {this.renderRows()}
                        </table>
                        </div>
                    </div>
            </React.Fragment>
        )
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
}

const mapStateToProps = (state) => {
    return {
        appts: Object.values(state.appts)
    }
}

export default connect(mapStateToProps, { fetchAppts, editAppt })(Board);