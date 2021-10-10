import React, { Component } from 'react'
import { Table, Card, Button } from 'react-bootstrap';



import axios from 'axios';

const siAPI1= axios.create({
    baseURL :`http://localhost:9090/employee/viewemployee`
  })

  const siAPI2= axios.create({
    baseURL :`http://localhost:9090/employee`
  })


export default class AllEmployees extends Component {

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

deleteemployee=(id)=>{
  siAPI2.post(`/delete/`+ id).then(res=>{
      console.log(res.data)
   if(res.data == "deleted"){
    this.getAllEmployees();
   }
      
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
                <Table striped bordered hover size="sm" style={{width:"720px"}}>
  <thead>
    <tr>
      <th>#</th>
      <th>EmployeeID</th>
      <th>NIC</th>
      <th>Name</th>
      <th>Salary</th>
      <th>Position</th>
      <th>Telephone Number</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  {this.state.employees.map(r=>
    <tr>
      <td>1</td>
      <td>{r.employeeID}</td>
      <td>{r.nic}</td>
      <td>{r.name}</td>
      <td>{r.salary}</td>
      <td>{r.position}</td>
      <td>{r.telephoneNumber}</td>
      <td><Button variant="danger" onClick={() => this.deleteemployee(r.employeeID)}>Unregister</Button></td>
    </tr>
  )}
    
   
  </tbody>
</Table>

            </div></Card.Body>
</Card> </div>
        )
    }
}
