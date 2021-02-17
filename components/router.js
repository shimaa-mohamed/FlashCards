import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./Home";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import MyCard from "./Cards";
import { StyleSheet, View, Text, Button } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import DeckContents from "./DeckContent";
import AddCard from "./AddCard";
import AddDeck from "./AddDeck";
import Quiz from "./Quiz";
import Result from "./Result";
const Tabs = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <AntDesign name="book" color={tintColor} size={22} />
            <Text style={{ color: tintColor }}>Decks</Text>
          </View>
        ),
      },
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <AntDesign name="pluscircle" color={tintColor} size={22} />
            <Text style={{ color: tintColor }}>Add Deck</Text>
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
        backgroundColor: "#032449",
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
        backgroundColor: "#041B31",
      },
      headerTitleStyle: {
        color: "#F79200",
      },
    },
  },
  MyCard: {
    screen: MyCard,
    
  },
  AddCard:{
    screen:AddCard,
  },
  Quiz:{
    screen:Quiz,
    
  },
  Result:{
    screen:Result,
    
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
