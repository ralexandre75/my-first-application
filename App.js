import { View } from 'react-native';
import { Button } from 'react-native-elements';
import React from 'react';
import Header from './components/header';


export default class App extends React.Component {

  render() {
    return (
      <View>
        <Header content="Liste des tâches" />
        <Button 
          large
          iconRight
          icon={{ name: 'code' }}
          title="pomme"
        />
      </View>
    );
  }
}

