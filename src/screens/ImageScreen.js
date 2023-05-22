import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.imageStyle}>Pippo</Text>
      <ImageDetail
        title="pippo per gli amici"
        imgSrc={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="pippo per gli amici"
        imgSrc={require("../../assets/mountain.jpg")}
      />
      <ImageDetail
        title="pippo per gli amici"
        imgSrc={require("../../assets/beach.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    fontSize: 20,
  },
});

export default ImageScreen;
