import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomDrawer from './components/CustomDrawer';
import {View, Text,  StyleSheet, createElement } from 'react-native'
import Login from './screens/Login';
import Settings from './screens/Settings';
import CreatePin, { ConfirmPin } from './screens/CreatePin';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import CampaignHome from './screens/CampaignHome';
import SideProfile from './screens/SideProfile';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import OffSettings from './screens/OffSettings';
import PostNIDs from './campaigns/PostNIDs';
import DrawerComp from './components/DrawerComp';
import ChangePassword from './screens/ChangePassword';


// import CampDrawer from './screens/Drawer';


const Drawer = createDrawerNavigator();

function DrawerRoot () {
  return (
    
  <Drawer.Navigator
    initialRouteName="CHome"
    drawerPosition='left'
    drawerType="slide"
    hideStatusBar={true}
    overlayColor='#00000090'
    screenOptions={{
      headerShown: false,
      swipeEnabled: true,
      gestureEnabled: true,
      headerTitleAlign: 'center',
      swipeEdgeWidth: 600,
      drawerActiveBackgroundColor: '#017019',
      drawerActiveTintColor:'#fff',
      drawerInactiveTintColor: '#017019',
      headerStyle: {
        backgroundColor: '#0080ff',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontSize: 25,
        fontWeight: 'bold'
      },
      drawerStyle : {
        backgroundColor: '#fff',
        width: 350
      },
      drawerLabelStyle:{
        marginLeft: -25,
        fontSize: 20
      }
    }}
    drawerContent={props=> <CustomDrawer {...props} /> }
  >
    <Drawer.Screen
      name="CHome"
      component={CampaignHome}
      options={{
        title: 'Campaigns',
        drawerIcon: ({ focused }) => (
          <MaterialCommunityIcons name="clipboard-check-outline"
            // size={focused ? 25 : 20}
            size={25}
            color={focused ? '#fff' : '#017019'}
           
          />
        )
      }}
    />
    {/* <Drawer.Screen
      name="OffSet"
      component={OffSettings}
      options={{
        title: 'Settings',
        drawerIcon: ({ focused }) => (
          <MaterialIcons
            name="settings"
            // size={focused ? 30 : 25}
            size={20}
            color={focused ? '#fff' : '#017019'}
          />
        )
      }}
    /> */}
  </Drawer.Navigator>
  )
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="PostNID" component={PostNIDs} /> */}
        {/* <Stack.Screen name="DrawerComp" component={DrawerComp}/> */}

        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="ChangeSettings" component={Settings} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="CreatePin" component={CreatePin} />
        <Stack.Screen name="ConfirmPin" component={ConfirmPin} />
        <Stack.Screen name="DrawerRoot" component={DrawerRoot} 
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
  </NavigationContainer>
  
  
  );
}
