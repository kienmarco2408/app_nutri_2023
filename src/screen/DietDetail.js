import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import ListCardDiet from "../screenComponent/ListCardDiet";

const DietDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { title } = route.params;
  const { img } = route.params;
  const { firstContent } = route.params;
  const { aim } = route.params;
  const { day } = route.params;

  return (
    <View>
      <ScrollView>
        <Image
          source={img}
          style={{ width: "100%", height: 301, position: "absolute" }}
        />
        <View style={{ marginTop: "10%", marginLeft: "8%" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              borderRadius: 6,
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <AntDesign name="arrowleft" size={30} color="#00113D" />
          </TouchableOpacity>
          <View style={{ marginTop: "8%" }}>
            <Text style={{ fontWeight: "700", fontSize: 20, color: "white" }}>
              {title}
            </Text>
            <Text style={{ fontSize: 10, color: "white", marginTop: "1%" }}>
              {firstContent}
            </Text>
          </View>
          <View>
            <View style={{ flexDirection: "row", marginTop: "5%" }}>
              <View
                style={{
                  backgroundColor: "#CCE9F2",
                  width: "auto",
                  height: 18,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                  marginBottom: 6,
                  paddingHorizontal: "5%",
                }}
              >
                <Text
                  style={{ color: "#00113D", fontSize: 8, fontWeight: "700" }}
                >
                  Thời gian: <Text style={{ fontWeight: "400" }}>{day}</Text>
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#AFF242",
                  width: "auto",
                  height: 18,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                  paddingHorizontal: "6%",
                }}
              >
                <Text
                  style={{ color: "#00113D", fontSize: 8, fontWeight: "700" }}
                >
                  Mục đích: <Text style={{ fontWeight: "400" }}>{aim}</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            borderWidth: 1,
            height: "100%",
            marginTop: "5%",
          }}
        >
          <View
            style={{
              backgroundColor: "#00113D",
              height: 321,
              alignSelf: "center",
              width: "90%",
              marginTop: "5%",
              borderRadius: 20,
            }}
          >
            <View style={{ marginHorizontal: "5%", marginTop: "5%" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <FontAwesome name="commenting" size={24} color="white" />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "700",
                    width: "85%",
                    fontStyle: "italic",
                    textAlign: "justify",
                    lineHeight: 17,
                  }}
                >
                  Là chế độ sử dụng các thức ăn có hàm lượng cao protein vào
                  trong thành phần bữa ăn.
                </Text>
              </View>
              <View style={{ marginTop: "3%" }}>
                <Text
                  style={{
                    fontWeight: "700",
                    color: "white",
                    fontSize: 12,
                    textAlign: "justify",
                  }}
                >
                  Chất đạm (Protein)
                  <Text style={{ fontWeight: "400" }}>
                    : thịt, cá, trứng, sữa,... sản phẩm cung cấp protein dạng
                    tổng hợp.
                  </Text>
                </Text>
                <Text
                  style={{
                    fontWeight: "400",
                    color: "white",
                    fontSize: 12,
                    marginTop: "5%",
                    textAlign: "justify",
                  }}
                >
                  Các chuyên gia dinh dưỡng trên Thế giới đều cho rằng thực đơn
                  khoa học áp dụng để giảm cân cần có chế độ ăn giàu protein.
                </Text>
                <Text
                  style={{
                    fontWeight: "400",
                    color: "white",
                    fontSize: 12,
                    marginTop: "5%",
                    textAlign: "justify",
                  }}
                >
                  Bởi vì nhóm chất sẽ giúp cơ thể đẩy mạnh lượng calo đốt cháy
                  bằng cách gia tăng tốc độ trao đổi chất, đồng thời còn làm
                  giảm cảm giác thèm ăn.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "3%",
                }}
              >
                <Ionicons name="alert-circle" size={24} color="white" />
                <Text
                  style={{
                    fontWeight: "700",
                    color: "white",
                    fontSize: 14,
                    textAlign: "justify",
                    marginLeft: "5%",
                  }}
                >
                  Lưu ý
                </Text>
              </View>
              <View style={{ marginTop: "2%" }}>
                <Text style={{ color: "white", fontSize: 12 }}>
                  1. Tổng calo nạp vào nhỏ hơn calo tiêu thụ.
                </Text>
                <Text style={{ color: "white", fontSize: 12 }}>
                  2. Chia nhỏ bữa ăn trong ngày
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: "5%",
              marginTop: "5%",
            }}
          >
            <MaterialCommunityIcons
              name="note-text"
              size={24}
              color="#00113D"
            />
            <Text
              style={{ marginLeft: "3%", color: "#00113D", fontWeight: "700" }}
            >
              Thực đơn 7 ngày
            </Text>
          </View>
          <View>
            <ListCardDiet />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DietDetail;

const styles = StyleSheet.create({});
