import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Water = () => {
  const water = [
    {
      id: 1,
      img: require("../storages/waterfull.png"),
    },
    {
      id: 2,
      img: require("../storages/waterfull.png"),
    },
    {
      id: 3,
      img: require("../storages/waterempty.png"),
    },
    {
      id: 4,
      img: require("../storages/waterempty.png"),
    },
    {
      id: 5,
      img: require("../storages/waterempty.png"),
    },
    {
      id: 6,
      img: require("../storages/waterempty.png"),
    },
    {
      id: 7,
      img: require("../storages/waterempty.png"),
    },
    {
      id: 8,
      img: require("../storages/waterempty.png"),
    },
  ];
  return (
    <View>
      <View
        style={{
          width: "80%",
          height: 79,
          backgroundColor: "#AFF242",
          position: "relative",
          marginHorizontal: "10%",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: "5%",
            marginTop: "2%",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              color: "#00113D",
            }}
          >
            Uống Nước
          </Text>
          <Text>Mục tiêu: 0.25/2l</Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            marginTop: "3%",
          }}
        >
          <FlatList
            horizontal={true}
            data={water}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View>
                  <Image source={item.img} style={{ marginRight: 7 }} />
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Water;

const styles = StyleSheet.create({});
