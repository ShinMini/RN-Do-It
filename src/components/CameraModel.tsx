import React, {Component} from 'react';
import {View} from 'react-native';
import Camera, {CameraType} from 'react-native-camera-kit';
import cameraStyles from 'src/styles/CameraStyles';

export default class CameraExample extends Component {
  camera: any;
  render() {
    return (
      <View style={cameraStyles.cameraContainer}>
        <Camera
          ref={this.camera}
          style={{flex: 1}}
          cameraType={CameraType.Back} // optional
          flashMode="auto" // on/off/auto(default)
          focusMode="on" // off/on(default)
          zoomMode="on" // off/on(default)
          torchMode="off" // on/off(default)
          ratioOverlay="1:1" // optional
          ratioOverlayColor="#00000077" // optional
          resetFocusTimeout={0}
          resetFocusWhenMotionDetected={false}
          saveToCameraRole={false} // iOS only
          scanBarcode={false} // optional
          showFrame={false} // Barcode only, optional
          laserColor="red" // Barcode only, optional
          frameColor="yellow" // Barcode only, optional
          surfaceColor="blue" // Barcode only, optional
          onReadCode={(event: {nativeEvent: {codeStringValue: any}}) =>
            console.log(event.nativeEvent.codeStringValue)
          }
        />
      </View>
    );
  }
}
