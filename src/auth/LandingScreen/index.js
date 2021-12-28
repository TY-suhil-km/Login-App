import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceInDown"
          duration={2000}
          style={styles.logo}
          source={require("../../../assets/logo.jpg")}
        />
      </View>
      <Animatable.View
        animation="slideInUp"
        duration={1500}
        style={styles.footer}
      >
        <Text style={{ fontSize: 21, fontWeight: "500" }}>
          Welcome Ninja...!
        </Text>
        <View style={styles.btnContainer}>
          <Pressable
            style={styles.btn}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "500", color: "#fff" }}>
              Get Started
            </Text>
            <Icon
              name="chevron-right"
              size={14}
              color="#fff"
              style={{ paddingTop: 5, fontWeight: 100 }}
            />
          </Pressable>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3D4651",
    paddingTop: 25,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 70,
  },
  btnContainer: {
    flexDirection: "row-reverse",
    alignContent: "stretch",
    paddingTop: 30,
  },
  btn: {
    backgroundColor: "#3A928D",
    padding: 10,
    color: "#fff",
    borderRadius: 30,
    paddingLeft: 15,
    paddingRight: 15,
    elevation: 10,
    flexDirection: "row",
  },

  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
});

export default LandingScreen;
