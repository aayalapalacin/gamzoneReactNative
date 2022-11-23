import { Text, View, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    { title: "Lord of the Rings", rating: 5, body: "great film", key: "1" },
    { title: "Harry Potter", rating: 3, body: "good film", key: "2" },
    { title: "Willy Wonka", rating: 2, body: "bad film", key: "3" },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewsDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
