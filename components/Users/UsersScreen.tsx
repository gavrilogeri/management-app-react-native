import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";
import Users from "./Users";
import UserForm from "./UsersForm";

export type BottomTabParamList = {
  Users: undefined;
  UserForm: undefined;
};
const Tab = createBottomTabNavigator<BottomTabParamList>();

const UsersScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Users" component={Users} />
      <Tab.Screen name="UserForm" component={UserForm} />
    </Tab.Navigator>
  );
};

export default UsersScreen;
