import React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { mainColor } from "../constants";

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={mainColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
