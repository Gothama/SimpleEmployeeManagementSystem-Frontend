import React, { Component } from 'react'
import { Table, Card, Button } from 'react-bootstrap';



import axios from 'axios';

const siAPI1= axios.create({
    baseURL :`http://localhost:9090/admin/viewadmin`
  })


export default class AllAdmins extends Component {

constructor(props){
  super(props);
  console.log("Alert" + this.props.sensorID)
  this.getAllEmployees();
}

state={
  employees:[]
}

getAllEmployees=()=>{
  siAPI1.post(`/`).then(res=>{
      console.log(res.data)
      this.setState({
        employees:res.data
      })
  }).catch(err => {
   window.alert(err)
})
}


    render() {
        return (
<div style={{marginTop:"20px",width:"800px", padding: "18px"}}>
<Card style={{ backgroundColor: "white", borderRadius:"10px"}}>
    <Card.Body>
            <div>
                <Table striped bordered hover size="sm" style={{width:"700px"}}>
  <thead>
    <tr>
      <th>#</th>
      <th>AdminID</th>
      <th>Name</th>
      <th>Password</th>
      <th>Username</th>
      <th>Position</th>
      <th>Telephone Number</th>
    </tr>
  </thead>
  <tbody>
  {this.state.employees.map(r=>
    <tr>
      <td>1</td>
      <td>{r.adminID}</td>
      <td>{r.name}</td>
      <td>{r.password}</td>
      <td>{r.username}</td>
      <td>{r.position}</td>
      <td>{r.telephoneNumber}</td>
    </tr>
  )}
    
   
  </tbody>
</Table>

            </div></Card.Body>
</Card> </div>
        )
    }
}
