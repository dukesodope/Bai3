import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Flex = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: "#050C9C" }]}>
        <Text style={styles.boxText}>1</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "#3ABEF9" }]}>
        <Text style={styles.boxText}>2</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "#A7E6FF" }]}>
        <Text style={styles.boxText}>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 90,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    color: "black",
  },
});

export default Flex;