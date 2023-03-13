import React from "react";
import {View,Text, Image, StyleSheet, TextInput} from 'react-native';
import { button1, formgroup, head1, input, label } from "../common/formcss";
import { head2 } from "../common/formcss";


const Login = () =>{
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/background.png')} style={styles.imageBG}></Image>
      <View style={styles.container1}>
        <View style={styles.s1}>
            <Image source={require('../../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.h1}>your productivity assistent</Text>
        </View>
        <View style={styles.s2}>
            <Text style={head1}>Login</Text>
            <Text style={head2}>Sign in to continue</Text>
            <View style={formgroup }>
              <Text style={label}>Email</Text>
              <TextInput  style={input}/>
            </View>

            <View style={formgroup }>
              <Text style={label}>Password</Text>
              <TextInput  style={input}/>
            </View>

            <View style={styles.fp}>
                <Text style={styles.link}>forgot Password</Text>
            </View>

            <Text style={button1}>Login</Text>
            <Text style={styles.link2}>Don't have an account ? create new account</Text>
        </View>

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
  s1:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
  },
  s2:{
      display:'flex',
      width:'100%',
      height:'50%',
      backgroundColor:'white',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      marginTop:28,
      padding:20,
      marginLeft:10,
      marginRight:20

  },
  h1:{
      fontSize:25,  
  },
  logo:{
    width:300,
    height:300,
    borderRadius:300
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
  },
  fp:{
    color:'black',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    marginHorizontal:10,
    marginVertical:5
  },
  link :{
    color:'#B5C135',
    fontSize:15
  }, 
   link2 :{
    color:'#B5C135',
    fontSize:15,
    marginVertical:5
  }

})
export default Login;
