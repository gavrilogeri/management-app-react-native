import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Users = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#49add1",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Users;
