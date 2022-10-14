/** @format */
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  View,
  Button,
} from "react-native";

export default function App() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState(
    Camera.requestCameraPermissionsAsync
  );
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(
    MediaLibrary.PermissionStatus.UNDETERMINED
  );
  // CameraCapturedPicture
  const [photo, setPhoto] = useState(
    Camera.Constants.Type["CameraPictureOptions"]
  );

  useEffect(() => {
    async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();

      if (cameraPermission.status === MediaLibrary.PermissionStatus.GRANTED) {
        // 이러면 카메라 설정 허가 설정 완료.
        return <Text>success to get Permission for using camera.</Text>;
      }
      if (
        mediaLibraryPermission.status === MediaLibrary.PermissionStatus.GRANTED
      ) {
        // 라이브러리 접근 권한 획득
        return <Text>success to get Permission for save photos.</Text>;
      }
    };
  }, []);

  // check to get permission success or fail
  if (hasCameraPermission === undefined) {
    return <Text>requesting Permission to access camera...</Text>;
  } else if (!hasCameraPermission) {
    return <Text>fail to get Permission about camera.</Text>;
  }

  if (hasMediaLibraryPermission === undefined) {
    return <Text>requesting Permission to access library...</Text>;
  } else if (!hasMediaLibraryPermission) {
    return <Text>fail to get Permission access library.</Text>;
  }

  // onpress function to take photo button
  const takePicture = async () => {
    const options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    if (cameraRef === undefined) return;
    let newPhoto = await cameraRef.current.takePictureAsync(options);
  };

  // save photo in my local storage
  if (photo) {
    let sharePicutre = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };
    let savePhoto = () => {
      () => {
        MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
          setPhoto(undefined);
        });
      };
    };
    return (
      <SafeAreaView>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        <Button title="Share" onPress={sharePicutre} />
        {hasMediaLibraryPermission ? (
          <Button title="Save" onPress={sharePicutre} />
        ) : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }

  // default return in App
  return (
    <Camera style={styles.mainContainer} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Button title="take picture" onPress={takePicture} />
        <StatusBar style="auto" />
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "white",
    alignSelf: "center",
  },
  preview: {
    algins: 1,
    alignSelf: "stretch",
  },
});
