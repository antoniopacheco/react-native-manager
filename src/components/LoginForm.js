import React, { Component } from "react";
import { Card, CardSection, Button, Input, Spinner } from "./common";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { View, Text } from "react-native";

class LoginForm extends Component {
  static navigationOptions = {
    title: "Please Login"
  };

  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };

  onButtonPress = () => {
    const { email, password, loginUser } = this.props;
    loginUser({ email, password });
  };

  renderButton = () => {
    const { loading } = this.props;
    if (loading) {
      return <Spinner />;
    }
    return <Button onPress={this.onButtonPress}>Login</Button>;
  };

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: "#FFF" }}>
          <Text style={styles.errorTextStyle}> {this.props.error} </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

const mapStateToProps = state => {
  const { email, password, error, loading } = state.auth;
  return {
    email: email,
    password: password,
    error: error,
    loading: loading
  };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
