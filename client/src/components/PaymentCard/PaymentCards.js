import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import card_details from "../../datasource/card_details";
import PaymentCard from "./PaymentCard";
import axios from "axios";

export default function PaymentCards() {
  const renderSep = () => {
    return <View style={{ padding: 5, marginHorizontal: 2 }} />;
  };

  const a = {
    cardCompany: "Visa Wed",
    cardType: "Debit",
    balance: "65476",
    cardNumber: "1123",
    expriyDate: "12/12",
  };

  useEffect(() => {

/*
   axios.get('http://192.168.182.215:3000/cards/1')
   .then(response => console.log(response.data))
   .catch(err => console.log(err));
   */

 /*  axios.post('http://192.168.182.215:3000/cards', a)
   .then(response => console.log(response.data))
   .catch(err => console.log(err));
*/
  }, []);

  return (
    <View>
      <FlatList
        data={card_details}
        renderItem={({ item }) => <PaymentCard item={item} />}
        horizontal
        showsHorizontalScrollIndicator = {false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderSep}
      />
    </View>
  );
}
