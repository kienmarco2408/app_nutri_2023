import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import InputSearch from "../screenComponent/InputSearch";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import CardBreakfast from "../screenComponent/CardBreakfast";

const DetailIngredient = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { title } = route.params;
  return (
    <View style={{ paddingBottom: "35%" }}>
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
      </View>
      <ScrollView style={{ marginTop: "5%", height: "100%" }}>
        <CardBreakfast />
      </ScrollView>
    </View>
  );
};

export default DetailIngredient;

const styles = StyleSheet.create({});
