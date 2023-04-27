import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import IngredientCard from "./IngredientCard";
import Meal from "./Meal";
import DietCard from "./DietCard";
import ModeCard from "./ModeCard";
import AddCard from "./AddCard";

const SuggestDiary = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity
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
            <Text style={{ color: "#FFFFFF", fontWeight: "700", fontSize: 20 }}>
              Tất cả
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          <IngredientCard />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "5%",
        }}
      >
        <View>
          <Meal />
        </View>
        <View>
          <DietCard />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "5%",
        }}
      >
        <View>
          <ModeCard />
        </View>
        <View>
          <AddCard />
        </View>
      </View>
    </View>
  );
};

export default SuggestDiary;

const styles = StyleSheet.create({});
