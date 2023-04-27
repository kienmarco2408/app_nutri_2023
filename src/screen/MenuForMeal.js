import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import CardBreakfast from "../screenComponent/CardBreakfast";
import { useNavigation } from "@react-navigation/native";

const MenuForMeal = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView style={{ height: "160%" }}>
        <View
          style={{
            marginTop: "2%",
            flexDirection: "row",
            marginHorizontal: "11%",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome name="play-circle" size={24} color="#00113D" />
            <Text
              style={{ fontWeight: "700", marginLeft: 8, color: "#00113D" }}
            >
              Thực đơn 1
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "30%",
              marginRight: "8%",
            }}
          >
            <Ionicons name="flame" size={24} color="#00113D" />
            <Text
              style={{ fontWeight: "700", marginLeft: 8, color: "#00113D" }}
            >
              400 kcal
            </Text>
          </View>
          <MaterialCommunityIcons
            name="bookmark-minus"
            size={24}
            color="#9BB7F0"
          />
        </View>
        <View>
          <CardBreakfast />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("DetailMenu")}
          style={{
            width: "80%",
            height: 41,
            borderWidth: 1,
            borderRadius: 18,
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#4B6AB9",
            alignSelf: "center",
            marginTop: "6%",
          }}
        >
          <Text style={{ color: "#4B6AB9", fontWeight: "700" }}>
            Xem chi tiết
          </Text>
        </TouchableOpacity>
        <View>
          <View
            style={{
              marginTop: "8%",
              flexDirection: "row",
              marginHorizontal: "11%",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome name="play-circle" size={24} color="#00113D" />
              <Text
                style={{ fontWeight: "700", marginLeft: 8, color: "#00113D" }}
              >
                Thực đơn 2
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "30%",
                marginRight: "8%",
              }}
            >
              <Ionicons name="flame" size={24} color="#00113D" />
              <Text
                style={{ fontWeight: "700", marginLeft: 8, color: "#00113D" }}
              >
                400 kcal
              </Text>
            </View>
            <MaterialCommunityIcons
              name="bookmark-minus"
              size={24}
              color="#9BB7F0"
            />
          </View>
          <View>
            <CardBreakfast />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("DetailMenu")}
            style={{
              width: "80%",
              height: 41,
              borderWidth: 1,
              borderRadius: 18,
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#4B6AB9",
              alignSelf: "center",
              marginTop: "6%",
            }}
          >
            <Text style={{ color: "#4B6AB9", fontWeight: "700" }}>
              Xem chi tiết
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MenuForMeal;

const styles = StyleSheet.create({});
