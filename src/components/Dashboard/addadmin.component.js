
import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Form } from "react-bootstrap";
import Swal from "sweetalert2";

export default class AddAdmin extends Component {
  constructor(props) {
    super(props);

  }

  state={
    nic:"",
    name:"",
    password:"",
    username:"",
    telephonenumber:"",
    position:""
  }


  onChangenic=(event)=> {
    this.setState({
      nic: event.target.value,
    });
  }

  onChangeName=(event)=> {
    this.setState({
      name: event.target.value,
    });
  }

  successfulmessage = (msg) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: msg,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  unsuccessfulmessage = (msg) => {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: msg,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  onChangepassword=(event)=> {
    this.setState({
      password: event.target.value,
    });
  }
  onChangeusername=(event)=> {
    this.setState({
      username: event.target.value,
    });
  }
  
  onChangeposition=(event)=> {
    this.setState({
      position: event.target.value,
    });
  }

  
  onChangetelephonenumber=(event)=> {
    this.setState({
      telephonenumber: event.target.value,
    });
  }

  onSubmit = () => {
    console.log("asdasd");
    const employee = {
      nic: this.state.nic,
      name: this.state.name,
      position: this.state.position,
      telephonenumber: this.state.telephonenumber,
      username: this.state.username,
      password: this.state.password
    };
    console.log(employee);
    axios
      .post("http://localhost:9090/admin/addemployee", {
        nic: this.state.nic,
        name: this.state.name,
        position: this.state.position,
        telephoneNumber: this.state.telephonenumber,
        username: this.state.username,
        password: this.state.password
      })
      .then((res) => {
        console.log(res.data);

        if (res.data !== null) {
          this.successfulmessage("Administrator Added Successfull");
        } else {
          {
            this.unsuccessfulmessage("Unsuccessfull");
          }
        }
      })
      .catch((err) => console.error(err));
  };


  onReset = () => {
    this.setState({
      nic:"",
      name:"",
      password:"",
      username:"",
      telephonenumber:"",
      position:""
    });
  };

  render() {
    const { nic, name, password,username, position,telephonenumber } = this.state;
    return (
      <div>
        <div
          style={{
            height: "100%",
            width: "1000px",
            backgroundColor: "#e7d9ea",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <Container>
            <h1
              style={{ marginBottom: "20px", fontSize: "large" }}
              className="text-center"
            >
              Add New Administrator
            </h1>


            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>NIC</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter NIC"
                    value={nic}
                    onChange={this.onChangenic}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChangeName}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Position</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Position"
                    value={position}
                    onChange={this.onChangeposition}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Telephone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Telephone number"
                    value={telephonenumber}
                    onChange={this.onChangetelephonenumber}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={this.onChangeusername}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter password"
                    value={password}
                    onChange={this.onChangepassword}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="text-center" style={{ margin: "5px" }}>
              <Col className="text-center">
                <button
                  type="button"
                  className="btn btn-primary btn-sm "
                  onClick={this.onSubmit}
                  style={{ width: "50%" }}
                >
                  Add
                </button>
              </Col>
            </Row>
            <Row className="text-center" style={{ margin: "5px" }}>
              <Col>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                  onClick={this.onReset}
                  style={{ width: "50%" }}
                >
                  Clear
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
