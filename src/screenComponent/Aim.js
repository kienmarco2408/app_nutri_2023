import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Progress from "react-native-progress";
import { Feather } from "@expo/vector-icons";

const Aim = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        height: 85,
        borderRadius: 25,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: "8%",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={require("../storages/icon/aim.png")} />
          <Text style={{ marginLeft: 5 }}>Mục tiêu của bạn:</Text>
        </View>
        <Text style={{ color: "#565B73" }}>1.5/3 tháng</Text>
      </View>
      <View style={{ marginTop: "2%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: "8%",
          }}
        >
          <Text style={{ fontSize: 10, color: "#C4C4C4" }}>Bắt đầu</Text>
          <Text style={{ fontSize: 10, color: "#C4C4C4", marginRight: "10%" }}>
            Mục tiêu
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: "8%",
            alignItems: "center",
          }}
        >
          <Text>80kg</Text>
          <View style={styles.container}>
            <Progress.Bar
              progress={0.4}
              width={176}
              color="#AFF242"
              unfilledColor="#0047D7"
              height={8}
            />
          </View>
          <Text style={{ marginRight: "5%" }}>60kg</Text>
          <Feather
            name="edit"
            size={24}
            color="#0047D7"
            style={{ bottom: 5 }}
          />
        </View>
      </View>
    </View>
  );
};

export default Aim;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  progressBar: {
    margin: 10,
  },
});
