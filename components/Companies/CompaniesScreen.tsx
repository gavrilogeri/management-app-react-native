import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Companies from "./Companies";
import CompanyForm from "./CompanyForm";

export type BottomTabParamList = {
  Companies: undefined;
  CompanyForm: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();
const CompaniesScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Companies">
      <Tab.Screen name="Companies" component={Companies} />
      <Tab.Screen name="CompanyForm" component={CompanyForm} />
    </Tab.Navigator>
  );
};

export default CompaniesScreen;
