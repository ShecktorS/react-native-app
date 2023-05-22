import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";

import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [rgb, setRgb] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });

  const CHANGE_VALUE = (colors, op = "dim") => {
    const obj = {
      ...rgb,
      [colors]: op == "add" ? rgb[colors] + 25.5 : rgb[colors] - 25.5,
    };
    if (obj[colors] >= 0 && obj[colors] <= 255) {
      return obj;
    } else {
      obj[colors] === 0;
      return rgb;
    }
  };

  const colors = [rgb.red, " ", rgb.green, " ", rgb.blue];

  return (
    <View>
      <View>
        <ColorCounter
          color="Red"
          onIncrease={() => setRgb(CHANGE_VALUE("red", "add"))}
          onDecrease={() => setRgb(CHANGE_VALUE("red"))}
        />
        <ColorCounter
          color="Green"
          onIncrease={() => setRgb(CHANGE_VALUE("green", "add"))}
          onDecrease={() => setRgb(CHANGE_VALUE("green"))}
        />
        <ColorCounter
          color="Blue"
          onIncrease={() => setRgb(CHANGE_VALUE("blue", "add"))}
          onDecrease={() => setRgb(CHANGE_VALUE("blue"))}
        />
      </View>
      <View
        style={{
          height: 50,
          width: 50,
          backgroundColor: `rgb(${rgb.red},${rgb.green},${rgb.blue})`,
          marginHorizontal: 60,
        }}
      />
      <Text>{colors}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  squareStyle: {
    height: 70,
    width: 70,
  },

  buttonStyle: {
    marginHorizontal: 20,
  },
});

export default SquareScreen;
