import { View, StyleSheet } from "react-native";
import React from "react";

import Header from "../components/Header/Header";
import PaymentCards from "../components/PaymentCard/PaymentCards";
import IconTray from "../components/HomepageIconTray/IconTray";
import icontray_home from "../datasource/icontray_home.js";

const Homepage = () => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.PaymentCards}>
        <PaymentCards />
      </View>

      <IconTray props={icontray_home} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  PaymentCards: {
    marginTop: 20,
  },
});

export default Homepage;
