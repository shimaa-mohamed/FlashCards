import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./Home";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import MyCard from "./cards";
import { StyleSheet, View, Text, Button } from "react-native";

const Tabs = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Icon name="ios-home" color={tintColor} size={22} />
            <Text style={{ color: tintColor }}>Home</Text>
          </View>
        ),
      },
    },
    MyCard: {
      screen: MyCard,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Icon name="ios-person" color={tintColor} size={22} />
            <Text style={{ color: tintColor }}>Profile</Text>
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    lazyLoad: true,
    tabBarPosition: "top",
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        height: 70,
        backgroundColor: "#4C2B9C",
        paddingBottom: 3,
        paddingTop: 3,
      },
      indicatorStyle: {
        backgroundColor: "#F79200",
        elevation: 10,
      },
      activeTintColor: "#F79200",
      inactiveTintColor: "#fff",
    },
  }
);

const screens = {
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      title: "FlashCards",
      headerStyle: {
        backgroundColor: "#360772",
      },
      headerTitleStyle: {
        color: "#F79200",
      },
    },
  },
  MyCard: {
    screen: MyCard,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
const styles = StyleSheet.create({
  iconCOntainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
