import React from 'react';

import { 
    getCurrentTime,
    getHours,
    getMins
} from '../../../utilities';

class Time extends React.Component {
    state = { arrival: '', arrivalDetailed: ''};

    componentDidMount() {
        this.setState({ 
            arrivalDetailed: getCurrentTime(),
            arrival: getCurrentTime()
                .replace(':','')
                .replace(' AM','')
                .replace(' PM','')
        });
    }

    // Returns wait time in minutes based on arrival time and current time
    getWaitTime = () => {
        const minDiff = getMins(getCurrentTime()) - getMins(this.state.arrivalDetailed);
        const hoursDiff = getHours(getCurrentTime()) - getHours(this.state.arrivalDetailed);
        if (hoursDiff > 0) {
            return (hoursDiff * 60) + minDiff;
        } else {
            return minDiff;
        }
    
    }

    renderWaitTime = () => {
        if (this.state.arrival) {
            return (
                <div>
                    {this.getWaitTime()}
                </div>
            )
        } else return null;
    }

    onArrivalChange = (e => {
        let arrivalDetailed = e.target.value;
        const length = arrivalDetailed.length
        if (length === 3) {
            arrivalDetailed = arrivalDetailed.slice(0,1) + ':' + arrivalDetailed.slice(1,4);
        }
        else if (length === 4) {
            arrivalDetailed = arrivalDetailed.slice(0,2) + ':' + arrivalDetailed.slice(2,5);
        };

        const hour = parseInt(arrivalDetailed);
        if ((hour >= 1 && hour < 7) || hour === 12) {
            arrivalDetailed = arrivalDetailed + ' PM';
        } else arrivalDetailed = arrivalDetailed + ' AM';

        this.setState({
            arrival: e.target.value,
            arrivalDetailed
        });
    })

    renderInput = (width=null) => {
        return (
            <React.Fragment>
                <div className= "ui input" style={{width}}>
                    <input value={this.props.time} onChange={this.props.onTimeChange} type="text" />
                </div>
                <div className= "ui input" style={{width}}>
                    <input value={this.state.arrival} onChange={this.onArrivalChange} maxLength="4" type="text" />
                </div>
                {this.renderWaitTime()}
            </React.Fragment>
        );
    }

    render() {
        return (
            <td>
                {this.renderInput('75px')}
            </td>
        );
    }
}

export default Time;