import moment from 'moment';

//Out: current time in '00:00 _M' format
export const getCurrentTime = () => moment().format('LT');

//In:  time as '00:00 _M'
//Out: hours portion of time (in military)
export const getHours = (time) => {
    let hours, milTime=getMilTimeFromDetailedTime(time);
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
    return hours;
}

//In:  time as '00:00 _M'
//Out: minutes portion of time
export const getMins = (time) => {
    let min, milTime = getMilTimeFromDetailedTime(time);
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

//In:  time as '00:00 _M'
//Out: Military time as '0000' or '000'
export const getMilTimeFromDetailedTime = (time) => {
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



//In: string of time in 3 or 4 digit form (ex: 330 is 3:30pm). Assumes business hours of 7am to 6:59pm
//Out: string of military time (ex: 1500 is 3:00 pm)
export const getMilTimeFromApptTime = (apptTime) => {
    let min, hour, length = apptTime.length;

    // extract hour and minute portions of time
    if (length === 3) {
        hour = apptTime.slice(0,1);
        min = parseInt(apptTime.slice(1,3));

    } else if (length === 4) {
        hour = apptTime.slice(0,2);
        min = parseInt(apptTime.slice(2,4));
    } else {
        hour = '0';
    }

    if (!(min >= 0 && min < 60 )) {
        min = 0;
    }

    // differentiate morning and afternoon times
    hour = parseInt(hour + '00');
    if (hour >= 100 && hour < 700 ) {
        hour += 1200;
    }
    return hour + min;
}


