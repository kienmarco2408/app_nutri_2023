import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const CardMeal = () => {
  const listmeal = [
    {
      id: 1,
      title: "Bữa sáng",
      meals: "12",
      img: require("../storages/list/pic1.png"),
      color: "#F9BBF9",
    },
    {
      id: 2,
      title: "Bữa trưa",
      meals: "12",
      img: require("../storages/list/pic1.png"),
      color: "#93CAFC",
    },
    {
      id: 3,
      title: "Bữa tối",
      meals: "12",
      img: require("../storages/list/pic1.png"),
      color: "#6BD2A7",
    },
    {
      id: 4,
      title: "Bữa nhẹ",
      meals: "12",
      img: require("../storages/list/pic1.png"),
      color: "#4B6AB9",
    },
  ];
  return (
    <View>
      {listmeal.map((item) => {
        return (
          <View
            style={[
              {
                width: "80%",
                height: 79,
                marginHorizontal: "10%",
                borderRadius: 10,
                marginVertical: "3%",
                backgroundColor: item.color,
              },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: "3%",
                justifyContent: "space-between",
                marginHorizontal: "3%",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../storages/list/pic1.png")}
                  style={{ width: 57, height: 57 }}
                />
                <View style={{ marginLeft: "3%" }}>
                  <Text style={{ color: "white", fontWeight: "700" }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "700",
                      marginTop: "5%",
                    }}
                  >
                    {item.meals}
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                      }}
                    >
                      món
                    </Text>
                  </Text>
                </View>
              </View>

              <View style={{}}>
                <AntDesign name="rightcircleo" size={18} color="white" />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default CardMeal;

const styles = StyleSheet.create({});
