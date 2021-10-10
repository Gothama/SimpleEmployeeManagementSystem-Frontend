import React, { Component } from "react";
import { Nav, Tab, Col, Row } from "react-bootstrap";
import SensorReadings from "./SensorStatistics/sensorreadings.component";
import AddEmployee from "./addemployee.component";

import UserAccount from "./userAccount.component";
import AddUser from "./signup.component";
import AddAdmin from "./addadmin.component";
import AllEmployees from "./allemployees.component";
import AllAdmins from "./alladmins.component";

export default class SideNav extends Component {
  render() {
    return (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={8} md={8} lg={4}>
              <div style={{ backgroundColor: "#e7d9ea", borderRadius: "10px" }}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="first"
                      style={{
                        height: "80px",
                        paddingTop: "30px",
                        textAlign: "left",
                        fontWeight: "bolder",
                      }}
                    >
                      Add New
                      Employee
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="second"
                      style={{
                        height: "80px",
                        paddingTop: "30px",
                        textAlign: "left",
                        fontWeight: "bolder",
                      }}
                    >
                      Add New Admin
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="third"
                      style={{
                        height: "80px",
                        paddingTop: "30px",
                        textAlign: "left",
                        fontWeight: "bolder",
                      }}
                    >
                            All Employees
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="fourth"
                      style={{
                        height: "80px",
                        paddingTop: "30px",
                        textAlign: "left",
                        fontWeight: "bolder",
                      }}
                    >
                      All Administrators
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>

            <Col sm={4} md={4} lg={8}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                 <AddEmployee name="AllSensors" />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <AddAdmin name="AddSensor" />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <AllEmployees name="UserAccount" />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <AllAdmins name="AddAccount" />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}
