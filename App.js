import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Header from './components/header';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { myText: 'Un texte par défaut' };
  }

  onPressButton = () => {
    this.setState({ myText: 'Salut' });
    console.log('press');
  }

  render() {
    return (
      <View>
        <Header content="Liste des tâches" />
        <Button 
          large
          iconRight
          icon={{ name: 'code' }}
          title="pomme"
          onPress={this.onPressButton}
        />
        <Text>{this.state.myText}</Text>
      </View>
    );
  }
}

