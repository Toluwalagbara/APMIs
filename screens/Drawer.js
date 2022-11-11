// import { createDrawerNavigator } from '@react-navigation/drawer';
// import {View, Text,  StyleSheet, createElement } from 'react-native'
// import CampaignHome from './CampaignHome';
// import SideProfile from './SideProfile';



// const Drawer = createDrawerNavigator();

// export default function CampDrawer() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         initialRouteName="CHome"
//         drawerPosition='left'
//         drawerType="front"
//         edgeWidth={100}
//         hideStatusBar={false}
//         overlayColor='#00000090'
//         drawerStyle={{
//           backgroundColor: '#e6e6e6',
//           width: 250
//         }}
//         screenOptions={{
//           headerShown: true,
//           swipeEnabled: true,
//           gestureEnabled: true,
//           headerTitleAlign: 'center',
//           headerStyle: {
//             backgroundColor: '#0080ff'
//           },
//           headerTintColor: '#ffffff',
//           headerTitleStyle: {
//             fontSize: 25,
//             fontWeight: 'bold'
//           }
//         }}
//       >
//         <Drawer.Screen
//           name="CHome"
//           component={CampaignHome}
//           options={{
//             title: 'Screen_A Title',
//             drawerIcon: ({ focused }) => (
//               <FontAwesome5
//                 name="autoprefixer"
//                 size={focused ? 25 : 20}
//                 color={focused ? '#0080ff' : '#999999'}
//               />
//             )
//           }}
//         />
//         <Drawer.Screen
//           name="SProfile"
//           component={SideProfile}
//           options={{
//             title: 'Screen_B Title',
//             drawerIcon: ({ focused }) => (
//               <FontAwesome5
//                 name="btc"
//                 size={focused ? 25 : 20}
//                 color={focused ? '#0080ff' : '#999999'}
//               />
//             )
//           }}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   )
// }