import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";

export default function PaymentCard({ item }) {
  const { width } = useWindowDimensions();

  const [loaded] = useFonts({
    Imprima: require("../../../assets/fonts/Imprima-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={[styles.container]}>
      <ImageBackground style={styles.image_bg} source={item.backgound}>
        <View style={styles.row1}>
          <Text style={[styles.cardType, { color: item.textColor ,},styles.textStlye]}>
            {item.cardType}
          </Text>
          <Text style={[styles.cardBrand, { color: item.textColor },styles.textStlye]}>
            {item.cardBrand}
          </Text>
        </View>
        <View style={styles.row2}>
          <Text style={[styles.balance, { color: item.textColor },styles.textStlye]}>
            Balance
          </Text>
          <Text style={[styles.balance1, { color: item.textColor },styles.textStlye]}>
            {item.balance}
          </Text>
        </View>
        <View style={styles.row3}>
          <Text style={[styles.endingNumber, { color: item.textColor },styles.textStlye]}>
            {item.endingNumber}
          </Text>
          <Text style={[styles.expiryDate, { color: item.textColor },styles.textStlye]}>
            {item.expiryDate}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 300,
    flex: 1,
    justifyContent: "center",
    marginLeft:10

    // borderWidth: 2,
    // borderColor: "white",
  },
  image_bg: {
    width: 250,
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
  },
  row1: {
    marginTop: 50,
    flexDirection: "row",
    flex: 2,
    justifyContent: "space-between",
  },
  row2: {
    flexDirection: "column",
    marginBottom: 60,
    flex: 2,
    justifyContent: "space-between",
    marginLeft: 30,
  },
  row3: {
    flexDirection: "row",
    flex: 2,
    justifyContent: "space-between",
  },
  cardBrand: {
    marginRight: 30,
  },
  cardType: {
    marginLeft: 30,
  },
  balance: {},
  balance1: {
    marginBottom: 13,
  },
  endingNumber: {
    marginLeft: 30,
  },
  expiryDate: {
    marginRight: 30,
  },
  textStlye:{
    fontFamily:'Imprima',
    fontSize:18
  }
});
