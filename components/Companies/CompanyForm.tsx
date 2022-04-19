import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CompanyForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Company From</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#90bd43",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default CompanyForm;
