import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Font } from 'expo';
import quizDB from './db/quizDB';


class Quiz extends Component {
	constructor(props) {
    	super(props);
    	this.qno = 0
    	this.score = 0
    	this.result = false
    	const quiz = this.props.navigation.getParam('quiz');
    	arrnew = Object.keys(quiz).map(function(k) {return quiz[k]});
    	this.state = { 
    		showAlert: false,
    		fontLoaded:false,
    		question: arrnew[this.qno].question,
    		options: arrnew[this.qno].options,
    		correctoption: arrnew[this.qno].correctoption,
    		details: arrnew[this.qno].details,
    	}
  	};

  	async componentDidMount() {
  		await Font.loadAsync({
      		'Josefin': require('./assets/fonts/josefinsans-regular-webfont.ttf'),
    	});

    	this.setState({ fontLoaded: true });
  	}

  	next(){
	    if(this.qno < arrnew.length-1){
	      this.qno++
	      this.setState({
	      	showAlert: false,
	      	question: arrnew[this.qno].question,
	      	options: arrnew[this.qno].options,
	      	correctoption : arrnew[this.qno].correctoption,
	      	details: arrnew[this.qno].details
	      })
	    }else{   
	      this.props.quizFinish(this.score)
	     }
	  }

	_answer(status,ans){
	    if(ans == this.state.correctoption){
	    	this.result = true
	        this.score+=1
	    }else{
	    	this.result = false
	    }
	    this.setState({showAlert: true})
	}
	

	render() {
		const {showAlert, fontLoaded} = this.state;
		let _this = this
		let imageURL = this.props.navigation.getParam('imageURL')
    	const currentOptions = this.state.options
    	const options = Object.keys(currentOptions).map( function(k) {
      		return (
      			<TouchableOpacity key={k} style={{flex:1}} onPress={(status) => _this._answer(status,k)}>
      			<View style={styles.Answers}>
 					{
	              		fontLoaded ? (
	 						<Text style={{paddingLeft:'3%', fontFamily:'Josefin'}}>{currentOptions[k]}</Text>
	 					) : <Text>error</Text>
            		}
 				</View>
 				</TouchableOpacity>
 			)
    	});
		return(
			<View style={{flex:1}}>
				<ImageBackground
					source={imageURL}
          			resizeMode='cover'
          			style={{flex:2, width:undefined, height:undefined, alignItems:'center', justifyContent:'center', backgroundColor:'black'}}
          			blurRadius={1}
          			opacity={0.6}
       			>
       			{
              		fontLoaded ? (
					<Text style={styles.Question}>{this.state.question}</Text>
					) : <Text>error</Text>
            	}
				</ImageBackground>
				<View style={{flex:3}}>
					<View style={styles.Answers}>
						{options}
					</View>
				</View>
				<AwesomeAlert
          			show={showAlert}
			        showProgress={false}
			        title={this.result ? 'Bravo !' : 'Dommage !'}
			        message={this.state.details}
			        closeOnTouchOutside={false}
			        closeOnHardwareBackPress={false}
			        showCancelButton={false}
			        showConfirmButton={true}
			        confirmText="Suivant"
			        overlayStyle={{backgroundColor:'transparent'}}
			        confirmButtonColor="#DD6B55"
			        onConfirmPressed={() => {
			            this.next();
			        }}
        		/>
			</View>
		)
	}
};

class PlayQuiz extends Component {
	constructor(props){
    	super(props)
    	this.state = {
      		quizFinish : false,
      		score: 0
    	}
  	}

  	_quizFinish(score){    
    	this.setState({ quizFinish: true, score : score })
  	}

  	static navigationOptions = ({navigation}) => {
    	return {
    		title: navigation.getParam('ride', 'Error'),
  		}
	};

	_results(score){
		return(<Text>Your score: {score}</Text>)
	}

	render() {
		return(
			this.state.quizFinish ? 
				 this._results(this.state.score)
			:
				<Quiz navigation={this.props.navigation} quizFinish={(score) => this._quizFinish(score)} />
		)
	}
};

const styles = StyleSheet.create ({
  Question: {
    color:'white',
    fontSize:25,
    fontFamily:'Josefin',
    paddingHorizontal:'10%',
    textAlign:'center',
  },
  Answers: {
  	flex:1,
  	justifyContent: 'center',
  	fontFamily:'Josefin',
  	fontSize:18,
  	borderBottomColor:'lightgrey',
  	borderBottomWidth:1,
  },
});

export default PlayQuiz;