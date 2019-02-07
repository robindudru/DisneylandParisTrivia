import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, ImageBackground, Animated, Easing, Dimensions } from 'react-native';
import { Font } from 'expo';
import Park from './Park';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  ParkCard: {
    flex:5,    
    borderRadius:10,
    paddingHorizontal:'5%',
  },
});

class Content extends Component {
  state = {
    fontLoaded: false,
    fadeAnim: new Animated.Value(0),
    bounceFromRight: new Animated.Value(0),
    bounceFromLeft: new Animated.Value(0),
    cardFadeIn: new Animated.Value(0),
  };

  async componentDidMount() {

    let width = Dimensions.get('window').width;

    await Font.loadAsync({
      'Josefin': require('./assets/fonts/josefinsans-regular-webfont.ttf'),
    });

    this.setState({ fontLoaded: true });

    Animated.parallel([
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 1,
          duration:2000,
        }
      ),
      Animated.timing(
        this.state.bounceFromLeft,
        {
          toValue: width,
          duration:2500,
          delay:500,
          easing: Easing.bounce,
        }
      ),
      Animated.timing(
        this.state.cardFadeIn,
        {
          toValue: 1,
          duration:2500,
          delay:500,
        }
      ),
      Animated.timing(
        this.state.bounceFromRight,
        {
          toValue: 0 - width,
          duration:2500,
          delay:500,
          easing: Easing.bounce, 
        }
      )
    ]).start();
  }

  render() {

    let { fadeAnim, bounceFromRight, bounceFromLeft, cardFadeIn } = this.state;

    return (
      <View style={{flexDirection: 'column', flex:1, backgroundColor:'white'}}>
        <StatusBar hidden />
        <ImageBackground
          source={require('./assets/bgballoons.png')}
          resizeMode='cover'
          style={{flex:1, width:undefined, height:undefined}}
        >
          <Animated.View style={{flex:1, backgroundColor: 'white', alignItems:'center', opacity:fadeAnim, flexDirection:'row'}}>         
            <View style={{flex:1}}>
            </View>
            <View style={{flex:5, alignItems:'center'}}>
            {
              this.state.fontLoaded ? (
                <Text style={{fontFamily: 'Josefin', fontSize:25, color:'black'}}>Choisis ton parc !</Text>
              ) : <Text>error</Text>
            }
            </View>
            <View style={{flex:1, alignItems:'center'}}>
              <Icon name='bars' color='black' style={{fontSize:25}} onPress={() => this.props.navigation.openDrawer()} />
            </View>            
          </Animated.View>
          <Animated.View style={{...styles.ParkCard, right:'100%', opacity:cardFadeIn,transform:[{translateX:bounceFromLeft}]}}>
            <TouchableOpacity style={{flex:1, flexDirection:'column'}} onPress={() => this.props.navigation.navigate('Park', {
              park: 'Parc Disneyland',
            })}>
              <Image
                resizeMode='contain'
                source={require('./assets/disneylandpark.png')}
                style={{flex:1, height:undefined, width:undefined}}
              />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{...styles.ParkCard, left:'100%', opacity:cardFadeIn, transform:[{translateX:bounceFromRight}]}}>
            <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('Park', {
              park: 'Walt Disney Studios',
            })}>
              <Image
                source={require('./assets/waltdisneystudios.png')}
                style={{flex:1, height:undefined, width:undefined}}
                resizeMode='contain'
              />
            </TouchableOpacity>
          </Animated.View> 
        </ImageBackground>
      </View>
    );
  }
}

class AnimationIn extends Component {
  state = {
    fadeIn: new Animated.Value(0),
    mickeyUp: new Animated.Value(0),
    minnieUp: new Animated.Value(0),
    winnieUp: new Animated.Value(0),
  }  

  componentDidMount() {

    let height = Dimensions.get('window').height;

    Animated.sequence([
      Animated.timing(
        this.state.fadeIn,
        {
          toValue: 1,
          duration:2000,
        }
      ),
      Animated.parallel([
        Animated.timing(
          this.state.mickeyUp,
          {
            toValue: 0 - height * 1.3,
            duration:5000,
            easing: Easing.ease,
            useNativeDriver: true,
          }
        ),
        Animated.timing(
          this.state.minnieUp,
          {
            toValue:0 - height * 1.3,
            delay:150,
            duration:5000,
            easing: Easing.ease,
            useNativeDriver: true,
          }
        ),
        Animated.timing(
          this.state.winnieUp,
          {
            toValue: 0 - height * 1.3,
            delay:300,
            duration:5000,
            easing: Easing.ease,
            useNativeDriver: true,
          }
        )
      ]),
    ]).start(this.props.animationEnd);
  }

  render(){

    let {fadeIn, mickeyUp, minnieUp, winnieUp} = this.state;

    return(
      <Animated.View style={{flex:1, backgroundColor:'#a9daef', opacity:fadeIn}}>
        <StatusBar hidden />
        <ImageBackground
          source={require('./assets/bgballoons.png')}
          resizeMode='cover'
          style={{flex:1, width:undefined, height:undefined, flexDirection:'row'}}
        >
          <Animated.Image 
            source={require('./assets/minnieballoon.png')}
            resizeMode='contain'
            style={{width:'33%', top:'110%', transform:[{translateY: minnieUp},]}}
          />
          <Animated.Image 
            source={require('./assets/mickeyballoon.png')}
            resizeMode='contain'
            style={{width:'33%', top:'110%', transform:[{translateY: mickeyUp},]}}
          />
          <Animated.Image 
            source={require('./assets/winnieballoon.png')}
            resizeMode='contain'
            style={{width:'33%', top:'110%', transform:[{translateY: winnieUp},]}}
          />
        </ImageBackground>
      </Animated.View>
    );
  }
}

class HomeScreen extends Component {
  state = {
    animationEnd:false
  }

  animationEnd() { this.setState({animationEnd: true}); }
  
  render(){
    if (this.state.animationEnd){
        return (
          <Content navigation={this.props.navigation} />
        );
    }
    else {
        return (
          <AnimationIn animationEnd={() => this.setState(state => ({ animationEnd: 'true'}))} />
        ); 
    }
  }
}

export default HomeScreen;