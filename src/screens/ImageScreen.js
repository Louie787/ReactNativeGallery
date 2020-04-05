import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { w, h } from "../constants";

export const ImageScreen = ({ navigation, route }) => {
  const image = { uri: route.params.url };

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, []);

  return (
    <View>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: w,
    height: h,
  },
});
