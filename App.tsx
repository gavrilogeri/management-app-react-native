import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CompaniesScreen from "./components/Companies/CompaniesScreen";
import UsersScreen from "./components/Users/UsersScreen";

export type StackParamList = {
  CompaniesScreen: undefined;
  UsersScreen: undefined;
};
const Stack = createNativeStackNavigator<StackParamList>();
const Drawer = createDrawerNavigator<StackParamList>();

// const App = () => {
//   return (
//     // <View style={styles.container}>
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="CompaniesScreen"
//             component={CompaniesScreen}
//             options={{ title: "Companies - Home" }}
//           />
//           <Stack.Screen name="UsersScreen" component={UsersScreen} />
//           {/* <Stack.Screen name="BlogsScreen" component={BlogsScreen} /> */}
//         </Stack.Navigator>
//         <StatusBar />
//       </NavigationContainer>
//     </SafeAreaProvider>
//     // </View>
//   );
// };
const App = () => {
  return (
    // <View style={styles.container}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="CompaniesScreen"
            component={CompaniesScreen}
            options={{ title: "Companies - Home" }}
          />
          <Drawer.Screen
            name="UsersScreen"
            component={UsersScreen}
            options={{ title: "Users - Home" }}
          />
          {/* <Stack.Screen name="BlogsScreen" component={BlogsScreen} /> */}
        </Drawer.Navigator>
        <StatusBar />
      </NavigationContainer>
    </SafeAreaProvider>
    // </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a264c3",
    alignItems: "center",
    justifyContent: "center",
  },
});
