import {MaterialIcons} from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'; 
import {View, Text,  StyleSheet, createElement, TextInput, Pressable, ActivityIndicator, SafeAreaView, Image } from 'react-native'
import React, { useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SignInBtn } from '../components/Button';
import SyncModal from '../components/SyncModal';
import { useLayoutEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import {SQLite } from 'react-native-sqlite-storage'

// const db = SQLite.openDatabase(
//   {
//     name: 'mainDB',
//     location: 'default'
//   },
//   () => { },
//   error => { console.log(error)}
// )
const Login = () => {
    const [text, onChangeText] = useState("");
    const [pin, onChangePin] = useState("");

    const [password, setPasswordVisible] = useState((true))
    
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false
      })
  }, [])

  return (
    <SafeAreaView> 
    <View style={{padding: 10}}>
      <View style={{justifyContent: 'center', textAlign:'center', alignItems:'center', paddingTop:10}}> 
    <Image source={require('../src/Logo.png')} style={{width: 100, height: 100}}/></View>
      <View style={{marginBottom: 30, alignItems:'center'}}> 
      <Text style={{fontSize:18, textAlign: 'center', marginTop: 30, paddingBottom: 2, fontWeight: '500'}}> AFGHANISTAN POLIO </Text>
      <Text style={{fontSize:18, textAlign: 'center', fontWeight: '500'}}>MANAGEMENT INFORMATION SYSTEM </Text>
      </View>

      <View style={{marginBottom: 30, marginTop: 30}}> 
      <Text style={styles.label1}> SIGN IN </Text>
      <Text style={{fontSize:14, textAlign:'center'}}> Sign into APMIS to continue the journey of saving lives. </Text>
      </View>

      <View style={{marginBottom:30, marginHorizontal:20, width: '90%', alignItems:'center'}}> 
        <View style={{marginBottom:15}} > 
      <Text style={styles.label}> USERNAME </Text>
      <View style={styles.passwordContainer}>
      <MaterialIcons name="person" size={24} color="#017019" style={{padding: 5}} />
  <TextInput
    style={styles.inputStyle}
      autoCorrect={false}
      secureTextEntry={password}
      placeholder="Enter Username"
      onChangeText={onChangePin}
      value={password}
      // keyboardType="numbers-and-punctuation"
    //   onChangeText={setPasswordVisible}
    />
    </View>
      </View>

      <View style={{marginBottom:15}}> 
      <Text style={styles.label}> PASSWORD </Text>

      <View style={styles.passwordContainer}>
      <FontAwesome name="lock" size={24} color="#017019" style={{paddingHorizontal: 8, marginRight: 2}} />
  <TextInput
    style={styles.inputStyle}
      autoCorrect={false}
      secureTextEntry={password}
      placeholder="Enter Password"
      onChangeText={onChangePin}
      value={password}
      // keyboardType="numbers-and-punctuation"
    //   onChangeText={setPasswordVisible}
    />
    <Pressable onPress={() => setPasswordVisible(!password)}>
    <FontAwesome5 name={password ? "eye-slash" : "eye"}  size={15} color={password ? "black" : '#017019'} />
    </Pressable>
    </View>
    </View>
    </View>
    <SyncModal/>
  </View>
  </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 6,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor:'#017019',
        padding: 10,
        width: '98%',
        height: 50
    },
    label:{
        paddingBottom:10,
        // paddingTop:5,
        fontSize: 14,
        fontWeight: '500',
        color: '#017019'
    },
    label1:{
      paddingBottom:10,
      // paddingTop:10,
      color: '#017019',
      fontSize: 24,
      fontWeight: '700',
      textAlign: 'center'
  },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor:'#017019',
        padding: 10,
        width: '98%'
      },
      inputStyle: {
        flex: 1,
        height: 30,
      },
})
export default Login