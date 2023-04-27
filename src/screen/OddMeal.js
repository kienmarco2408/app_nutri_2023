import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardBreakfast from "../screenComponent/CardBreakfast";

const OddMeal = () => {
  return (
    <View style={{ height: "160%" }}>
      <ScrollView>
        <CardBreakfast />
      </ScrollView>
    </View>
  );
};

export default OddMeal;

const styles = StyleSheet.create({});
