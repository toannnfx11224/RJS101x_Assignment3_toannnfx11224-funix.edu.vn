import React, { Component } from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import StaffList from "./StaffListComponent";
import Staff from "./StaffComponent";
import Header from "./Headercomponents";
import DepList from "./DepartmentComponent";
import Footer from "./footercomponents";
import SalaryList from "./SalaryComponent";

import Home from "./Homecomponent";

const mapStateToProps = state => {
  return {
    staffs : state.staffs,
    departments : state.departments
  }
}

class Main extends Component {
  constructor(props) {
    super(props);

    this.updateState = this.updateState.bind(this);

    this.state = {
      staffs : this.props.staffs
    }
  }

  componentDidMount() {
    const data = localStorage.getItem("Staffs");
    if (data) {
      this.setState({ staffs: JSON.parse(data) });
    } else {
      localStorage.setItem("Staffs", JSON.stringify(this.props.staffs));
    }
  }

  updateState(staff) {
    const currentStaffs = this.state.staffs;
    this.setState({
      staffs: currentStaffs.concat([staff]),
    });
    localStorage.setItem("Staffs", JSON.stringify(currentStaffs.concat([staff])));
  }

  render() {
    const StaffWithId = ({ match }) => {
      const staffSelected = this.state.staffs.filter(
        (staff) => staff.id === parseInt(match.params.id, 10)
      )[0];
      return (
        <Staff
          staffSelected={staffSelected}
          department={this.props.departments}
        />
      );
    };

    return (
        <div>
          <Header />
          <Switch>
          <Route
          exact
          path="/"
          component={Home}
          />
            
            <Route
              exact
              path="/staff"
              component={() => (
                <StaffList
                  staffs={this.state.staffs}
                  departments={this.props.departments}
                  updateState={(newStaff) => this.updateState(newStaff)}
                />
              )}
            />
            <Route path="/staff/:id" component={StaffWithId} />
            <Route
              path="/phong-ban"
              component={() => <DepList departments={this.props.departments} />}
            />
            <Route
              path="/bang-luong"
              component={() => <SalaryList staffs={this.props.staffs} />}
            />
            
          </Switch>
          <Footer />
        </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
