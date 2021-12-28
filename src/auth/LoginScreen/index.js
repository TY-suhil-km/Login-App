import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable, Modal } from "react-native";
import { TextInput } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import ModalComponent from "../../Components/Modal";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateToken } from "../../../store/features/authSlicer";
import { axiosInstance } from "../../../authConfig";
import serviceUtil from "../../../services/utils";

const Login = ({ route, navigation }) => {
  const [userName, setuserName] = useState(null);
  const [password, setpassword] = useState(null);
  const [showRegiModal, setShowRegiModal] = useState(false);
  const [showErrModal, setshowErrModal] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (route.params?.showRegisterSuccess) {
      setShowRegiModal(true);
    }
  }, [route.params?.showRegisterSuccess]);

  const validate = () => {
    // const emailReg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    let flag = true;
    if (!userName || !password) flag = false;
    return flag;
  };

  const loginClick = async () => {
    if (validate())
      await serviceUtil
        .post("login/auth", {
          userName,
          password,
        })
        .then((data) => {
          console.log(data);
          dispatch(updateToken(data.data.accessToken));
          navigation.popToTop();
          navigation.push("Home");
        })
        .catch((err) => {
          setshowErrModal(err.response.data);
          console.log("err", err);
        });
  };

  return (
    <View style={[styles.container]}>
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
            onSubmitEditing={() => {
              console.log("akjckajcna");
              loginClick();
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputBox}
            mode="outlined"
            label="Password"
            value={password}
            onChangeText={(text) => setpassword(text)}
            onSubmitEditing={() => {
              console.log("akjckajcna");
              loginClick();
            }}
          />
        </View>

        <View style={styles.forgotTextContainer}>
          <Pressable
            onPress={() => {
              navigation.navigate("RegistrationForm");
            }}
            // style={styles.btn}
          >
            <Text style={styles.forgotText}>Sign up</Text>
          </Pressable>
          <Text style={styles.forgotText}>Forgot password</Text>
        </View>
        <View style={styles.btnContainer}>
          <Pressable
            onPress={() => {
              loginClick();
            }}
            style={styles.btn}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                color: "#fff",
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </Animatable.View>
      {showRegiModal && (
        <ModalComponent btnText="Ok" modalText="Registered Successfully" />
      )}
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
  registerText: {},
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
    justifyContent: "space-between",
  },
  forgotText: {
    paddingTop: 5,
    fontWeight: "100",
    fontSize: 14,
    color: "#007FFF",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Login;
