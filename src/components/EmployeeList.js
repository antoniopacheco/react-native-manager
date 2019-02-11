import React, { Component } from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import { employeeFetch } from "../actions";
import EmployeeListItem from "./EmployeeListItem";

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeeFetch();
  }

  renderRow({ item }) {
    return <EmployeeListItem employee={item} />;
  }

  render() {
    return (
      <FlatList
        keyExtractor={employee => employee.uid}
        data={this.props.employees}
        renderItem={this.renderRow}
      />
    );
  }
}
const mapStateToProps = state => {
  const employees = [];
  for (let uid in state.employees) {
    employees.push({ ...state.employees[uid], uid });
  }
  return { employees };
};

export default connect(
  mapStateToProps,
  { employeeFetch }
)(EmployeeList);
