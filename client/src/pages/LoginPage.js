import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";


const Signup = () => {


const d = {};

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        name="email"
        outlineColor="green"
        activeOutlineColor="green"
        mode="outlined"
        label="Email"
        placeholder="Your Email Id"
        onChangeText={(val) => handleChange("expriyDate", val)}
      />
      <TextInput
        name="pwd"
        outlineColor="green"
        activeOutlineColor="green"
        mode="outlined"
        label="Password"
        placeholder="Password"
        onChangeText={(val) => handleChange("expriyDate", val)}
      />
      <Button style={styles.btn} title="Login" onPress={d} />
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text>Don't have and account ?</Text>
        <Text
          onPress={() => {
            console.log("signup");
          }}
        >
          Sign-up
        </Text>
      </View>
      <Text>Or Login With</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Image
          source={require("../icons/facebook.png")}
          style={{ width: 50, height: 50 }}
        />
        <Image
          source={require("../icons/gmail.png")}
          style={{ width: 50, height: 50 }}
        />
      </View>
    </View>
  </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({})