import React from 'react';
// import Config from '../config/testJson';
import '../App.css';
import { Table,Button} from 'react-bootstrap';
import UserModal from './Modal';

const URL="http://localhost:3000/members";

export default class User extends React.Component{

    constructor(props){
        super(props);
        this.state={
            showModal:false,
            userData:[],
            data:{},
        }
    }

    async componentDidMount(){
      const res = await fetch(URL);
      res
     .json()
     .then(data=>this.setState({userData:data}))
    }
   
    render(){
        // const userData=Config.members||[];
        const{userData}=this.state;
        const {showModal,data}=this.state;

      return(     
       <div>
         <div style={{textAlign:"center"}}><h1>User Activity</h1></div>
       {!!userData.length ? <Table striped bordered hover variant="dark">
       <thead>
         <tr>
           <th>#</th>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Time Zone</th>
           <th>Activity</th>
         </tr>
       </thead>
       <tbody>
            {userData.map((user,index)=>{
                const {id,real_name:name='',tz=''}=user;
            return( 
            <tr key={id}>
            <td>{index}</td>
            <td>{name.split(' ')[0]}</td>
            <td>{name.split(' ')[1]}</td>
            <td>{tz}</td>
            <td><Button onClick={()=>this.setState({showModal:true, data:user})}>view</Button></td>
            </tr>
            )})}
       </tbody>
     </Table>:<div style={{textAlign:"center"}}>No data to show</div>}
     <UserModal showModal={showModal} hide={()=>this.setState({showModal:false})} showCalender={()=>this.setState({showCalender:true})} data={data}/>
      </div>  
        )
    }
}