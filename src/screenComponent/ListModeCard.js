import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ListModeCard = () => {
  const navigation = useNavigation();
  const listmode = [
    {
      id: 1,
      title: "Chế độ",
      sub: "Giới thiệu ngắn, định nghĩa chế độ",
      meal: "20 món ăn",
      img: require("../storages/list/modepic1.png"),
    },
    {
      id: 2,
      title: "Món giàu protein",
      sub: "Giới thiệu ngắn, định nghĩa chế độ",
      meal: "20 món ăn",
      img: require("../storages/list/modepic2.png"),
    },
    {
      id: 3,
      title: "Eatclean",
      sub: "Giới thiệu ngắn, định nghĩa chế độ",
      meal: "20 món ăn",
      img: require("../storages/list/modepic2.png"),
    },

    {
      id: 4,
      title: "Lowfat",
      sub: "Giới thiệu ngắn, định nghĩa chế độ",
      meal: "20 món ăn",
      img: require("../storages/list/modepic2.png"),
    },
    {
      id: 5,
      title: "Đồ uống, giải khát",
      sub: "Giới thiệu ngắn, định nghĩa chế độ",
      meal: "20 món ăn",
      img: require("../storages/list/modepic2.png"),
    },
  ];
  return listmode.map((item, index) => {
    return (
      <View
        key={index}
        style={{
          width: "80%",
          backgroundColor: "#CCE9F2",
          borderRadius: 20,
          height: 163,
          marginHorizontal: "10%",
          alignSelf: "center",
          marginVertical: "5%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: "5%",
          }}
        >
          <View style={{ marginTop: "5%" }}>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  color: "#1D1617",
                  marginBottom: "3%",
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{ fontSize: 8, fontStyle: "italic", color: "#00113D" }}
              >
                {item.sub}
              </Text>
            </View>
            <View style={{ marginTop: "35%" }}>
              <Text style={{ fontSize: 12, color: "#7B6F72" }}>
                {item.meal}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("DetailIngredient", {
                    title: item.title,
                  })
                }
                style={{
                  backgroundColor: "white",
                  width: 94,
                  height: 35,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  marginTop: "3%",
                }}
              >
                <Text style={{ color: "#00113D", fontSize: 12 }}>Xem thêm</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <MaterialCommunityIcons
              name="bookmark-minus"
              size={28}
              color="#9BB7F080"
              style={{ top: 7, position: "absolute", right: -5 }}
            />
            <Image
              source={item.img}
              style={{
                marginTop: "35%",
                width: 110,
                height: 110,
                borderRadius: 20,
              }}
            />
          </View>
        </View>
      </View>
    );
  });
};

export default ListModeCard;

const styles = StyleSheet.create({});
