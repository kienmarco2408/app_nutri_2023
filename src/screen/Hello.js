import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Hello = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("AimForm")}
      style={{
        flex: 1,
        alignSelf: "center",
        bottom: "-5%",
        position: "absolute",
      }}
    >
      <View style={{ marginBottom: "20%" }}>
        <Text style={styles.text}>Chào TÙNG,</Text>
        <Text style={styles.textdescription}>
          Cùng làm quen nhau với vài câu hỏi nào!
        </Text>
      </View>

      <View>
        <Image
          source={require("../storages/bottomimg.png")}
          style={{ alignSelf: "center", width: "135%" }}
        />
      </View>
    </Pressable>
  );
};

export default Hello;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: "700",
    color: "#3E445F",
    textAlign: "center",
    marginBottom: "4%",
  },
  textdescription: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    lineHeight: 19.2,
    color: "#3E445F",
  },
});
