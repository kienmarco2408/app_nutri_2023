import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  Entypo,
  Feather,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ListItemMealCard = () => {
  const navigation = useNavigation();
  const listfood = [
    {
      id: 1,
      title: "Thịt",
      img: require("../storages/list/savepic1.png"),
      ingredient: "100 nguyên liệu, món",
    },
    {
      id: 2,
      title: "Thịt",
      img: require("../storages/list/savepic1.png"),
      ingredient: "100 nguyên liệu, món",
    },
    {
      id: 3,
      title: "Thịt",
      img: require("../storages/list/savepic1.png"),
      ingredient: "100 nguyên liệu, món",
    },
    {
      id: 4,
      title: "Thịt",
      img: require("../storages/list/savepic1.png"),
      ingredient: "100 nguyên liệu, món",
    },
  ];
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <FlatList
        numColumns={2}
        data={listfood}
        contentContainerStyle={{ justifyContent: "center" }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate}
              style={{
                width: "40%",
                height: 197,
                borderRadius: 20,
                backgroundColor: "#fff",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 1,
                marginHorizontal: "5%",
                marginVertical: "5%",
              }}
            >
              <Image
                source={item.img}
                style={{
                  height: 130,
                  width: "100%",
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  position: "absolute",
                }}
              />
              <MaterialCommunityIcons
                name="bookmark-minus"
                size={28}
                color="#AFF242"
                style={{
                  right: 4,
                  top: 2,
                  position: "absolute",
                }}
              />
              <View
                style={{
                  alignSelf: "center",
                  marginTop: "80%",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    width: "80%",
                    color: "#0047D7",
                  }}
                >
                  {item.title}
                </Text>
              </View>
              <View
                style={{
                  marginTop: "10%",
                  alignSelf: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Feather name="edit" size={10} color="#AFF242" />
                  <Text style={{ fontSize: 10, marginLeft: 6 }}>
                    {item.ingredient}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ListItemMealCard;

const styles = StyleSheet.create({});
