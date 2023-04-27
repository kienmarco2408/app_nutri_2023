import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Meal = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Meal")}
      style={{
        width: 150,
        height: 150,
        borderRadius: 15,
      }}
    >
      <Image
        source={require("../storages/list/meal.png")}
        style={{
          width: 150,
          height: 150,
          borderRadius: 15,
          position: "absolute",
        }}
      />
      <View
        style={{
          backgroundColor: "rgba(0, 17, 61, 0.5)",
          width: 150,
          height: 150,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontWeight: "700",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Bữa
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Meal;

const styles = StyleSheet.create({});
