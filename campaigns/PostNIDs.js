import {View, Text, Modal, StyleSheet, createElement, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { CampaingDD, CampaingDD1 } from '../components/CampaingDD';
import { Button } from 'react-native'
import {DatePickerIOS} from 'react-native';
import DatePicker from 'react-native-date-picker';

function PostNIDs() {
    const [url, onChangeUrl] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    const [chosenDate, setChosenDate] = useState(new Date());
    const navigation = useNavigation();
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
        {/* <View style={{flexDirection:'row', alignItems:'center'}}>  */}
        <TouchableOpacity onPress={onPressHandler}>
        <FontAwesome5 name="chevron-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{fontSize: 20, color:'white', fontWeight:'500', paddingLeft: 5}}> Add Campaign </Text>
        {/* </View> */}
        {/* <View style={{flexDirection:'row', alignItems:'center'}}>  */}
        <MaterialIcons name="done" size={24} color="#fff" />
        {/* <Ionicons name="md-filter-sharp" size={23} color="white" style={{paddingRight:20}} /> */}
        <SimpleLineIcons name="options-vertical" size={20} color="white" />
        {/* </View> */}
      </View>

      <ScrollView style={{marginTop: 30, margin:15}} showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:'row', justifyContent: 'space-between', marginBottom:20}}>
            <View > 
                <Text style={styles.InputText}> CAMPAIGN </Text>
                <CampaingDD/>
            </View>
            <View style={{width: 165}}> 
                <Text style={styles.InputText}> FORM DATE </Text>
                {/* <View style={{marginBottom:20, padding: 15, marginTop: 20}} >  */}
        
            {/* <Pressable onPress={() => setModalVisible(true)} > 
                <View > 
                <Text
                style={[styles.input, isFocus && { borderColor: '#017019' }]}
                // onChangeText={onChangeUrl}
                // onPressIn={() => setOpen(true)}
                // onPressIn = {() => setIsFocus(true)}
                // onEndEditing = {() => setIsFocus(false)}
                // value={url}
                placeholder="Select Date"
                // editable
                
                /> 
                </View>
               </Pressable> */}
                {/* <DatePicker/> */}
                {/* </View> */}
            </View>
        </View>

        <View style={{flexDirection:'row', justifyContent: 'space-between', marginBottom:20}}>
            <View> 
                <Text style={styles.InputText}> REGION </Text>
                <CampaingDD/>
            </View>
            <View> 
                <Text style={styles.InputText}> PROVINCE </Text>
                <CampaingDD/>
            </View>
        </View>

        <View style={{flexDirection:'row', justifyContent: 'space-between', marginBottom:20}}>
            <View> 
                <Text style={styles.InputText}> DISTRICT </Text>
                <CampaingDD/>
            </View>
            <View> 
                <Text style={styles.InputText}> CLUSTER </Text>
                <CampaingDD/>
            </View>
        </View>
            <Text style={{fontSize:18, fontWeight:'600', marginTop:40, marginBottom:20}}>Post NIDs Household Monitoring H2H</Text>
            <Text style={{fontSize:18,fontWeight:'400', marginVertical:20}}>CLUSTER INFORMATION:</Text>

            <View style={{marginBottom:20}}> 
                <Text style={styles.InputText}> VISIT DATE </Text>
                <CampaingDD1/>
            </View>

            <View style={{marginBottom:20}}> 
                <Text style={styles.InputText}> TEAM NUMBER </Text>
                <CampaingDD1/>
            </View>

            <View style={{marginBottom:20}}> 
                <Text style={styles.InputText}> VILLAGE NAME </Text>
                <CampaingDD1/>
            </View>

            <View style={{marginBottom:20}}> 
                <Text style={styles.InputText}> NAME OF MONITOR </Text>
                <CampaingDD1/>
            </View>

            <View style={{marginBottom:20}}> 
                <Text style={styles.InputText}> NUMBER OF VISITED HOUSES </Text>
                <CampaingDD1/>
            </View>

            <Text style={{fontSize:18,fontWeight:'400', marginVertical:20}}>Recall:</Text>

            <View style={{marginBottom:20}}> 
                <Text style={styles.InputText}> TOTAL NUMBER OF CHILDREN AT HOME </Text>
                <CampaingDD1/>
            </View>

            <View style={{marginBottom:20}}> 
                <Text style={styles.InputText}> TOTAL NUMBER OF CHILDREN FINGER MARKED </Text>
                <CampaingDD1/>
            </View>

            <View style={{marginBottom:20}}> 
                <Text style={styles.InputText}> TOTAL CHILDREN SEEN </Text>
                <CampaingDD1/>
            </View>

            <View style={{marginBottom:20}}> 
                <Text  style={styles.InputText}> TOAL CHILDREN FINGER MARKED </Text>
                <CampaingDD1/>
            </View>
            <View style={styles.container}>
      
    </View>
    {/* <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        >
            <View style={{marginTop:'50%', backgroundColor:'#000'}}> 
    <DatePickerIOS
        date={chosenDate}
        onDateChange={setChosenDate}
        mode={'date'}
        style={{color:'#fff'}}
        // maximumDate= {'December 31, 2017'}
      />
      </View>
        </Modal> */}

      </ScrollView>
      </View>
  )
}

export default PostNIDs

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
  input: {
          
    borderRadius: 6,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor:'rgba(174, 174, 174, 1)',
    padding: 10,
    width: '99%'
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

      InputText:{
        color: '#017019',
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 5
      }
      
  });