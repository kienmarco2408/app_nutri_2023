import { View, Text } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <View
      style={{
        marginTop: "5%",
        justifyContent: "center",
        alignSelf: "center",
        width: "63%",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          lineHeight: 48,
          fontWeight: "700",
          color: "#3E445F",
          textTransform: "uppercase",
        }}
      >
        Heathy Diet
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 14,
          lineHeight: 16.8,
          fontWeight: "400",
          marginTop: "4%",
          color: "#3E445F",
        }}
      >
        Giúp bạn luyện tập thể thao một cách an toàn và hiệu quả nhất!
      </Text>
    </View>
  );
};

export default Logo;
