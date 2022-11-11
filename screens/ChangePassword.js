import { View, Text, SafeAreaView, StyleSheet, TextInput, Modal, Pressable } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect,useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PwordModal from '../components/PwordModal';

function ChangePassword() {
    const [url, onChangeUrl] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    
    const [modalVisible, setModalVisible] = useState(false);
    
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false
      })
  }, [])
    return (
      <View style={{top: 0, backgroundColor:'white', height: '100%', }} >
        <View style={styles.setnav}>
          <TouchableOpacity onPress={() =>{navigation.goBack('Login')}}>
          <FontAwesome5 name={'chevron-left'}  size={25} color="white" />
          </TouchableOpacity>
          <Text style={{fontSize: 22, color:'white', fontWeight:'bold'}}> Change Password </Text>
          <SimpleLineIcons name="options-vertical" size={20} color="white" />
        </View>
  
        <View style={{padding: 15, marginTop: 20}} > 
          <Text style={styles.label2}> Old Password </Text>
          <TextInput
            style={[styles.input, isFocus && { borderColor: '#017019' }]}
            onChangeText={onChangeUrl}
            onPressIn = {() => setIsFocus(true)}
            onEndEditing = {() => setIsFocus(false)}
            value={url}
            placeholder="Server Url"
            editable
          />
        </View>

        <View style={{ padding: 15 }} > 
          <Text style={styles.label2}> New Password </Text>
          <TextInput
            style={[styles.input, isFocus && { borderColor: '#017019' }]}
            onChangeText={onChangeUrl}
            onPressIn = {() => setIsFocus(true)}
            onEndEditing = {() => setIsFocus(false)}
            value={url}
            placeholder="Server Url"
            editable
          />
        </View>

        <View style={{marginBottom:30, padding: 15}} > 
          <Text style={styles.label2}> Confirm Password </Text>
          <TextInput
            style={[styles.input, isFocus && { borderColor: '#017019' }]}
            onChangeText={onChangeUrl}
            onPressIn = {() => setIsFocus(true)}
            onEndEditing = {() => setIsFocus(false)}
            value={url}
            placeholder="Server Url"
            editable
          />
        </View>
  
        <PwordModal/>
        
        <Text style={{paddingLeft: 15, fontSize:16}}> APMIS server version 3.1.4 </Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    setnav: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       height: 110,
       backgroundColor: '#017019',
       paddingHorizontal: 15,
       paddingTop: 60
       
    },
    label2:{
      color: '#017019',
      fontSize: 16,
      paddingBottom: 5
  
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
    //   width: '99%'
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
      width: '90%',
      marginHorizontal: 10,
     padding: 8
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
  })

export default ChangePassword