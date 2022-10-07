/** @format */

import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import CameraScreenModel from './screen/CameraScreenModel';
import BarcodeScreenModel from './screen/BarcodeScreenModel';
import CameraModel from './components/CameraModel';
import appStyles from './styles/AppStyles';

type State = {
  model?: CameraModel | CameraScreenModel | BarcodeScreenModel;
};

export default class App extends Component {
  state: State;

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      model: undefined,
    };
  }

  render() {
    if (this.state.model) {
      const Model = this.state.model;
      return <Model />;
    }
    return (
      <View style={{flex: 1}}>
        <View style={appStyles.headerContainer}>
          <Text style={{fontSize: 60}}>🎈</Text>
          <Text style={appStyles.headerText}>React Native Camera Kit</Text>
        </View>
        <View style={appStyles.appContainer}>
          <TouchableOpacity
            style={appStyles.button}
            onPress={() => this.setState({model: CameraModel})}>
            <Text style={appStyles.buttonText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={appStyles.button}
            onPress={() => this.setState({model: CameraScreenModel})}>
            <Text style={appStyles.buttonText}>Camera Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={appStyles.button}
            onPress={() => this.setState({model: BarcodeScreenModel})}>
            <Text style={appStyles.buttonText}>Barcode Scanner</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
