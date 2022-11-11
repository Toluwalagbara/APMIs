import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 

import {View, Text, Modal, StyleSheet, createElement, TextInput, Pressable, ActivityIndicator, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SignInBtn } from './Button';


function PwordModal() {
  const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
  return (

    <SafeAreaView> 

<Modal
animationType="fade"
transparent={true}
visible={modalVisible}
>
<View style={styles.overlay}>
  <View style={styles.modalView}>
    
  <View style={{textAlign:'center', justifyContent:'center', alignItems:'center'}}>
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center',  paddingBottom:10}}>
    <Text style={{ fontSize:20, paddingLeft:10, paddingBottom: 5}}>Password Change</Text>
    </View>
    <View style={{flexDirection:'row', alignItems:'center', }}> 
    <MaterialIcons name="done" size={24} color="#017019" />
    <Text style={{paddingBottom: 20}}> You have successfully changed your password</Text>
    </View>

    <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>DONE</Text>
            </Pressable>
    </View>
  </View>
</View>
</Modal>
<View style={{flexDirection:'row', padding:10, marginBottom:20, justifyContent:'space-between',}}> 
                      
                      <Pressable
                                        style={styles.SignIn}
                                        onPress={() => setModalVisible(!modalVisible)}
                                        >
                                        <MaterialIcons name="done" size={24} color="white" />
                                        <Text style={styles.label}>CHANGE PASSWORD</Text>
                                        </Pressable>
                        </View>
</SafeAreaView>

    
  )
}
const styles = StyleSheet.create({
    centeredView: {
      
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        flex: 1,
        top: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22, 
      },
    modalView: {
      margin: 20,
      backgroundColor: "white",
    //   opacity: 0.5,
      borderRadius: 20,
      padding: 15,
      paddingBottom: 30,
      paddingTop: 30,
    //   height: '30%',
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 5,
      width:150,
      padding: 10,
      elevation: 2,
      backgroundColor: "#017019",

    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#017019",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
  
        ButtonSample: {
            borderRadius: 7,
            backgroundColor: '#017019',
            width: 110,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            paddingLeft: 8,
            paddingRight: 8,
        },
        SignIn: {
            borderRadius: 5,
            backgroundColor: '#017019',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 20,
            marginBottom: 70,
            width: '99%',
         padding: 8
        },
        label:{
            color: '#fff',
            fontSize: 16,
            textAlign: 'center',
            paddingLeft: 3
        
            },
        btntxt:{
            color: '#fff',
            fontSize: 12,
            textAlign: 'center',
            paddingLeft: 5
        },
        
  });

export default PwordModal