import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ComponentsScreen = () => {
  return (
    <View style={styles.sectionStyle}>
      <Text style={styles.titleStyle}>Hey</Text>
      <Text style={styles.paragraphStyle}>Questo è un paragrafo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionStyle: {
    backgroundColor: "purple",
    textAlign: "center",
    padding: 20,
  },

  titleStyle: {
    fontSize: 35,
    color: "#292929",
  },

  paragraphStyle: {
    fontSize: 25,
  },
});

export default ComponentsScreen;
