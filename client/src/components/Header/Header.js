import {Image, View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

import { useFonts } from "expo-font";

const Header = () => {


  const [loaded] = useFonts({
    Imprima: require("../../../assets/fonts/Imprima-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.header}>
    <View style={styles.welcome}>
      <View style={{ marginLeft: 10 }}>
        <Image
          source={require("../../../assets/images/karthik_photo.jpg")}
          style={{ width: 50, height: 50, borderRadius: 25 ,marginLeft:10}}
        />
      </View>
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontSize: 18, color: "grey" ,fontFamily:'Imprima' }}>Welcome back</Text>
        <Text style={{ fontSize: 24, fontFamily:'Imprima'  }}>
          Karthik Sundar
        </Text>
      </View>
    </View>
    <View
      style={{
        marginRight: 20,
       // width: 50,
       // height: 50,
       // borderRadius: 525,
        //borderWidth: 2,
       // borderColor: "grey",
      }}
    >
      <View style={{ marginLeft: 5, marginTop: 5 }}>
      <Image source={require('../../icons/notication.png')} style={{width:30 , height:30, marginTop:10}} />
      </View>
    </View>
  </View> 
  )
}
const styles = StyleSheet.create({
    container: {
      marginTop: 60,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    welcome: {
      flexDirection: "row",
    },
  });
export default Header