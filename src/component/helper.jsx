import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022';

export const getDifference=(start_time,end_time)=>{
    const start=moment(newFormat(start_time));
    const end=moment(newFormat(end_time));
    const duration = moment.duration(end.diff(start));
    const difference = duration.asMinutes()>59?duration.asHours().toFixed(2).toString().concat(' Hours'):duration.asMinutes().toFixed(2).toString().concat(' Minutes');
    const display=`User was active for ${difference} today`
    return display;

  }

 export const newFormat=time=>{
    const str=time.split(' ');
    const lst=str.pop();
    const n=lst.indexOf('A')>-1?lst.split('AM').join(' AM'):lst.split('PM').join(' PM');
    return str.join(' ').concat(' ').concat(n);
  }