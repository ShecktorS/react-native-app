import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, imgSrc }) => {
  return (
    <View>
      <Image style={styles.styleImageDetail} source={imgSrc} />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  styleImageDetail: {
    // backgroundColor: "green",
  },
});

export default ImageDetail;
