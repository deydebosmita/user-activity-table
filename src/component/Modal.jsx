import React from 'react';
import{Button,Modal}from 'react-bootstrap';
import ActivityCalendar from './ActivityCalendar';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022';
import {getDifference} from './helper';
import '../App.css';

export default class UserModal extends React.Component{

  constructor(){
    super();
    this.state={
      show:false,
      showCalender:false
    }
  }

  showCalender(){
    this.setState({showCalender:true});
  }



render(){
  const{showModal,hide,data}=this.props;
  const{tz='',activity_periods:periods=[]}=data;
  console.log(this.props);
  const{showCalender}=this.state;
  const b=moment(new Date()).format("YYYY-MM-DD");
  const c=moment.tz(b,tz).format('MMM DD YYYY');
  const {start_time='',end_time=''}=periods[periods.length-1]||[];
  const difference=getDifference(start_time,end_time);

  

  
  return (
    <div>
      <Modal className='special_modal' show={showModal} onHide={hide} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className='text'>User Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text'>{showCalender?<ActivityCalendar close={()=>this.setState({showCalender:false})} data={data}/>:start_time.includes(c)?difference:'User has no activity to show'}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>this.showCalender()}>
            Other Activities
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
}



  