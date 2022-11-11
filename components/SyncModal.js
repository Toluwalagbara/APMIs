import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 

import {View, Text, Modal, StyleSheet, createElement, TextInput, Pressable, ActivityIndicator, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SignInBtn } from './Button';


function SyncModal() {
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
    <ActivityIndicator size="small" color="#017019" />
    <Text style={{ fontSize:20, paddingLeft:10}}>Synchronizing</Text>
    </View>
    <Text style={{paddingBottom: 5}}> Initial synchronizing with APMIS data.</Text>
    <Text> Pulling infrastructure data will take a few minutes.</Text>
    <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
    </View>
  </View>
</View>
</Modal>
    <Pressable onPress={() => setModalVisible(true)} style={{alignItems:'center'}}>
    <View style={styles.SignIn}>
      {/* <MaterialIcons name='add-circle-outline' size={15} color='#000' /> */}
      <Text style={styles.label}>
          SIGN IN
      </Text>
      {/* <MaterialIcons name="navigate-next" size={24} color="#fff" /> */}
    </View>


    {/* TO BE REMOVED */}
</Pressable>
<View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:20}}>
  <TouchableOpacity onPress={() =>{navigation.navigate('ChangeSettings')}}> 
    <Text style={{marginTop: 20, textDecorationLine:'underline', textAlign:'left', color:'#017019'}}>Change settings</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() =>{navigation.navigate('ChangePassword')}}> 
  <Text style={{marginTop: 20, textDecorationLine:'underline', textAlign:'left', color:'#017019'}}>Forgot Password </Text>
  </TouchableOpacity>
  
     </View>

      <Pressable onPress={() =>{navigation.navigate('CreatePin')}} style={{alignItems:'center'}}>
    <View style={styles.SignIn}>
      {/* <MaterialIcons name='add-circle-outline' size={15} color='#000' /> */}

      <Text style={styles.label}>
          CREATE PIN
      </Text>
    </View>
    
</Pressable>
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
      borderRadius: 20,
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
          borderRadius: 10,
          backgroundColor: '#017019',
          width: '90%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginTop: 20,
          // marginHorizontal: 100
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
         padding: 7
        }
  });

export default SyncModal