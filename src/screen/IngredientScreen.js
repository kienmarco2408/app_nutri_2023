import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import InputSearch from "../screenComponent/InputSearch";
import ListItemMealCard from "../screenComponent/ListItemMealCard";
import { useNavigation } from "@react-navigation/native";
import IngredientCard from "../screenComponent/IngredientCard";

const IngredientScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          width: "100%",
          paddingTop: "5%",
          height: 150,
          backgroundColor: "#CCE9F2",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: "7%",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              borderRadius: 6,
              width: 30,
              height: 30,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <AntDesign name="arrowleft" size={20} color="#00113D" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              textAlign: "center",
              marginLeft: "20%",
              color: "black",
              width: "40%",
            }}
          >
            Món, nguyên liệu
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="bell"
              size={24}
              color="#00113D"
              style={{ marginLeft: "30%" }}
            />
            <MaterialCommunityIcons
              name="bookmark-minus"
              size={28}
              color="#00113D"
              style={{ marginLeft: "5%" }}
            />
          </View>
        </View>
        <View style={{ alignSelf: "center" }}>
          <InputSearch />
        </View>
      </View>
      <View style={{ marginTop: "5%" }}>
        <ListItemMealCard />
      </View>
    </View>
  );
};

export default IngredientScreen;

const styles = StyleSheet.create({});
