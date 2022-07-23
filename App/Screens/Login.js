import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import WavyHeader from "../Components/WavyHeader";
import { PRIMARY } from "../Utils/colors";

const Login = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <WavyHeader customStyles={styles.svgCurve} />
      <View style={{ marginTop: 70, marginHorizontal: 40 }}>
        <Text style={{ color: "white", fontSize: 30 }}>Welcome</Text>
        <Text style={{ color: "white", fontSize: 30 }}>Back</Text>
        <Text style={{ color: "white", fontSize: 18 }}>
          Please Sign In to continue
        </Text>
      </View>
      <View style={{ marginTop: "40%", marginHorizontal: 50 }}>
        <TextInput
          style={{
            borderBottomWidth: 1,
            paddingVertical: 5,
            borderBottomColor: "gray",
            fontSize: 18,
          }}
          placeholder="Email"
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            paddingVertical: 5,
            borderBottomColor: "gray",
            fontSize: 18,
            marginTop: 20,
          }}
          placeholder="Password"
        />

        <Text
          style={{
            textAlign: "center",
            marginVertical: 15,
            fontSize: 15,
            color: "gray",
          }}
        >
          Forgot Your Password?
        </Text>
        <View
          style={{
            borderWidth: 0.5,
            marginHorizontal: 10,
            borderRadius: 25,
            padding: 8,

            backgroundColor: PRIMARY,
            borderColor: PRIMARY,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
            <Text style={{ textAlign: "center", fontSize: 25, color: "white" }}>
              Signin
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            textAlign: "center",
            marginVertical: 10,
            color: "gray",
            fontSize: 15,
          }}
        >
          Don't have an account? <Text style={{ color: PRIMARY }}> Signup</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  svgCurve: {
    width: Dimensions.get("window").width,
    height: 80,
  },
});
