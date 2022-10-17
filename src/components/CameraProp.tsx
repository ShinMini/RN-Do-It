/** @format */
import React, { useState, useEffect, useRef } from "react";
import { Camera, CameraPictureOptions } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import { SafeAreaView, Image, Text, View, Button } from "react-native";
import CameraStyles from "../style/CameraStyle";

export default function CameraProp() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState(Camera.requestCameraPermissionsAsync);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(MediaLibrary.PermissionStatus.UNDETERMINED);
  // CameraCapturedPicture
  const [photo, setPhoto] = useState(Camera.Constants.Type["CameraPictureOptions"]);

  useEffect(() => {
    async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();

      /** 이러면 카메라 설정 허가 설정 완료. */
      if (cameraPermission.status === MediaLibrary.PermissionStatus.GRANTED) return <Text>success to get Permission for using camera.</Text>; /** 라이브러리 접근 권한 획득 */
      if (mediaLibraryPermission.status === MediaLibrary.PermissionStatus.GRANTED) return <Text>success to get Permission for save photos.</Text>;
    };
  }, []);

  // check to get permission success or fail
  if (hasCameraPermission === undefined) return <Text>need to get Permission for access camera...</Text>;
  if (!hasCameraPermission) return <Text>fail to get Permission about camera.</Text>;

  if (hasMediaLibraryPermission === undefined) return <Text>requesting Permission to access library...</Text>;
  if (!hasMediaLibraryPermission) return <Text>fail to get Permission access library.</Text>;

  // onpress function to take photo button
  const takePicture = async () => {
    const options: CameraPictureOptions = {
      quality: 1,
      base64: true,
      exif: false,
    };

    /** 에러 발생 처리문 */
    if (cameraRef?.current === undefined) return <Text>Error: 현재 찍은 사진 정보를 불러오는데 실패했습니다.</Text>;

    const newPhoto = async () => cameraRef.current.takePictureAsync(options);
    let takenPhoto = await newPhoto;

    setPhoto(takenPhoto);
  };
  // save photo in my local storage
  if (photo) {
    let sharePicutre = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };
    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView>
        <Image style={CameraStyles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />

        <View style={CameraStyles.takenPicture}>
          <Button title="Share" onPress={sharePicutre} />
          {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
          <Button title="Discard" onPress={() => setPhoto(undefined)} />
        </View>
      </SafeAreaView>
    );
  }

  // default return in App
  return (
    <Camera style={CameraStyles.mainContainer} ref={cameraRef}>
      <View style={CameraStyles.marginView10} />
      <View style={CameraStyles.buttonContainer}>
        <Button title="take picture" onPress={takePicture} />
      </View>
      <View style={CameraStyles.marginView2} />
    </Camera>
  );
}
