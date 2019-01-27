import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

import LoginForm from "./components/LoginForm";

const AuthStack = createStackNavigator({ SignIn: LoginForm });
// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack
    },
    {
      initialRouteName: "Auth",
      defaultNavigationOptions: {
        // headerStyle: {
        //   alignSelf: "center"
        // }
      }
    }
  )
);

export default AppNavigator;
