import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import InputSearch from "../screenComponent/InputSearch";
import FoodHome from "../screenComponent/FoodHome";

const Recipe = () => {
  return (
    <ScrollView>
      <View
        style={{ backgroundColor: "#4B6AB9", height: 696, borderRadius: 20 }}
      >
        <View style={{}}>
          <View
            style={{
              marginTop: "40%",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "10%",
              marginBottom: "5%",
            }}
          >
            <Ionicons name="ios-heart-outline" size={24} color="white" />
            <Text
              style={{ fontWeight: "700", color: "white", marginLeft: "2%" }}
            >
              Gợi ý kế hoạch phù hợp cho bạn
            </Text>
          </View>
          <View>
            <FoodHome />
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "10%",
            marginBottom: "5%",
            marginTop: "8%",
          }}
        >
          <FontAwesome5 name="star" size={18} color="black" />
          <Text
            style={{ fontWeight: "700", color: "#00113D", marginLeft: "2%" }}
          >
            Kế hoạch ăn kiêng khác
          </Text>
        </View>
        <View>
          <FoodHome />
        </View>
      </View>

      <View
        style={{
          width: "100%",
          paddingTop: "5%",
          height: 150,
          backgroundColor: "white",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          position: "absolute",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: "7%",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              textAlign: "center",
              marginLeft: "30%",
              color: "black",
              width: "40%",
            }}
          >
            Kế hoạch ăn kiêng
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
    </ScrollView>
  );
};

export default Recipe;

const styles = StyleSheet.create({});
