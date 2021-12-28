import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import axios from "axios";
import ModalComponent from "../../Components/Modal";
import serviceUtil from "../../../services/utils";

const RegistrationForm = ({ navigation }) => {
  const [userName, setuserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setpassword] = useState(null);
  const [showErrModal, setshowErrModal] = useState(null);

  const registerHandle = async () => {
    await serviceUtil
      .post("/register/new/user", {
        userName,
        email: email,
        password: password,
      })
      .then((data) => {
        navigation.popToTop();
        navigation.push("Login", { showRegisterSuccess: true });
      })
      .catch((err) => {
        debugger;
        setshowErrModal(err.response.data);
        console.log("err", err);
      });
  };
  return (
    <View style={styles.container}>
      <Animatable.View
        animation={"fadeIn"}
        duration={1800}
        style={{ flexDirection: "row", justifyContent: "center" }}
      >
        <Image
          animation="bounceInDown"
          duration={2000}
          style={styles.logo}
          source={require("../../../assets/logo.jpg")}
        />
      </Animatable.View>
      <Animatable.View
        animation={"slideInUp"}
        duration={1500}
        style={styles.form}
      >
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            label="User Name"
            value={userName}
            onChangeText={(text) => setuserName(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputBox}
            mode="outlined"
            label="Password"
            value={password}
            onChangeText={(text) => setpassword(text)}
          />
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={registerHandle}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                color: "#fff",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
      {showErrModal && (
        <ModalComponent
          onBtnClick={() => {
            setshowErrModal(null);
          }}
          btnText="Ok"
          modalText={showErrModal}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 25,
    alignContent: "center",
    justifyContent: "center",
  },
  form: {
    flex: 0.7,
    paddingHorizontal: 35,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 70,
  },
  inputContainer: {
    borderRadius: 20,
  },
  inputBox: {
    borderRadius: 20,
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 30,
    alignItems: "flex-start",
  },
  btn: {
    backgroundColor: "#3A928D",
    padding: 10,
    color: "#fff",
    borderRadius: 30,
    elevation: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  forgotTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  forgotText: {
    paddingTop: 5,
    fontWeight: "100",
    fontSize: 14,
    color: "#007FFF",
  },
});

export default RegistrationForm;
