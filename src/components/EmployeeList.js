import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { employeeFetch } from "../actions";

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeeFetch();
  }

  render() {
    return (
      <View>
        <Text>Employee List</Text>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { employeeFetch }
)(EmployeeList);
