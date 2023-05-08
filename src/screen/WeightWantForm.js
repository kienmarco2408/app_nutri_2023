import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ImageBackground, Platform, Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";
import { View, TextInput, Button, Alert } from "react-native";

function WeightWantForm() {
  const navigation = useNavigation();
  const [weight, setWeight] = useState("");

  const handleWeightChange = (value) => {
    // Kiểm tra giá trị đầu vào có phải là số nguyên không
    if (/^\d+$/.test(value)) {
      setWeight(value);
    }
  };

  const handleSubmit = () => {
    if (weight) {
      Alert.alert(`Cân nặng của bạn là ${weight}`);
    } else {
      Alert.alert("Vui lòng nhập tuổi của bạn");
    }
  };

  return (
    <View>
      <ImageBackground
        source={require("../storages/backgoundimg.png")}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: "5%",
            marginTop: "8%",
          }}
        >
          <AntDesign
            name="arrowleft"
            size={40}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <AntDesign
            name="arrowright"
            size={40}
            color="black"
            onPress={() => navigation.navigate("MonthForm")}
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: 20,
            color: "#3E445F",
            marginBottom: 32,
            marginTop: "40%",
          }}
        >
          Cân nặng hướng tới:
        </Text>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            width: 288,
            alignSelf: "center",
            height: 30,
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Nhập cân nặng của bạn"
            keyboardType="numeric"
            value={weight}
            onChangeText={handleWeightChange}
            style={{ width: 288 }}
          />
          <Text>kg</Text>
        </View>
        <Pressable
          onPress={handleSubmit}
          style={{ alignSelf: "center", marginTop: "5%" }}
        >
          <Text>Xác nhận</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

export default WeightWantForm;

const styles = StyleSheet.create({});
