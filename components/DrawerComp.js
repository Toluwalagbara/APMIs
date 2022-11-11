import {MaterialIcons} from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'; 
import {View, Text,  StyleSheet, createElement, TextInput, Pressable, ActivityIndicator, SafeAreaView, Image } from 'react-native'
import React, { useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLayoutEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'; 
function DrawerComp() {

  const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false
      })
  }, [])
  return (
    <View> 
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <View style={styles.SignIn}>
            <TouchableOpacity onPress={() => {navigation.navigate('ConfirmPin')}}> 
              <View style={{alignItems:'center'}}>
              <MaterialIcons name="add" size={30} color="white" />
                <Text style={styles.label1}> New Form </Text>
              </View>
            </TouchableOpacity>
        </View>

        <View style={styles.SignIn}>
            <TouchableOpacity onPress={() => {navigation.navigate('ConfirmPin')}}> 
              <View style={{alignItems:'center'}}>
            <MaterialCommunityIcons name="clipboard-check-outline" size={28} color="white"/>

                <Text style={styles.label1}> Campagins </Text>
              </View>
            </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <View style={styles.SignIn}>
            <TouchableOpacity onPress={() => {navigation.navigate('ConfirmPin')}}> 
              <View style={{alignItems:'center'}}>
              <MaterialIcons name="add" size={30} color="white" />
                <Text style={styles.label1}> Add Campaign </Text>
              </View>
            </TouchableOpacity>
        </View>

        <View style={styles.SignIn}>
            <TouchableOpacity onPress={() => {navigation.navigate('ConfirmPin')}}> 
              <View style={{alignItems:'center'}}>
              <MaterialIcons name="person-outline" size={28} color="white" />

                <Text style={styles.label1}> My Profile </Text>
              </View>
            </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <View style={styles.SignIn}>
            <TouchableOpacity onPress={() => {navigation.navigate('ConfirmPin')}}> 
              <View style={{alignItems:'center'}}>
              <Ionicons name="ios-settings-outline" size={28} color="white" />
                <Text style={styles.label1}> User Settings </Text>
              </View>
            </TouchableOpacity>
        </View>

        <View style={styles.SignIn}>
            <TouchableOpacity onPress={() => {navigation.navigate('ConfirmPin')}}> 
              <View style={{alignItems:'center'}}>
              <Ionicons name="ios-lock-open-outline" size={28} color="white" />
                <Text style={styles.label1}> Reset Pin </Text>
              </View>
            </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection:'row', marginLeft: 20}}>
        <View style={styles.SignIn}>
            <TouchableOpacity onPress={() => {navigation.navigate('ConfirmPin')}}> 
              <View style={{alignItems:'center'}}>
              <MaterialIcons name="logout" size={24} color="#ffff"/>
                <Text style={styles.label1}> Logout </Text>
              </View>
            </TouchableOpacity>
        </View>
        
      </View>
    </View>

    

  )
}

export default DrawerComp

const styles = StyleSheet.create({
 
  label1:{
    paddingBottom:10,
    paddingTop:10,
    color: '#fff',
    fontSize: 16,
    fontWeight: '500'
},
  sub:{
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 100,
  },
  SignIn: {
    borderRadius: 5,
    backgroundColor: '#0E693A',
    width: 130,
    height: 130,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign:'center', 
    marginTop: 30,
    shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},
  
})
