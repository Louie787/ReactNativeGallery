import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { w, h } from "../constants";

export const ImageCard = ({ url, title, author, pressHandler }) => {
  const image = { uri: url };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={pressHandler}
    >
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.textWrapper}>
          <Text style={[styles.text, styles.author]}>{author}</Text>
          <Text style={styles.text}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: w / 2,
    height: h / 2.28,
    borderWidth: 0.5,
    borderColor: "#888",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  textWrapper: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  text: {
    color: "#fff",
    textTransform: "capitalize",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  author: {
    fontSize: 18,
    color: "gold",
    marginBottom: 5,
  },
});
