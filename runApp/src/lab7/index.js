/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./HomeScreen";
import User from "./UserScreen";
import { Image, View } from "react-native";
const TabTop = createMaterialTopTabNavigator();
const TabBottom = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <TabTop.Navigator>
        <TabTop.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ forcused }) => {
              return (
                <View>
                  <Image
                    source={require("./home.png")}
                    resizeMode="contain"
                    style={{ width: 30, height: 30 }}
                  />
                </View>
              );
            },
          }}
        />
        <TabTop.Screen
          name="Settings"
          component={User}
          options={{
            tabBarIcon: ({ forcused }) => {
              return (
                <View>
                  <Image
                    source={require("./setting.png")}
                    resizeMode="contain"
                    style={{ width: 30, height: 30 }}
                  />
                </View>
              );
            },
          }}
        />
      </TabTop.Navigator> */}
      <TabBottom.Navigator>
        <TabBottom.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ forcused }) => {
              return (
                <View>
                  <Image
                    source={require("./home.png")}
                    resizeMode="contain"
                    style={{ width: 30, height: 30 }}
                  />
                </View>
              );
            },
          }}
        />
        <TabBottom.Screen
          name="Settings"
          component={User}
          options={{
            tabBarIcon: ({ forcused }) => {
              return (
                <View>
                  <Image
                    source={require("./setting.png")}
                    resizeMode="contain"
                    style={{ width: 30, height: 30 }}
                  />
                </View>
              );
            },
          }}
        />
      </TabBottom.Navigator>
    </NavigationContainer>
  );
}
