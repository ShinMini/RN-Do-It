import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import BarcodeScreen from './BarcodeScreenModel';
import cameraStyles from 'src/styles/CameraStyles';

export default class CheckingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: undefined,
    };
  }

  render() {
    if (this.state.model) {
      const CheckingScreen = this.state.model;
      const value = this.state.value;
      return <CheckingScreen value={value} />;
    }
    return (
      <View style={cameraStyles.cameraContainer}>
        <Text style={cameraStyles.valueText}>{this.props.value}</Text>
        <TouchableOpacity onPress={() => this.setState({model: BarcodeScreen})}>
          <Text style={cameraStyles.buttonText}>Back button</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
