import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Footer from './footercomponents';
import Header from "./Headercomponents";
import { DEPARTMENTS } from "../shared/staffs";

class Department extends React.Component {
  constructor(props) {
    super(props)
    this.DEPARTMENTS = DEPARTMENTS;
  }

  render() {
    return (
      <div>

          <Container className="mg-top-20">
            <Row>
              {this.DEPARTMENTS.map((item, index)=>{
                return (
                  <Col key={index} lg={4} md={6} sm={12} className="item-department" style={{ marginTop: "50px",padding:"0px 30px 30px 0"}}>
                    <Card>
                      <Card.Body>
                        <Card.Title>{ item.name}</Card.Title>
                        <Card.Text>
                          <p>Số lượng nhân viên: {item.numberOfStaff}</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </Container>
    
      </div>
    )
  }
}

export default Department;