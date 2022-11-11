import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons'; 
import { vh } from 'react-native-expo-viewport-units';
import PinCase from './PinCase';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react'
import DrawerComp from './DrawerComp';


const CustomDrawer = (props) => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
}, [])
  return (
    <View style={{flex: 1, backgroundColor:'#ECECEC'}}> 
    <DrawerContentScrollView {...props}>
        <View style={{flexDirection:'row', alignItems:'center',  paddingHorizontal: 15, paddingTop: 15, paddingBottom: 20 }}> 
        <Image source={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} style={{height: 50, width:50, marginHorizontal: 10, borderRadius:50}}/>
       
        <Text style={{color: '#017019', fontSize: 20, fontWeight: '600' }}>Success Lee</Text>
        </View>
        <View style={{flex:1,  paddingVertical: 10,backgroundColor: '#0E693A', height: vh(100) }}>
          <View > 
            <DrawerComp/>
        {/* <DrawerItemList {...props} /> */}
        </View>
        {/* <View>
        <TouchableOpacity style={{margin: 20, flexDirection:'row', alignItems:'center', paddingBottom: 50}}> 
    <MaterialIcons name="logout" size={24} color="#ffff" />
        <Text style={{color: '#fff', fontSize: 20, paddingHorizontal: 5,  }}>LOGOUT</Text>
        </TouchableOpacity>
    </View> */}
        <Text style={{color: 'white', fontSize: 16, fontWeight: '500', margin:20 }}>APMIS Server Version 3.1.4</Text>
        </View>

    </DrawerContentScrollView>

    </View>

  )
}

export default CustomDrawer