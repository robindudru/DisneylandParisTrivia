import React, { Component } from 'react';
import { Text } from 'react-native';
import { Font } from 'expo';

class Title extends Component {
  constructor(props) {
      super(props);
    };

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Josefin': require('./assets/fonts/josefinsans-regular-webfont.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      
              <Text>Coucou</Text>
           
             
      ); 
}
}

export default Title;