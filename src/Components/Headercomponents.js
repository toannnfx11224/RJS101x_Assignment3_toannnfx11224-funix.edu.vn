import React, { Component } from 'react';

import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import {Link} from 'react-router-dom';


class Headers extends Component {
 

  render() {
      return(
          <div>
              <Navbar dark expand="md">
                  <div className="container">
                      
                      <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
         
                          <Nav navbar >
                          <NavItem >
                              <Link className="nav-link"  to='/'><span className="fa fa-home fa-lg"></span> Home</Link>
                          </NavItem>
                          <NavItem>
                              <Link className="nav-link" to='/staff'><span className="fa fa-info fa-lg"></span>Nhân Viên</Link>
                          </NavItem>
                          <NavItem>
                              <Link className="nav-link"  to='/phong-ban'><span className="fa fa-list fa-lg"></span> Phòng Ban</Link>
                          </NavItem>
                          <NavItem>
                              <Link className="nav-link" to='/bang-luong'><span className="fa fa-address-card fa-lg"></span> Lương</Link>
                          </NavItem>
                          </Nav>
                
                  </div>
              </Navbar>
              
          </div>
      );
  }
}
export default Headers;