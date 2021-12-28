import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import LandingScreen from "./src/auth/LandingScreen";
import Login from "./src/auth/LoginScreen";
import RegistrationForm from "./src/auth/RegistrationScreen";
import Home from "./src/screens/Home";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [isLoding, setIsLoding] = useState(true);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LandingScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="LandingScreen" component={LandingScreen} />
          <Stack.Screen
            name="Login"
            component={Login}
            initialParams={{ showRegisterSuccess: false }}
          />
          <Stack.Screen name="RegistrationForm" component={RegistrationForm} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
