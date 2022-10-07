import React, {Component} from 'react';
import {Alert} from 'react-native';
import CameraScreen from 'react-native-camera-kit';
import CheckingScreen from './CheckingScreen';

export default class BarcodeScreenModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: undefined,
      value: undefined,
    };
  }

  onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    Alert.alert(
      `"${event.type}" Button Pressed`,
      `${captureImages}`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  }

  render() {
    if (this.state.model) {
      const Screen = this.state.model;
      return <Screen value={this.state.value} />;
    }
    return (
      <CameraScreen
        actions={{rightButtonText: 'Done', leftButtonText: 'Cancel'}}
        onBottomButtonPressed={event => this.onBottomButtonPressed(event)}
        flashImages={{
          on: require('../images/flashOn.png'),
          off: require('../images/flashOff.png'),
          auto: require('../images/flashAuto.png'),
        }}
        scanBarcode
        showFrame
        laserColor="red"
        frameColor="white"
        onReadCode={event => {
          this.setState({
            model: CheckingScreen,
            value: event.nativeEvent.codeStringValue,
          });
        }}
        hideControls
      />
    );
  }
}
