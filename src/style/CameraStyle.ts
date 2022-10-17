import { StyleSheet } from "react-native";

const CameraStyles = StyleSheet.create({
   mainContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
   },
   marginView10: {
      flex: 10,
      backgroundColor: "transparent",
   },
   marginView2: {
      flex: 2,
      backgroundColor: "transparent",
   },
   buttonContainer: {
      flex: 1,
      backgroundColor: "black",
      alignItems: "flex-end",
      alignSelf: "center",
   },
   preview: {
      alignSelf: "stretch",
      flex: 9,
   },
   takenPicture: {
      flex: 1,
      flexDirection: "row",
      alignSelf: "flex-end",
   },
});

export default CameraStyles;