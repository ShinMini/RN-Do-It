/** @format */
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Image, Text, View, Button } from "react-native";
import Navigation from "./src/components/Navigation";
import sampleImage1 from "./assets/images/sample1.png";
import sampleImage2 from "./assets/images/sample2.png";
import sampleImage3 from "./assets/images/sample3.png";

export default function App() {
  const imageArr = [sampleImage1, sampleImage2, sampleImage3];
  const paragraphArr: string[] = [
    "기본 텍스트1",
    "기본 텍스트2",
    "기본 텍스트3",
  ];

  const [imageSrc, setImageSrc] = React.useState<number>(0);
  const [paragraph, setParagraph] = React.useState<number>(0);

  const changeImg = (): void => {
    if (imageSrc === 2) setImageSrc(0);
    else setImageSrc((imageSrc) => imageSrc + 1);
  };
  const changeParagraph = (): void => {
    if (paragraph === 2) setParagraph(0);
    setParagraph((para) => para + 1);
  };
  return (
    <View style={styles.container}>
      <Navigation />
      <Image style={styles.profileImage} source={imageArr[imageSrc]} />
      <Text style={styles.textContainer}>{paragraphArr[paragraph]}</Text>
      <Button onPress={changeImg} title="Change Image" />
      <Button onPress={changeParagraph} title="Change Text" />

      <Button
        onPress={() => {
          setImageSrc(0);
          setParagraph(0);
        }}
        title="Reset"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
  },
  profileImage: {
    flex: 1,
  },
});
