import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
// import {Colors, Fonts} from '../contants';
// import {Display} from '../utils';

const PinCase = () => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});

  const [pincode, setPincode] = useState('')
  
  const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false
      })
  }, [])

  return (
    <View style={styles.container}>
  
      <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            textAlign={'center'}
            secureTextEntry
            // value={pincode}
            onChangeText={text => {
              setOtp({...otp, 1: text});
              text && secondInput.current.focus();
            }}
            // onEndEditing={() =>{navigation.navigate('Profile')}}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            secureTextEntry
            textAlign={'center'}
            // value={pincode}
            onChangeText={text => {
              setOtp({...otp, 2: text});
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            secureTextEntry
            textAlign={'center'}
            // value={pincode}
            onChangeText={text => {
              setOtp({...otp, 3: text});
              text ? fourthInput.current.focus() : secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            secureTextEntry
            textAlign={'center'}
            // value={pincode}
            onChangeText={text => {
              setOtp({...otp, 4: text});
              !text && thirdInput.current.focus();
            }}
          />
        </View>
      </View>
      
    </View>
  );
};
export default PinCase
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
    justifyContent:"center",

  },
  
  otpContainer: {
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    justifyContent:"center",
    flexDirection: 'row',
    // backgroundColor:'#D2EADE',
    padding: 5,
    height: 60,
    paddingBottom: 50,
    paddingTop: 30,

  },
  otpBox: {
    borderRadius: 5,
    borderColor: '#017019',
    borderWidth: 1,
    height: 60,
    width: 50,
    marginHorizontal:10
  },
  otpText: {
    fontSize: 25,
    color: '#000',
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 14,
    padding: 10,
    color: '#017019'
  }
});

