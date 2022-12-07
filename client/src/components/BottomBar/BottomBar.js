import { View, Text,StyleSheet ,Image} from "react-native";
import React from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PaymentCard from "../PaymentCard/PaymentCard";
import Icons from "../HomepageIconTray/Icons";
import Header from "../Header/Header";
import BarGraph from "../BarGraph/BarGraph";

import Signup from "../../pages/Signup";
import LoginPage from "../../pages/LoginPage";
import MyCardpage from "../../pages/MyCardpage";
import Homepage from '../../pages/Homepage';
import Empty from "../Empty";
import Dropdown from "../widgets/Dropdown";
import StatsPage from "../../pages/StatsPage";

export default function BottomBar() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
   
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          screenOptions={{
            activeTintColor: "#42f44b",
            headerShown:false
          }}
        >
          <Tab.Screen
            name="HomeStack"
            component={Homepage}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Image source={require('../../icons/home.png')} style={{width:30 , height:30}} />
                // <Feather name="home" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="StatsStack"
            component={StatsPage}
            options={{
              tabBarLabel: "Statistic",
              tabBarIcon: ({ color, size }) => (
                // <Ionicons name="stats-chart-outline" size={24} color="black" />
                <Image source={require('../../icons/stats2.png')} style={{width:27 , height:27}} />
              ),
            }}
          />
          <Tab.Screen
            name="addStack"
            component={MyCardpage}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <Image source={require('../../icons/add1.png')} style={{width:50 , height:50,marginTop:15}} />
                // <Ionicons name="add-circle-sharp" size={24} color="black" />
              ),
            }}
          />

          <Tab.Screen
            name="cardStack"
            component={MyCardpage}
            options={{
              tabBarLabel: "My card",
              tabBarIcon: ({ color, size }) => (
                <Image source={require('../../icons/credit-card1.png')} style={{width:40 , height:40,marginTop:5}} />
                // <Ionicons name="card-outline" size={24} color="black" />
              ),
            }}
          />

          <Tab.Screen
            name="profileStack"
            component={Signup}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color, size }) => (
                <Octicons name="person" size={24} color="black" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {


  },
});
