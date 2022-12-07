import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";

const d = {};

const  Signup= () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Singup</Text>
        <Image source={require('../icons/upload.png')} style={{width:100,height:100}}/>
        <TextInput
        name="name"
        outlineColor="green"
        activeOutlineColor="green"
        mode="outlined"
        label="Name"
        placeholder="Your Name"
        onChangeText={(val) => handleChange("expriyDate", val)}
      />
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
        <TextInput
          name="contactno"
          outlineColor="green"
          activeOutlineColor="green"
          mode="outlined"
          label="Contact no."
          placeholder="Enter Mobile Number"
          onChangeText={(val) => handleChange("expriyDate", val)}
        />
        <Button style={styles.btn} title="Sign up" onPress={d} />

      </View>
    </SafeAreaView>
  );
};


const ForgotPage =() =>{
    return(
        <View >
        <Text>Forgot password</Text>
        <TextInput
          name="email"
          outlineColor="green"
          activeOutlineColor="green"
          mode="outlined"
          label="Email"
          placeholder="Your Email Id"
          onChangeText={(val) => handleChange("expriyDate", val)}
        />
          <Button style={styles.btn} title="Sign up" onPress={()=>{console.log("forgot page")}} />
          <Button style={styles.btn} title="Back to login" onPress={()=>{console.log("forgot page")}} />
        </View>
    )
}
export default Signup;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 300,
    height: 400,
    marginLeft: 50,
    borderWidth: 2,
    padding: 10,
    borderColor: "grey",
    marginTop: 10,
  },
});
