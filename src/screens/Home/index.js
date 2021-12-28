import { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import serviceUtil from "../../../services/utils";

const Home = ({ navigation }) => {
  useEffect(async () => {
    await serviceUtil
      .get("/names")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "400", paddingBottom: 8 }}>
        Home Screen
      </Text>
      <Pressable
        onPress={() => {
          navigation.popToTop("");
        }}
      >
        <Text style={{ fontSize: 14, color: "blue" }}>Log Out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Home;
