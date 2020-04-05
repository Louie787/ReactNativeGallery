import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, RefreshControl } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../store/actions/app";
import { Loader } from "../components/Loader";
import { ImageCard } from "../components/ImageCard";

export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.appReducer.images);
  const isLoading = useSelector((state) => state.appReducer.isLoading);

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getImages());
    setRefreshing(false);
  }, [refreshing]);

  const pressHandler = (url, name) => {
    navigation.navigate("Image", { url, name });
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => setRefreshing(true)}
            />
          }
          data={images}
          renderItem={({ item }) => (
            <ImageCard
              url={item.urls.regular}
              author={item.user.name}
              title={item.alt_description}
              pressHandler={pressHandler.bind(
                null,
                item.urls.full,
                item.user.name
              )}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
