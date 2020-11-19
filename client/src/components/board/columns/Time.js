import React from 'react';
import moment from 'moment';

class Time extends React.Component {
    state = { arrival: '', arrivalDetailed: ''};

    componentDidMount() {
        this.setState({ 
            arrivalDetailed: this.getTime(),
            arrival: this.getTime()
                .replace(':','')
                .replace(' AM','')
                .replace(' PM','')
        });
    }

    //In:  time as '00:00 _M'
    //Out: Military time as '0000' or '000'
    getMilTime = (time) => {
        const isTwelve = parseInt(time.slice(0,2)) === 12 ? true : false;
        const milTime = time
            .replace(':','')
            .replace('AM','');
        let milTimeNum = parseInt(milTime);
        if (time.includes('PM') && !isTwelve) {
            milTimeNum+=1200
        }
        return milTimeNum.toString();
    }

    getTime = () => {
        return moment().format('LT');
    }

    //In:  time as '00:00 _M'
    //Out: hours portion of time (in military)
    getHours = (time) => {
        let hours, milTime=this.getMilTime(time);
        let length = milTime.length;
        if (length === 4) {
            hours = parseInt(milTime.slice(0,2));
        }
        else if (length === 3) {
            hours = parseInt(milTime.slice(0,1)); 
            if (hours >= 1 && hours < 7) {
                hours +=12
            }
        } else {
            hours = '';
        }
        console.log(`final hour: ${hours}`)
        return hours;
    }

    //In:  time as '00:00 _M'
    //Out: minutes portion of time
    getMins = (time) => {
        let min, milTime=this.getMilTime(time);
        let length = milTime.length;
        if (length === 4) {
            min = parseInt(milTime.slice(2,4));
        } else if (length === 3) {
            min = parseInt(milTime.slice(1,3)); 
        } else {
            min = '';
        }

        return min;
    }

    // Returns wait time in minutes based on arrival time and current time
    getWaitTime = () => {
        const minDiff = this.getMins(this.getTime()) - this.getMins(this.state.arrivalDetailed);
        const hoursDiff = this.getHours(this.getTime()) - this.getHours(this.state.arrivalDetailed);
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