import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./src/store/reducers";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
const Stack = createStackNavigator();

import { HomeScreen } from "./src/screens/HomeScreen";
import { ImageScreen } from "./src/screens/ImageScreen";
import { mainColor } from "./src/constants";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={mainColor} barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: mainColor,
            },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Image"
            component={ImageScreen}
            options={{ title: "" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
