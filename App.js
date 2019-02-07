import React, { Component } from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import Profile from './Profile';
import HomeNav from './HomeNav';

const MainNav = createDrawerNavigator(
  {
    Home: HomeNav,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    drawerPosition: 'right',
    cardStyle: {
      backgroundColor:'transparent'
  },
    contentComponent: Profile,
    backBehavior: 'order',
    transitionConfig: (): Object => ({
    containerStyle: {
        backgroundColor: 'transparent',
      },
    }), 
  }
)

export default class App extends Component {
  render() {
    return (
          <View style = {{flex:1}}>
            <MainNav />
          </View>
    );
  }
}