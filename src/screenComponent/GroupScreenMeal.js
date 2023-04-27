import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AddGroup from "../screen/AddGroup";
import { useState } from "react";
import General from "../screen/General";
import HistoryDiary from "../screen/HistoryDiary";
import SuggestDiary from "./SuggestDiary";
import OddMeal from "../screen/OddMeal";
import MenuForMeal from "../screen/MenuForMeal";

const GroupScreenMeal = () => {
  const [screen, setScreen] = useState("screen1");
  return (
    <View>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setScreen("screen1")}>
          <Text
            style={[styles.tabText, screen === "screen1" && styles.tabTextBold]}
          >
            Món lẻ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen("screen2")}>
          <Text
            style={[styles.tabText, screen === "screen2" && styles.tabTextBold]}
          >
            Thực đơn cho bữa ăn
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: "10%", height: "100%" }}>
        {screen === "screen1" && <OddMeal />}
        {screen === "screen2" && <MenuForMeal />}
      </View>
    </View>
  );
};

export default GroupScreenMeal;

const styles = StyleSheet.create({
  tabContainer: {
    height: 50,
    paddingTop: "5%",
    borderTopWidth: 0,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tabText: {
    fontSize: 16,
    color: "#B1B1B1",
  },
  tabTextBold: {
    fontWeight: "bold",
    color: "#00113D",
  },
});
