import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import Park from './Park';
import Land from './Land';
import Quiz from './Quiz';
import ScrollTest from './ScrollTest';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Park: Park,
    Land: Land,
    Quiz: Quiz,
    ScrollTest: ScrollTest,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    cardStyle: {
      backgroundColor:'transparent'
  },
    transitionConfig: (): Object => ({
    containerStyle: {
        backgroundColor: 'transparent',
      },
    }), 
  }
)


export default RootStack;