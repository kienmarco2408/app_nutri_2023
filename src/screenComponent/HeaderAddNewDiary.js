import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import SearchBar from "./SearchBar";
import InputSearch from "./InputSearch";
import GroupScreenDiaryAdd from "./GroupScreenDiaryAdd";
import { useNavigation } from "@react-navigation/native";

const HeaderAddNewDiary = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          width: "100%",
          paddingTop: "5%",
          height: 170,
          backgroundColor: "#CCE9F2",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: "7%",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              borderRadius: 6,
              width: 30,
              height: 30,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <AntDesign name="arrowleft" size={20} color="#00113D" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              textAlign: "center",
              marginLeft: "16%",
              color: "black",
              width: "45%",
            }}
          >
            Nhật ký dinh dưỡng
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="bell"
              size={24}
              color="#00113D"
              style={{ marginLeft: "30%" }}
            />
            <MaterialCommunityIcons
              name="bookmark-minus"
              size={28}
              color="#00113D"
              style={{ marginLeft: "5%" }}
            />
          </View>
        </View>
        <View style={{ alignSelf: "center" }}>
          <InputSearch />
        </View>
        <View>
          <GroupScreenDiaryAdd />
        </View>
      </View>
    </View>
  );
};

export default HeaderAddNewDiary;

const styles = StyleSheet.create({});
