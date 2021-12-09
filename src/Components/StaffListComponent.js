import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Label,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors} from 'react-redux-form';

// form validation 
const required = (value) => value && value.length > 0 ;
const maxlength = (len) => (value) => !(value) || (value.length <= len);
const isNumber = (value) => !(value) ||!isNaN(Number(value));

const StaffList = ({ staffs, updateState }) => {
  // set state for name & search for search function
  const [Name, setName] = useState(null);
  const [SEARCH, setSEARCH] = useState(null);

  // set state for doB & startDate
  const [doB, setdoB] = useState('');
  const [startDate, setstartDate] = useState('');

  // set state to toggle add modal
  const [modalOpen, setModalOpen] = useState(false);

  // render full staff list
  const STAFFS = staffs.map((staff) => {
    return (
      <Link
        to={`/staff/${staff.id}`}
        className="col col-6 col-md-4 col-lg-2 text-dark mb-2"
        style={{ textDecoration: "none" }}
      >
        <div key={staff.id}>
          <Card tag="li" className="mt-2 p-1">
            <CardImg src={staff.image}></CardImg>
            <CardText>{staff.name}</CardText>
          </Card>
        </div>
      </Link>
    );
  });

  // render search by name results
  const handleSearch = (event, Name) => {
    event.preventDefault();
    const name = Name.value;
    const X = staffs
      .filter((staff) => {
        if (name === "") {
          return staff;
        } else if (staff.name.toLowerCase().includes(name.toLowerCase())) {
          return staff;
        }
      })
      .map((staff) => {
        return (
          <Link
            to={`/staff/${staff.id}`}
            className="col col-6 col-md-4 col-lg-2 text-dark mb-2"
            style={{ textDecoration: "none" }}
          >
            <div key={staff.id}>
              <Card tag="li" className="mt-2 p-1">
                <CardImg src={staff.image}></CardImg>
                <CardText>{staff.name}</CardText>
              </Card>
            </div>
          </Link>
        );
      });
    setSEARCH(X);
    Name.value = "";
  };

  // handle add submit
   const handleSubmit = (values) => {

    const newStaff = {
      id: staffs.length,
      name: values.name,
      doB: doB,
      startDate: startDate,
      department: values.department,
      salaryScale: values.salaryScale,
      annualLeave: values.annualLeave,
      overTime: values.overTime,
      image: "/assets/images/alberto.png",
    };

    setModalOpen(!modalOpen);

    updateState(newStaff);
   };

  // return part
  return (
    <div className="container">
      <h1 className="pb-3 text-dark">Danh sách nhân viên</h1>

      <div className="row mb-1">
        {/* Add new button */}
        

        {/* Seach form */}
        <div className="col-md-8">
          <form className="form-inline">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nhập tên nhân viên"
              ref={(input) => {
                return setName(input);
              }}
              className="form-control mr-2 mb-1 mt-1"
            ></input>
            <Button
              type="submit"
              onClick={(event) => handleSearch(event, Name)}
              className="btn btn-info"
            >
              Tìm
            </Button>
            
          <Button
            className="btn btn-info"
            onClick={() => setModalOpen(!modalOpen)}
            style={{marginLeft:"10px"}}
          >
           Thêm 
          </Button>
        
          </form>
        </div>
      </div>

      

     
      <div className="row">
        {SEARCH === null
          ? STAFFS
          : SEARCH.length == 0
          ? "Không tìm thấy nhân viên nào"
          : SEARCH}
      </div>

      {/* Modal */}

      <div>
        <Modal
          isOpen={modalOpen}
          toggle={(modalOpen) => setModalOpen(!modalOpen)}
        >
          <ModalHeader
            isOpen={modalOpen}
            toggle={(modalOpen) => setModalOpen(!modalOpen)}
          >
            Thêm nhân viên
          </ModalHeader>
          <ModalBody>
            <LocalForm
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              <Row className="mt-2">
                <Label htmlFor="name" md={3}>
                  Ten nhan vien
                </Label>
                <Col md={9}>
                  <Control.text
                    model=".name"
                    id="name"
                    name="name"
                    className="form-control"
                    validators={{ required, maxLength: maxlength(15) }}
                  ></Control.text>
                  <Errors
                    model=".name"
                    show={(field) => field.touched && !field.focus}
                    messages={{
                      required: "Yêu cầu nhập.",
                      maxLength: "Hãy nhập dưới 15 ký tự.",
                    }}
                    className="text-danger"
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                <Label htmlFor="doB" md={3}>
                  Ngay sinh
                </Label>
                <Col md={9}>
                  <Input
                    type="date"
                    id="doB"
                    name="doB"
                    value={doB}
                    onChange={(event) => {
                      return setdoB(event.target.value);
                    }}
                  ></Input>
                </Col>
              </Row>
              <Row className="mt-2">
                <Label htmlFor="startDate" md={3}>
                  Ngay bat dau
                </Label>
                <Col md={9}>
                  <Input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={startDate}
                    onChange={(event) => {
                      return setstartDate(event.target.value);
                    }}
                  ></Input>
                </Col>
              </Row>
              <Row className="mt-2">
                <Label htmlFor="department" md={3}>
                  Phong ban
                </Label>
                <Col md={9}>
                  <Control.select
                    model=".department"
                    id="department"
                    name="department"
                    className="form-control"
                    defaultValue="Sale"
                  >
                    <option>Sale</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="mt-2">
                <Label htmlFor="salaryScale" md={3}>
                  He so luong
                </Label>
                <Col md={9}>
                  <Control.text
                    model=".salaryScale"
                    id="salaryScale"
                    name="salaryScale"
                    className="form-control"
                    validators={{ required, isNumber }}
                  ></Control.text>
                  <Errors
                    model=".salaryScale"
                    show={(field) => field.touched && !field.focus}
                    messages={{
                      required: "Yêu cầu nhập.",
                      isNumber: "Hãy nhập số.",
                    }}
                    className="text-danger"
                  ></Errors>
                </Col>
              </Row>
              <Row className="mt-2">
                <Label htmlFor="annualLeave" md={3}>
                  Nghi phep
                </Label>
                <Col md={9}>
                  <Control.text
                    model=".annualLeave"
                    id="annualLeave"
                    name="annualLeave"
                    className="form-control"
                    validators={{ required, isNumber }}
                  ></Control.text>
                  <Errors
                    model=".annualLeave"
                    show={(field) => field.touched && !field.focus}
                    messages={{
                      required: "Yêu cầu nhập.",
                      isNumber: "Hãy nhập số.",
                    }}
                    className="text-danger"
                  ></Errors>
                </Col>
              </Row>
              <Row className="mt-2">
                <Label htmlFor="overTime" md={3}>
                  Lam them gio
                </Label>
                <Col md={9}>
                  <Control.text
                    model=".overTime"
                    id="overTime"
                    name="overTime"
                    className="form-control"
                    validators={{ required, isNumber }}
                  ></Control.text>
                  <Errors
                    model=".overTime"
                    show={(field) => field.touched && !field.focus}
                    messages={{
                      required: "Yêu cầu nhập.",
                      isNumber: "Hãy nhập số.",
                    }}
                    className="text-danger"
                  ></Errors>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col md={{ size: 3, offset: 3 }}>
                  <Button type="submit" className="btn btn-info">
                    Thêm
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default StaffList;
