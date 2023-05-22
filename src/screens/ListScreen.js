import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    "gino",
    "rino",
    "sempronio",
    "salsicciotto",
    "carmelo",
    "mimmo",
  ];

  return (
    <FlatList
      horizontal={true}
      keyExtractor={(friend) => friend}
      data={friends}
      renderItem={({ item, index }) => {
        return (
          <Text style={styles.textStyle}>
            {item} - {index}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    fontSize: 30,
    marginHorizontal: 20,
  },
});

export default ListScreen;
