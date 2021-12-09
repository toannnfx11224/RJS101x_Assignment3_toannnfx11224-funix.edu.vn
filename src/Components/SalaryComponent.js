import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from './footercomponents';
import Header from "./Headercomponents";
import { STAFFS } from "../shared/staffs";


class SalaryStaff extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      staffs: STAFFS,
    
    }
    this.basicSalary = 3000000;
     this.overTimeSalary = 200000;

  }

  render() {
    return (
      <div>
        
          <Container className="mg-top-20" style={{paddingTop:"50px"}}>
            <Row>
              {this.state.staffs.map((item, index)=>{
                return (
                  <Col key={index} lg={4} md={6} sm={12} className="item-slary" style={{paddingBottom:"30px"}} >
                    <Card>
                      <Card.Body>
                        <Card.Title>{ item.name}</Card.Title>
                        <Card.Text>
                          <p>Mã nhân viên: {item.id}</p>
                          <p>Hệ số lương: {item.salaryScale}</p>
                          <p>Số giờ làm thêm: {item.overTime}</p>
                          <div className="slary">
                            <p>Lương: {Math.round((item.salaryScale * this.basicSalary) + (item.overTime * this.overTimeSalary))}</p>
                          </div>
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

export default SalaryStaff;
