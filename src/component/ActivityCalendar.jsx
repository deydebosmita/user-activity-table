import React from 'react';
import{Button,Modal}from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022';
import {getDifference} from './helper';
import '../App.css';

export default class ActivityCalendar extends React.Component{

    constructor(){
        super();
        this.state={
            showModal:false,
            match:false
        }
    }

    format=value=>{
        const{data={}}=this.props;
        const{activity_periods:periods=[]}=data;
        const date=moment(value).format('MMM DD YYYY');
        console.log(date);
        periods.map(dateObj=>{
            const{start_time,end_time}=dateObj||{};
            if(start_time.includes(date)){
                this.setState({start:start_time,end:end_time,match:true})
            }
            else this.setState({match:false})
        })

        this.setState({showModal:true});       
    }

render(){
    const{close}=this.props;
    const{start='',end='',match,showModal}=this.state;
    const difference=getDifference(start,end);

    return(
        <div>
            <div style={{display:"grid"}}>
        <Button onClick={close}>X</Button>
            </div>
        <Calendar className='calendar' onClickDay={(value)=>this.format(value)} />
        {showModal &&
         <Modal show={showModal} onHide={close}>
           <Modal.Header>User Activity</Modal.Header>
           <Modal.Body>{match? difference:'User has no activity for the selected date'}</Modal.Body> 
           <Modal.Footer><Button onClick={close}>Close</Button></Modal.Footer>
         </Modal>}
        </div>
    )
 }
}