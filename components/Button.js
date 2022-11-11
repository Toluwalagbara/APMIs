import { useState } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Pressable} from 'react-native'
import { Button } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'


// export function ButtonSample({text, onPress}) {
//   return (
//     <TouchableOpacity>
//         <View style={styles.ButtonSample}>
//           <MaterialIcons name='add-circle-outline' size={15} color='#000' />

//           <Text style={styles.btntxt}>
//               Add Product
//           </Text>
//         </View>
        
//     </TouchableOpacity>
//   )
// }




export function SignInBtn() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
    <Pressable onPress={() => setModalVisible(true)}>
    <View style={styles.SignIn}>
      {/* <MaterialIcons name='add-circle-outline' size={15} color='#000' /> */}

      <Text style={styles.label}>
          SIGN IN
      </Text>
    </View>
    
</Pressable>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
    <Text style={{marginTop: 20, textDecorationLine:'underline', textAlign:'left', color:'#017019'}}>Change settings</Text>
     <Text style={{marginTop: 20, textDecorationLine:'underline', textAlign:'right', color:'#017019'}}>Forgot password?</Text>
     </View>
      </View>
  )
}

const styles= StyleSheet.create({
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
   padding: 7
},
})