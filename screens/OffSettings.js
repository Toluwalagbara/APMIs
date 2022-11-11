import { View, Text, SafeAreaView, StyleSheet, TextInput, Modal } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect,useState } from 'react'
import LangList from '../components/LangList';
import { TouchableOpacity } from 'react-native-gesture-handler';

function OffSettings() {

  const [url, onChangeUrl] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  
  
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
}, [])
  return (
    <View style={{top: 0, backgroundColor:'white', height: '100%'} } >
      <View style={styles.setnav}>
        <TouchableOpacity onPress={() =>{navigation.goBack('Login')}}>
        <FontAwesome5 name={'chevron-left'}  size={25} color="white" />
        </TouchableOpacity>
        <Text style={{fontSize: 22, color:'white', fontWeight:'bold'}}> Settings </Text>
        <SimpleLineIcons name="options-vertical" size={20} color="white" />
      </View>

      <View style={{marginBottom:20, padding: 15, marginTop: 20}} > 
        <Text style={styles.label}> Server Url </Text>
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

      <View style={{marginBottom:20, padding: 15}}> 
        <Text style={styles.label}> Languages </Text>
        <LangList/>
      </View>

      <Text style={{paddingLeft: 15, fontSize:18}}> APMIS server version 3.1.4 </Text>
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
     padding: 15,
     paddingTop: 50
     
  },
  label:{
    paddingBottom:10,
    paddingTop:10,
    color: '#017019',
    fontSize: 16,
    fontWeight: 'bold'
},
  input: {
          
    borderRadius: 6,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor:'rgba(174, 174, 174, 1)',
    padding: 10,
    width: '99%'
  },
})

export default OffSettings