import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User From</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b7bd43",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default UserForm;
