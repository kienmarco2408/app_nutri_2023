import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5, Octicons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";

const ListCardDiet = () => {
  const listdiet = [
    {
      id: 1,
      title: "Ngày 1 và 4",
      img: require("../storages/list/diarypic1.png"),
      kcal: "913 kcal",
      food: "10 món, nguyên liệu",
      meal: "05",
    },
    {
      id: 2,
      title: "Ngày 2 và 5",
      img: require("../storages/list/diarypic1.png"),
      kcal: "913 kcal",
      food: "10 món, nguyên liệu",
      meal: "05",
    },
    {
      id: 3,
      title: "Ngày 3 và 6",
      img: require("../storages/list/diarypic1.png"),
      kcal: "913 kcal",
      food: "10 món, nguyên liệu",
      meal: "05",
    },
    {
      id: 4,
      title: "Ngày 7",
      img: require("../storages/list/diarypic1.png"),
      kcal: "913 kcal",
      food: "10 món, nguyên liệu",
      meal: "05",
    },
  ];
  return listdiet.map((item) => {
    return (
      <View
        key={item.id}
        style={{
          width: "80%",
          borderWidth: 1,
          height: 184,
          borderRadius: 20,
          alignSelf: "center",
          marginTop: "8%",
          flexDirection: "row",
        }}
      >
        <Image
          source={require("../storages/list/diarypic1.png")}
          style={{
            height: 184,
            width: 101,
            borderBottomLeftRadius: 20,
            borderTopLeftRadius: 20,
          }}
        />
        <View style={{ marginVertical: "4%", marginLeft: "5%" }}>
          <Text style={{ fontSize: 14, fontWeight: "700" }}>Ngày 1 và 4</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: "15%",
            }}
          >
            <Octicons name="flame" size={18} color="#AFF242" />
            <Text style={{ fontSize: 16, fontWeight: "700" }}>500 kcal</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            <FontAwesome5 name="edit" size={18} color="#AFF242" />
            <Text style={{ fontSize: 10, marginRight: "15%" }}>
              10 món, nguyên liệu
            </Text>
            <Text style={{ fontSize: 10, marginRight: "2%" }}>05</Text>
            <Text style={{ fontSize: 10 }}>bữa</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "15%",
            }}
          >
            <View>
              <Text style={{ color: "#00113D", fontSize: 12 }}>Carbs</Text>
              <Progress.Bar
                progress={0.4}
                width={52}
                color="#6BD2A7"
                height={5}
                style={{ marginVertical: "6%" }}
              />
              <Text style={{ color: "#B1B1B1", fontSize: 12 }}>20g</Text>
            </View>
            <View>
              <Text style={{ color: "#00113D", fontSize: 12 }}>Proteins</Text>
              <Progress.Bar
                progress={0.4}
                width={52}
                color="#93CAFC"
                height={4}
                style={{ marginVertical: "6%" }}
              />
              <Text style={{ color: "#B1B1B1", fontSize: 12 }}>20g</Text>
            </View>
            <View>
              <Text style={{ color: "#00113D", fontSize: 12 }}>Fats</Text>
              <Progress.Bar
                progress={0.4}
                width={52}
                color="#F9BBF9"
                height={4}
                style={{ marginVertical: "6%" }}
              />
              <Text style={{ color: "#B1B1B1", fontSize: 12 }}>20g</Text>
            </View>
          </View>
        </View>
      </View>
    );
  });
};

export default ListCardDiet;

const styles = StyleSheet.create({});
