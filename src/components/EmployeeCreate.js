import React, { Component } from "react";
import { Card, CardSection, Input, Button } from "./common";
import { connect } from "react-redux";
import { employeeUpdate } from "../actions";
import { Picker, Text, View } from "react-native";

const daysOfTheWeek = [
  { label: "Monday", value: "monday" },
  { label: "Tuesday", value: "tuesday" },
  { label: "Wendesday", value: "wednesday" },
  { label: "Thursday", value: "thursday" },
  { label: "Friday", value: "friday" },
  { label: "Saturday", value: "saturday" },
  { label: "Sunday", value: "sunday" }
];

class EmployeeCreate extends Component {
  render() {
    const { name, phone, shift, employeeUpdate } = this.props;
    const { pickerTextStyle } = styles;
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={name}
            onChangeText={value => employeeUpdate({ prop: "name", value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={phone}
            onChangeText={value => employeeUpdate({ prop: "phone", value })}
          />
        </CardSection>
        <CardSection style={{ flexDirection: "column" }}>
          <Text style={pickerTextStyle}>Shift</Text>
          <View
            style={{
              justifyContent: "flex-start",
              flexDirection: "row",
              position: "relative",
              paddingLeft: 15,
              paddingRight: 15
            }}
          >
            <Picker
              style={{ flex: 1 }}
              selectedValue={shift}
              onValueChange={value => employeeUpdate({ prop: "shift", value })}
            >
              {daysOfTheWeek.map(day => (
                <Picker.Item
                  key={day.value}
                  label={day.label}
                  value={day.value}
                />
              ))}
            </Picker>
          </View>
        </CardSection>
        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: { fontSize: 18, paddingLeft: 20 }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeCreate);
