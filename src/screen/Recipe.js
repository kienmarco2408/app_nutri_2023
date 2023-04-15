import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  FlatList,
} from "react-native";
import React from "react";
import { useState } from "react";
import { TextInput } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const Recipe = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
    // Perform search operation
  };

  return (
    <View style={styles.searchBar}>
      <Ionicons
        name="ios-search-outline"
        size={30}
        color="#B1B1B1"
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={handleSearch}
        value={searchText}
        placeholder="Tìm kiếm món ăn"
        placeholderTextColor="#B1B1B1"
      />
    </View>
  );
};

export default Recipe;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 45,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    width: "80%",
  },
  searchIcon: {
    marginHorizontal: 14,
  },
  textInput: {
    flex: 1,
    height: "100%",
  },
});
