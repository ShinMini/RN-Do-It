import { NativeModules } from 'react-native';

import Camera from 'react-native-camera-kit';
import CameraScreen, { CameraType } from 'react-native-camera-kit';
import type { CameraApi } from 'react-native-camera-kit';

const { CameraKit } = NativeModules;

// Start with portrait/pointing up, increment while moving counter-clockwise
export const Orientation = {
   PORTRAIT: 0, // ⬆️
   LANDSCAPE_LEFT: 1, // ⬅️
   PORTRAIT_UPSIDE_DOWN: 2, // ⬇️
   LANDSCAPE_RIGHT: 3, // ➡️
};

export default CameraKit;

export { Camera, CameraScreen, CameraType, CameraApi };