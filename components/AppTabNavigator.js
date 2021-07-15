import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import BookRequestScreen from '../screens/BookRequestScreen';


export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/qa.jpeg")} style={{width:20, height:20}}/>,
      tabBarLabel : "Answer Question",
    }
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/questionmark.jpg")} style={{width:20, height:20}}/>,
      tabBarLabel : "Questions",
    }
  }
});
