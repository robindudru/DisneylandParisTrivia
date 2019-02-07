import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

class ParcDisneyland extends Component {
  render() {
  return(
      <View style={{flex:1, flexDirection: 'column'}}> 
      <View style={{ flex: 0.5, flexDirection:'row', alignItems:'center'}}>
        <TouchableOpacity style={{flex:0.5}} activeOpacity={0.7} onPress={() => this.props.navigation.navigate('Land', {
          land: 'Fantasyland',
        })} >
          <Image
            source={require('./assets/fantasyland.png')}
            resizeMode= 'contain'
            style={{flex:0.5, width:null, height:null}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{flex:0.5}} activeOpacity={0.7} onPress={() => this.props.navigation.navigate('Land', {
          land: 'Adventureland',
        })} >
        <Image
          source={require('./assets/adventureland.png')}
          resizeMode= 'contain'
          style={{flex:0.5, width:null, height:null}}
        />
        </TouchableOpacity>
      </View>
      <View style={{flex:0.5, flexDirection:'row', alignItems:'center'}}>
        <TouchableOpacity style={{flex:0.5}} activeOpacity={0.7} onPress={() => this.props.navigation.navigate('Land', {
          land: 'Discoveryland',
        })} >
        <Image
          source={require('./assets/discoveryland.png')}
          resizeMode= 'contain'
          style={{flex:0.5, width:null, height:null}}
        />
        </TouchableOpacity>
        <TouchableOpacity style={{flex:0.5}} activeOpacity={0.7} onPress={() => this.props.navigation.navigate('Land', {
          land: 'Frontierland',
        })} >
        <Image
          source={require('./assets/frontierland.png')}
          resizeMode= 'contain'
          style={{flex:0.5, width:null, height:null}}
        />
        </TouchableOpacity>
      </View>
    </View>
    )
  }
};

class WaltDisneyStudios extends Component {
  render() {
  return(
      <View style={{flex:1, flexDirection: 'column'}}>
      <View style={{ flex: 0.5, flexDirection:'row', alignItems:'center'}}>
        <TouchableOpacity style={{flex:0.5}} activeOpacity={0.7} onPress={() => this.props.navigation.navigate('Land', {
          land: 'Front Lot',
        })} >
        <Image
          source={require('./assets/frontlot.png')}
          resizeMode= 'contain'
          style={{flex:0.5, width:null, height:null}}
        />
        </TouchableOpacity>
        <TouchableOpacity style={{flex:0.5}} activeOpacity={0.7} onPress={() => this.props.navigation.navigate('Land', {
          land: 'Production Courtyard',
        })} >
        <Image
          source={require('./assets/productioncourtyard.png')}
          resizeMode= 'contain'
          style={{flex:0.5, width:null, height:null}}
        />
        </TouchableOpacity>
      </View>
      <View style={{flex:0.5, flexDirection:'row', alignItems:'center'}}>
        <TouchableOpacity style={{flex:0.5}} activeOpacity={0.7} onPress={() => this.props.navigation.navigate('Land', {
          land: 'Backlot',
        })} >
        <Image
          source={require('./assets/backlot.png')}
          resizeMode= 'contain'
          style={{flex:0.5, width:null, height:null}}
        />
        </TouchableOpacity>
        <TouchableOpacity style={{flex:0.5}} activeOpacity={0.7} onPress={() => this.props.navigation.navigate('Land', {
          land: 'Toon Studio',
        })} >
        <Image
          source={require('./assets/toonstudios.png')}
          resizeMode= 'contain'
          style={{flex:0.5, width:null, height:null}}
        />
        </TouchableOpacity>
      </View>
    </View>
    )
  }
};



class Park extends Component {
  static navigationOptions = ({navigation}) => {
    return {
    title: navigation.getParam('park', 'Error'),
  }
};
  render() {
    const { navigation } = this.props;
    const park = navigation.getParam('park', 'Error');
    if (park == 'Parc Disneyland') {
      return (<ParcDisneyland navigation={this.props.navigation} />)
    }
    else {
      return (<WaltDisneyStudios navigation={this.props.navigation} />)
    }
  }
};

export default Park;