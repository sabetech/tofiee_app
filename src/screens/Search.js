import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MiniCard from "../components/MiniCard";
import { SafeAreaView } from "react-native-safe-area-context";

//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyA35a1ebn-cJ21TsO3iLlrz8yCJIHIoDVQ
const SearchScreen = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [miniCardData, setMiniCard] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    //channel_id = UCFJtQ1-OfZNz4p_kDz_Lhkw
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCFJtQ1-OfZNz4p_kDz_Lhkw&maxResults=10&q=${value}&type=video&key=AIzaSyA35a1ebn-cJ21TsO3iLlrz8yCJIHIoDVQ`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        setMiniCard(data.items);
      });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.searchBar}>
        <Ionicons
          name="md-arrow-back"
          size={32}
          style={{ color: "white" }}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          style={{ width: "70%", backgroundColor: "#e6e6e6" }}
          value={value}
          onChangeText={(text) => setValue(text)}
        />

        <Ionicons
          name="md-send"
          size={32}
          style={{ color: "white" }}
          onPress={() => fetchData()}
        />
      </View>

      {loading ? (
        <ActivityIndicator
          style={{ marginTop: 10 }}
          size="large"
          color="darkblue"
        />
      ) : null}
      <FlatList
        data={miniCardData}
        renderItem={({ item }) => {
          return (
            <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              description={item.snippet.description}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    elevation: 5,
    backgroundColor: "darkblue",
    height: 45,
  },
});

export default SearchScreen;
