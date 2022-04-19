import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Companies = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Companies Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d14c49",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Companies;
