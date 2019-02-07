import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import quizDB from './db/quizDB';

class Fantasyland extends Component {
	render() {
		return(
			<View style={{flex:1}}>
				<View style={{flex:0.14, flexDirection:'row', alignItems:'center'}}>
					<View style={{flex:1}}>
						<Image
							source = {require('./assets/lands/fantasyland/snowwhite.png')}
							resizeMode= 'contain'
							style={{flex:1, height:null, width:null}}
						/>
					</View>
					<View style={{flex:3}}>
						<Button title='Blanche-Neige et les Sept Nains' onPress={() => this.props.navigation.navigate('Quiz', {
							ride: 'Blanche-Neige et les Sept Nains',
							quiz: quizDB.fantasyland.snowwhite,
							imageURL: require('./assets/lands/fantasyland/snowwhite.jpg'),
							})}
						/>
					</View>
				</View>
				<View style={{flex:0.14, flexDirection:'row', alignItems:'center'}}>
					<View style={{flex:1}}>
						<Image
							source = {require('./assets/lands/fantasyland/pinocchio.png')}
							resizeMode= 'contain'
							style={{flex:1, height:null, width:null}}
						/>
					</View>
					<View style={{flex:3}}>
						<Button title='Les voyages de Pinocchio' onPress={() => this.props.navigation.navigate('Quiz', {
							ride: 'Les voyages de Pinocchio',
							quiz: quizDB.fantasyland.pinocchio,
							imageURL: require('./assets/lands/fantasyland/pinocchio.png'),
							})}
						/>
					</View>
				</View>
				<View style={{flex:0.14, flexDirection:'row', alignItems:'center'}}>
					<View style={{flex:1}}>
						<Image
							source = {require('./assets/lands/fantasyland/peterpan.png')}
							resizeMode= 'contain'
							style={{flex:1, height:null, width:null}}
						/>
					</View>
					<View style={{flex:3}}>
						<Text>Peter Pan's Flight</Text>
					</View>
				</View>
				<View style={{flex:0.14, flexDirection:'row', alignItems:'center'}}>
					<View style={{flex:1}}>
						<Image
							source = {require('./assets/lands/fantasyland/madhatters.png')}
							resizeMode= 'contain'
							style={{flex:1, height:null, width:null}}
						/>
					</View>
					<View style={{flex:3}}>
						<Text>Mad Hatter's Tea Cups</Text>
					</View>
				</View>
				<View style={{flex:0.14, flexDirection:'row', alignItems:'center'}}>
					<View style={{flex:1}}>
						<Image
							source = {require('./assets/lands/fantasyland/alice.png')}
							resizeMode= 'contain'
							style={{flex:1, height:null, width:null}}
						/>
					</View>
					<View style={{flex:3}}>
						<Text>Alice's Curious Labyrinth</Text>
					</View>
				</View>
				<View style={{flex:0.14, flexDirection:'row', alignItems:'center'}}>
					<View style={{flex:1}}>
						<Image
							source = {require('./assets/lands/fantasyland/smallworld.png')}
							resizeMode= 'contain'
							style={{flex:1, height:null, width:null}}
						/>
					</View>
					<View style={{flex:3}}>
						<Text>It's a small world</Text>
					</View>
				</View>
				<View style={{flex:0.14, flexDirection:'row', alignItems:'center'}}>
					<View style={{flex:1}}>
						<Image
							source = {require('./assets/lands/fantasyland/carousel.png')}
							resizeMode= 'contain'
							style={{flex:1, height:null, width:null}}
						/>
					</View>
					<View style={{flex:3}}>
						<Text>Le Carousel de Lancelot</Text>
					</View>
				</View>
			</View>
		)
	}
};

class Land extends Component {
static navigationOptions = ({navigation}) => {
    return {
    title: navigation.getParam('land', 'Error'),
  }
};
  render() {
  	const { navigation } = this.props;
    const land = navigation.getParam('land', 'Error');
  	if (land == 'Fantasyland') {
  		return(
  			<Fantasyland navigation={this.props.navigation} />
  		)
  	}
    else {
    	return(
      <Text>Coucou</Text>);
  }
}
};

export default Land;