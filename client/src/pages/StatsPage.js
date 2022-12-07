import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import React from "react";

import Modal from "react-native-modal";

import BarGraph from "../components/BarGraph/BarGraph";
import StatsBar from "../components/StatsBar/StatsBar";
import IconTray from "../components/HomepageIconTray/IconTray";

import trans_amount from "../datasource/trans_amount.js";
import recent_transaction from "../datasource/recent_transaction";

import RecentTransaction from "../components/RecentTransaction/RecentTransaction";

const StatsPage = () => {
  const renderSep = () => {
    return <View style={{ padding: 5, marginHorizontal: 2 }} />;
  };

  return (
    <View style={styles.container}>
      <StatsBar />
      <View style={styles.bar}>
        <BarGraph />
      </View>
      <View style={styles.tray}>
        <IconTray props={trans_amount} />

        <ScrollView>
          <FlatList
            data={recent_transaction}
            renderItem={({ item }) => <RecentTransaction item={item} />}
            showsHorizontalScrollIndicator
            horizontal={false}
            pagingEnabled
            bounces={false}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={renderSep}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  tray: {
    bottom: 180,
  },
  bar: {
    bottom: 60,
  },
});
export default StatsPage;
