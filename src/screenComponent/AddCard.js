import { Entypo } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const AddCard = () => {
  return (
    <TouchableOpacity
      style={{
        width: 150,
        height: 150,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#00113D",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: 45,
          width: 45,
          borderRadius: 20,
          backgroundColor: "#D9E3F9",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Entypo name="plus" size={35} color="#FFFFFF" />
      </View>
    </TouchableOpacity>
  );
};

export default AddCard;

const styles = StyleSheet.create({});
