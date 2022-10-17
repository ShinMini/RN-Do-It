/** @format */
import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, SafeAreaView, Image, Text, View, Button } from "react-native";
import CameraProp from "./src/components/CameraProp";

export default function App() {
  const [openCamera, setOpenCamera] = useState(false);

  useEffect(() => {
    if (!CameraProp) return undefined;
    return () => {
      <SafeAreaView style={styles.cameraView}>
        <CameraProp />
      </SafeAreaView>;
    };
  }, [openCamera]);

  return (
    <SafeAreaView style={styles.cameraView}>
      <Button title="Open Camera" onPress={() => setOpenCamera(!openCamera)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cameraView: {
    backgroundColor: "black",
  },
});
