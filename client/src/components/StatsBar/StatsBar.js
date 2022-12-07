import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { FontAwesome } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";

import { useFonts } from "expo-font";
export default function StatsBar() {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];

  const [loaded] = useFonts({
    Imprima: require("../../../assets/fonts/Imprima-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.icon}>
          <Image
            source={require("../../icons/left-arrow.png")}
            style={{ width: 40, height: 40 }}
          />
          {/* <Ionicons name="chevron-back" size={24} color="black" /> */}
        </View>
        <View style={styles.text}>
          <Text style={{ fontSize: 20, fontFamily:'Imprima' }}>Reload</Text>
        </View>
        <View style={styles.icon1}>
          <Image
            source={require("../../icons/more.png")}
            style={{ width: 40, height: 40 }}
          />
        </View>
      </View>

      <View style={styles.row2}>
        <View>
          <Text style={{ fontSize: 15, marginLeft: 10 , fontFamily:'Imprima' }}>
            February 28 - March 28, 2020
          </Text>
        </View>
        <View style={styles.dropdown}>
          <SelectDropdown
          rowStyle={{ fontFamily:'Imprima'}}
            buttonStyle={{ width: 130, height: 30 ,fontFamily:'Imprima'}}
            data={countries}
            onSelect={(selectedItem, index) => {}}
            defaultButtonText="Monthy"
            renderDropdownIcon={(isOpened) => {
              return (
                <FontAwesome
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"#444"}
                  size={18}
                />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    height: 50,
    width: 50,
    // borderWidth: 2,
    // borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 25,
    marginLeft: 20,
  },
  text: {
    marginTop: 15,
  },
  icon1: {
    height: 50,
    width: 50,

    // borderWidth: 2,
    // borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 25,
    marginRight: 20,
  },
  row2: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dropdown: {
    marginRight: 30,
  },
});
