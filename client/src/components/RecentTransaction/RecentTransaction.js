import { Image, View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import recent_transaction from "../../datasource/recent_transaction";

const RecentTransaction = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.welcome}>
        <View style={{ marginLeft: 10 }}>
        {/* <Image source={require('../../icons/man.png')} style={{width:40 , height:40}} /> */}
        <Image source={props.item.img} style={{width:40 , height:40}} />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{props.item.name}</Text>
          <Text style={{ fontSize: 10, color: "grey" }}>
            {props.item.Type} {props.item.card}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginRight: 50,
          // width: 0,
          // height: 50,
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <View style={{ marginLeft: 5, marginTop: 5 }}>
          <Text>{props.item.amount}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 80,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:10
  },
  welcome: {
    flexDirection: "row",
  },
});
export default RecentTransaction;
