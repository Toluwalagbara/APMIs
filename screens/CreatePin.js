import { Text, View, StyleSheet, TextInput, SafeAreaView, Pressable, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect,useState } from 'react'

import PinCase from '../components/PinCase'

export default function CreatePin() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
}, [])

  return (
    <SafeAreaView> 
      {/* <View style={{justifyContent:'center', alignItems:'center', padding:15, textAlign:'center', marginTop: 50,}}>
          <Text style={styles.label}> CREATE PIN </Text>
          <Text style={styles.sub}> Please input a four-digit pin which you will use to authenticate yourself whenever you open the APMIS app </Text>
          <PinCase/>
      </View> */}

      <View style={{justifyContent:'center', alignItems:'center', padding:15, textAlign:'center', marginTop: 50,}}>
          <Text style={styles.label}> CREATE PIN </Text>
          <Text style={styles.sub}> Please input a four-digit pin which you will use to authenticate yourself whenever you open the APMIS app </Text>
          <PinCase/>
          <View style={styles.SignIn}>
          <TouchableOpacity onPress={() => {navigation.navigate('ConfirmPin')}}> 
            <View >
              <Text style={styles.label1}> CREATE PIN </Text>
            </View>
          </TouchableOpacity>
          </View>
      </View>
    
    </SafeAreaView>
  )
}

export function ConfirmPin() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
}, [])

  return (
    <SafeAreaView> 
      {/* <View style={{justifyContent:'center', alignItems:'center', padding:15, textAlign:'center', marginTop: 50,}}>
          <Text style={styles.label}> CREATE PIN </Text>
          <Text style={styles.sub}> Please input a four-digit pin which you will use to authenticate yourself whenever you open the APMIS app </Text>
          <PinCase/>
      </View> */}

      <View style={{justifyContent:'center', alignItems:'center', padding:15, textAlign:'center', marginTop: 50,}}>
          <Text style={styles.label}> CONFIRM PIN </Text>
          <Text style={styles.sub}> Please confirm your pin before you proceed </Text>
          <PinCase/>
          <View style={styles.SignIn}>
          <TouchableOpacity onPress={() => {navigation.navigate('DrawerRoot')}}> 
            <View >
              <Text style={styles.label1}> CONFIRM PIN </Text>
            </View>
          </TouchableOpacity>
          </View>
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
        // padding: 10,
        width: '99%',
        height: 65
    },
    label:{
        paddingBottom:10,
        paddingTop:5,
        color: '#017019',
        fontSize: 24,
        fontWeight: '800', 
    },
    label1:{
      paddingBottom:10,
      paddingTop:10,
      color: '#fff',
      fontSize: 16,
  },
    sub:{
      textAlign: 'center',
      fontSize: 14,
      marginBottom: 100,
    },
    SignIn: {
      borderRadius: 5,
      backgroundColor: '#017019',
      width: '98%',
      height: 50,
      
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      textAlign:'center', 
      marginTop: '50%'
  },
    
})
