import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryTheme,
} from "victory-native";

export default function BarGraph() {
  const debit = [
    { year: "Jan", earnings: 4 },
    { year: "Feb", earnings: 5 },
    { year: "Mar", earnings: 5 },
    { year: "Apr", earnings: 4 },
    { year: "May", earnings: 4.5 },
  ];

  const credit = [
    { year: "Jan", earnings: 5 },
    { year: "Feb", earnings: 3 },
    { year: "Mar", earnings: 3 },
    { year: "Apr", earnings: 4 },
    { year: "May", earnings: 5 },
  ];

  return (
    <View style={styles.container}>
      <VictoryChart
    
        theme={VictoryTheme.material}
        animate={{ duration: 1000 }}
        height={300}
        width={400}
      >
        <VictoryGroup offset={20}>
          <VictoryBar
            data={debit}
            x="year"
            y="earnings"
            style={styles.bar1}
            cornerRadius={{
              bottomLeft: 0,
              bottomRight: 0,
              topLeft: 9,
              topRight: 9,
            }}
  
          />
          <VictoryBar
            data={credit}
            x="year"
            y="earnings"
            style={styles.bar2}
            cornerRadius={{
              bottomLeft: 0,
              bottomRight: 0,
              topLeft: 9,
              topRight: 9,
            }}
          
          />
        </VictoryGroup>
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:30,
    width:400,
    height:400,
  },
  bar1: {
    data: {
      fill: "#E1FD8F",
    },
  },

  bar2: {
    data: {
      fill: "black",
    },
  },
});
