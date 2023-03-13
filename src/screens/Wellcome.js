import React from "react";
import {View,Text, Image, StyleSheet} from 'react-native';


const Wellcome = () =>{
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/background.png')} style={styles.imageBG}></Image>
      <View style={styles.container1}>
        <Image source={require('../../assets/WellcomeLogo.png')} style={styles.logo}/>
        <Text style={styles.btnSyle}>Login</Text>
        <Text style={styles.btnSyle}>Signup</Text>

      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%'

  },
  imageBG:{
    width:'100%',
    height:'100%',
    top:0,
    position:'absolute',
    zIndex:-1,
  },
  headerr:{
    fontSize:30,
    color:'white',
  },
  container1:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    width:'100%'
  },
  logo:{
    width:200,
    height:200,
    borderRadius:40
  },
  btnSyle:{
         backgroundColor:'#B5C135',
        color:'black',
        padding:10,
        borderRadius:5,
        fontSize:20,
        width:150,
        textAlig:'center',
        margin:10,
        textAlign:'center'
  }
})
export default Wellcome;