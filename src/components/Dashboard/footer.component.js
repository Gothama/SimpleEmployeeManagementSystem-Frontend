import React, { Component } from 'react'
import { Card } from 'react-bootstrap';


export default class Footer extends Component {
    render() {
        return (
            <div>
                <Card style={{ backgroundColor: "white" }}>
                    <Card.Body>
                        <div style={{ textAlign: "center", padding: "50px" }}>
                            All Rights Reserved - &copy;Employee Details Management System &#10084;
                        </div>

                    </Card.Body>
                </Card>
            </div>
        )
    }
}
