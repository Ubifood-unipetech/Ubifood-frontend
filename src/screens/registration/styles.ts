import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    formTitle: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#151E27',
      margin: 10,
      width: '80%',
      textAlign: "center",
    },
    formInput:{
      borderColor: '#151E27',
      color: '#151E27',
      borderWidth: 4,
      borderRadius: 12,
      fontSize: 16,
      width: '80%',
      padding: 10,
      paddingLeft: 24,
      margin: 10
    },
    formButton:{
      backgroundColor: '#151E27',
      width: '80%',
      height: 55,
      margin: 10,
      padding:10,
      borderRadius: 30,
      alignItems: 'center'
    },
    textButton:{
      color:'white',
      fontSize: 20,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    subContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%'
    },
    subButton:{
      padding:10,
    },
    subTextButton:{
      color:'#151E27'
    },
    image: {
      width: 200,
      height: 200,
    },
  });

