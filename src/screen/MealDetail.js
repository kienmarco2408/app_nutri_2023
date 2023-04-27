import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import InputSearch from "../screenComponent/InputSearch";
import CardBreakfast from "../screenComponent/CardBreakfast";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import GroupScreenMeal from "../screenComponent/GroupScreenMeal";

const MealDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { title } = route.params;
  return (
    <View style={{ height: "100%" }}>
      <View
        style={{
          width: "100%",
          paddingTop: "5%",
          height: 170,
          backgroundColor: "#CCE9F2",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
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
              marginLeft: "15%",
              color: "black",
              width: "45%",
            }}
          >
            {title}
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
        <View>
          <GroupScreenMeal />
        </View>
      </View>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({});
