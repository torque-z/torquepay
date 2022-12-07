import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { TextInput } from "react-native-paper";

const initialValues = {
  cardCompany: "",
  cardType: "",
  balance: "123",
  cardNumber: "",
  expriyDate: "",
  // cvv: "",
};

const a = {
  cardCompany: "Visa Wed",
  cardType: "Debit",
  balance: "65476",
  cardNumber: "1123",
  expriyDate: "12/12",
};
  const CardEnter = () => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const d = () => {
    console.log(a);
    axios
      .post("http://192.168.182.215:3000/cards", a)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Add new card</Text>
        <TextInput
          style={styles.card}
          name="cardNumber"
          outlineColor="green"
          activeOutlineColor="green"
          mode="outlined"
          label="Enter Card Number"
          placeholder="Enter Card Number"
          onChangeText={(val) => handleChange("cardNumber", val)}
        />
        <TextInput
          style={styles.card}
          name="expriyDate"
          outlineColor="green"
          activeOutlineColor="green"
          mode="outlined"
          label="Date"
          onChangeText={(val) => handleChange("expriyDate", val)}
        />
        <TextInput
          style={styles.card}
          name="balance"
          outlineColor="green"
          activeOutlineColor="green"
          mode="outlined"
          label="balance"
          onChangeText={(val) => handleChange("balance", val)}
        />
        <TextInput
          style={styles.card}
          name="cardCompany"
          outlineColor="green"
          activeOutlineColor="green"
          mode="outlined"
          label="cardCompany"
          onChangeText={(val) => handleChange("cardCompany", val)}
        />
        <TextInput
          style={styles.card}
          name="cardType"
          value={values.cardCompany}
          outlineColor="green"
          activeOutlineColor="green"
          mode="outlined"
          label="cardType"
          onChangeText={(val) => handleChange("cardType", val)}
        />
        <Button style={styles.btn} title="Add Card" onPress={d} />
      </View>
    </SafeAreaView>
  );
};

export default CardEnter;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  btn:{
    marginTop:20
  }
});
