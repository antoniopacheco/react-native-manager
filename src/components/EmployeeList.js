import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class EmployeeList extends Component {
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
  {}
)(EmployeeList);
