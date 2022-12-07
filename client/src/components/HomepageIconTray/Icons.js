import { Image ,View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const Icons = ({ item }) => {

  const [loaded] = useFonts({
    Imprima: require("../../../assets/fonts/Imprima-Regular.ttf"),
    Mukta : require("../../../assets/fonts/MuktaMahee-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }


  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <Image source={item.icon}  style={{width:40 , height:40}} />
        {/* <FontAwesome5 name={item.icon} size={24} color="black" /> */}
      </View>
      <View style={styles.textbar}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.desc}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 135,
    height: 135,
    borderWidth: 2,
    borderColor: "#E5E4E2",
    borderRadius: 20,
    flexDirection: "column",
    justifyContent:'center',
    alignItems:'center',
    margin: 5,
    position:"relative",
    padding:10,
  },
  icons: {
    width: 50,
    height: 50,
    backgroundColor: "F1F3F0",
    marginTop: 10,
   
    // marginLeft: 15,
    justifyContent:'center',
    alignItems:'center'
  },
  title: {
    //marginLeft: 40,
    fontSize:15,
    justifyContent:'center',
    alignItems:'center',
    alignItems:'center',
    fontFamily:'Imprima',
    fontWeight:'bold'
  },
  desc: {
    //marginLeft: 40,
    // marginBottom:2,
   fontSize:11,
    textAlign:'center',
    fontFamily:'Mukta'
    
  },
  textbar:{
    justifyContent:'center',
    alignItems:'center',
    padding:10,
  }
});

export default Icons;
