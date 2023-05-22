// 1. Import
import React, { useState } from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

import ComponentsScreen from "./ComponentsScreen";

// 2. Create component
const HomeScreen = ({ navigation }) => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Button
          onPress={() => navigation.navigate("Components")}
          title="Go to Component"
        />
        <Text></Text>
        <Button
          onPress={() => navigation.navigate("Color")}
          title="Go to ColorScreen"
        />
        <Text></Text>
        <Button
          onPress={() => navigation.navigate("Square")}
          title="Go to SquareScreen"
        />
        <Text>Go to List!</Text>
        <Text>Go to List!</Text>
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Clicck for Image"
      />
      <Text>{counter}</Text>

      <Button onPress={() => setCounter((prev) => prev + 1)} title="increase" />
      <Text></Text>
      <Button
        onPress={() => {
          counter !== 0
            ? setCounter((prev) => prev - 1)
            : alert("stop decrease!");
        }}
        title="Decrease"
      />
    </View>
  );
};

// 3. Create stylesheet
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  styleButton: {
    width: "20px",
  },
});

// 4. Export component
export default HomeScreen;
