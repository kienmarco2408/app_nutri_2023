import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import RootStack from "./src/router/Stack";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <StatusBar backgroundColor="black" style={{ paddingBottom: "5%" }} />
      <RootStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
