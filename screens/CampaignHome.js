import {View, Text, Modal, StyleSheet, createElement, TextInput, Pressable, ActivityIndicator, SafeAreaView } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import FormList from '../components/FormList';


function CampaignHome({navigation}) {

  const [modalVisible, setModalVisible] = useState(false);
  const onPressHandler = () => {
    // navigation.navigate('SProfile');
    navigation.toggleDrawer();
}
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
}, [])
  
  
  return (
    <View style={{top: 0, backgroundColor:'white', height: '100%'} } >
      <View style={styles.setnav}>
        <View style={{flexDirection:'row', alignItems:'center'}}> 
        <TouchableOpacity onPress={onPressHandler}>
        <MaterialCommunityIcons name="menu" size={28} color="white" />
        </TouchableOpacity>
        <Text style={{fontSize: 20, color:'white', fontWeight:'500', paddingLeft: 5}}> Campaign Data </Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}> 
        <AntDesign name="filter" size={22} color="white" style={{paddingRight:20}} />
        {/* <Ionicons name="md-filter-sharp" size={23} color="white" style={{paddingRight:20}} /> */}
        <SimpleLineIcons name="options-vertical" size={20} color="white" />
        </View>

      </View>

      <TouchableOpacity style={styles.addicon} onPress={() => setModalVisible(true)}> 
      
      <AntDesign name="pluscircle" size={50} color="#017019" /> 
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        >
            <View style={styles.overlay}>
                <View style={styles.modalView}>     
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center',  paddingBottom:10}}>
                    <Text style={{ fontSize:20, paddingLeft:10}}>Select campaign form </Text>
                    </View>
                    <Text style={{paddingBottom: 5, textAlign: 'center',}}>Please select data from which you want to extract data</Text>
                    <View>
                        <View style={{flexDirection:'row', marginVertical: 15, alignItems:'center'}}>
                    <Text style={{ paddingRight: 5, color:'#017019', fontSize: 16, fontWeight:'500'}}>FORM</Text>
                    <FontAwesome5 name="star-of-life" size={10} color="#FF0000" />
                    </View> 
                    <FormList/>
                      <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop: 5}}> 
                      <Pressable
                              style={styles.SignIn1}
                              onPress={() => setModalVisible(!modalVisible)}
                              >
                              <MaterialIcons name='clear' color= '#017019' size={24} /> 
                              <Text style={styles.label1}>DISMISS</Text>
                      </Pressable>
                      <Pressable
                              style={styles.SignIn}
                              onPress={() => setModalVisible(!modalVisible)}
                              >
                              <MaterialIcons name="done" size={24} color="white" />
                              <Text style={styles.label}>PROCEED</Text>
                              </Pressable>
                      </View>
                    </View>
                </View>
                
            </View>
        </Modal>
    </View>
  )
}
export default CampaignHome

const styles = StyleSheet.create({
  setnav: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     height: 110,
     backgroundColor: '#017019',
     padding: 15,
     paddingTop: 50
     
  },
  addicon:{
    height: "90%",
    width: '100%',
    justifyContent:'flex-end',
    // alignItems: 'flex-end',
    marginLeft: '82%',
    // marginTop:'90%'

  },
  label:{
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    paddingLeft: 3

    },
label1:{
    color: '#017019',
    fontSize: 16,
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
  margin: 15,
  backgroundColor: "white",
  borderRadius: 10,
  padding: 15,
  paddingBottom: 30,
  paddingTop: 30,

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
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
      marginTop: 20 
      ,
   padding: 8
  },
  SignIn1: {
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#017019',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 10,
   padding: 8
},
    btntxt:{
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        paddingLeft: 5
    },
    
});

