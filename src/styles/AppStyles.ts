import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
   appContainer: {
      flex: 1,
      paddingTop: 30,
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      marginHorizontal: 24,
   },
   headerContainer: {
      flexDirection: 'column',
      backgroundColor: '#F5FCFF',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 100,
   },
   headerText: {
      color: 'black',
      fontSize: 24,
      fontWeight: 'bold',
   },
   button: {
      height: 60,
      borderRadius: 30,
      marginVertical: 12,
      width: '100%',
      backgroundColor: '#dddddd',
      justifyContent: 'center',
   },
   buttonText: {
      textAlign: 'center',
      fontSize: 20,
   },
});


export default appStyles;