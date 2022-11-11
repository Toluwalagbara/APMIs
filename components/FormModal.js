import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {View, Text, Modal, StyleSheet, createElement, TextInput, Pressable, ActivityIndicator, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SignInBtn } from './Button';


function FormModal() {
  const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
  return (

        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        >
            <View style={styles.overlay}>
                <View style={styles.modalView}>
                    
                <View style={{textAlign:'center', justifyContent:'center', alignItems:'center'}}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center',  paddingBottom:10}}>
                    <Text style={{ fontSize:20, paddingLeft:10}}>Synchronizing</Text>
                    </View>
                    <Text style={{paddingBottom: 5}}> Initial synchronizing with APMIS data.</Text>
                    <Text> Pulling infrastructure data will take a few minutes.</Text>
                    <Pressable
                            style={styles.SignIn}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.label}>Hide Modal</Text>
                    </Pressable>
                    </View>
                </View>
            </View>
        </Modal>


    
  )
}
const styles = StyleSheet.create({
    
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
      borderRadius: 5,
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
      borderRadius: 10,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
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
          width: '98%',
          // height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginTop: 20
      },
        btntxt:{
            color: '#fff',
            fontSize: 12,
            textAlign: 'center',
            paddingLeft: 5
        },
        label:{
          color: '#fff',
          fontSize: 16,
          textAlign: 'center',
         padding: 7}
  });

export default FormModal