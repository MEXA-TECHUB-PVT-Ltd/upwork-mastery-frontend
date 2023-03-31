import 'react-native-gesture-handler';
import React, { useState, useRef } from 'react'


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Onbording from './app/src/views/screens/Onbording/Onbording';
import SignIn from './app/src/views/screens/SignIn/SignIn';
import SignUp from './app/src/views/screens/SignUp/SignUp';
import Forget_password from './app/src/views/screens/Forget_password/Forget_password';
import Reset_Password from './app/src/views/screens/Reset_Password/Reset_password';
import Verification from './app/src/views/screens/Verification/Verification';
import Complete_Profile from './app/src/views/screens/Complete_Profile/Complete_Profile';
import Home from './app/src/views/screens/Home/Home';
import My_course from './app/src/views/screens/My_course/My_course';
import Settings from './app/src/views/screens/Settings/Settings';
import Search from './app/src/views/screens/Search/Search';
import Course_Details from './app/src/views/screens/Course_Details/Course_Details';
import Course_video from './app/src/views/screens/Course_video/Course_video';
import Change_password from './app/src/views/screens/Change_password/Change_password';
import AboutUs from './app/src/views/screens/AboutUs/AboutUs';
import Update_Profile from './app/src/views/screens/Update_Profile/Update_Profile';
import Saved_Videos from './app/src/views/screens/Saved_Videos/Saved_Videos';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MainNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onbording"
          component={Onbording}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forget_password"
          component={Forget_password}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reset_Password"
          component={Reset_Password}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Complete_Profile"
          component={Complete_Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Tabb}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Course_Details"
          component={Course_Details}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Course_video"
          component={Course_video}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Change_password"
          component={Change_password}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Update_Profile"
          component={Update_Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Saved_Videos"
          component={Saved_Videos}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
  function Tabb() {
    const [name, setname] = useState("")
    return (
      <Tab.Navigator

        tabBarOptions={{
          labelStyle: {
            fontSize: 10,
            margin: 0,
            padding: 0,

          },
          // style: {

          // },
        }}
        screenOptions={({ route }) => ({


          // tabBarBackground:()=>{
          // (<View style={{
          //   shadowOffset:{width:8,heigh:8},
          //   shadowColor:'gray',
          //   shadowRadius:8}}/>)
          // },



          // tabBarHideOnKeyboard: false,
          // style: {
          //   backgroundColor:'orange',
          //     borderRadius: 500,
          //     height: 70,

          // },


          tabBarLabelStyle: { textAlign: 'center' },
          // tabBarIndicatorStyle: {
          //   borderBottomColor: '#C2D5A8',
          //   borderBottomWidth: 2,
          // },

          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#ffff',

            shadowColor: 'rgba(255,255,255,0.5)',
            shadowOffset: { width: 9, height: 9 },
            shadowOpacity: 1,
            shadowRadius: 6,
            elevation: 10,
            // flexWrap:'wrap', 
            borderTopColor: '#929090',
            borderTopWidth: 0.5,
            // borderWidth:1,
            // borderColor:'gray',

          },

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
              setname("home")
            }

            else if (route.name === 'My_course') {
              iconName = focused ? 'photo-camera-front' : 'photo-camera-front';
              setname("photo-camera-front")
            }
            else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings';
              setname("settings")
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: '#14A800',
          tabBarInactiveTintColor: '#9D9D9D',
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="My_course" component={My_course} options={{ headerShown: false }} />
        <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      </Tab.Navigator>
    );
  }

}
export default MainNavigator;