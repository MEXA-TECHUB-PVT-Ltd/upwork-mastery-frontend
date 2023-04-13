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

import My_course from './app/src/views/screens/My_course/My_course';
import Settings from './app/src/views/screens/Settings/Settings';
import Search from './app/src/views/screens/Search/Search';
import Course_Details from './app/src/views/screens/Course_Details/Course_Details';
import Course_video from './app/src/views/screens/Course_video/Course_video';
import Change_password from './app/src/views/screens/Change_password/Change_password';
import AboutUs from './app/src/views/screens/AboutUs/AboutUs';
import Update_Profile from './app/src/views/screens/Update_Profile/Update_Profile';
import Saved_Videos from './app/src/views/screens/Saved_Videos/Saved_Videos';
import Payment_Screen from './app/src/views/screens/Payment_Screen/Payment_Screen';
import Promocode from './app/src/views/screens/Promocode/Promocode';
import Stripe_screen from './app/src/views/screens/Stripe_screen/Stripe_screen';
import Privacy_Policy from './app/src/views/screens/Privacy_Policy/Privacy_Policy';
import Term_condition from './app/src/views/screens/Term_condition/Term_condition';
import Paypal from './app/src/views/screens/Paypal/Paypal';
import Checkout from './app/src/views/screens/Paypal/Checkout';

import First_screen from './app/src/views/screens/First_screen'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


global.url = "https://postgres-php-staging-projects.mtechub.com.mtechub.com/server/apis/"

function MainNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*       
      <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Paypal"
          component={Paypal}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Stripe_screen"
          component={Stripe_screen}
          options={{ headerShown: false }}
        /> */}

        {/* <Stack.Screen
          name="Payment_Screen"
          component={Payment_Screen}
          options={{ headerShown: false }}
        /> */}


        {/* <Stack.Screen
          name="First_screen"
          component={First_screen}
          options={{ headerShown: false }}
        /> */}
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
        <Stack.Screen
          name="Privacy_Policy"
          component={Privacy_Policy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Term_condition"
          component={Term_condition}
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
            color: 'pink'
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
          //   backgroundColor: 'orange',
          //   borderRadius: 500,
          //   height: 70,
          // },


          tabBarLabelStyle: { textAlign: 'center' },
          // tabBarIndicatorStyle: {
          //   borderBottomColor: '#C2D5A8',
          //   borderBottomWidth: 2,
          // },

          tabBarShowLabel: true,

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

            if (route.name === 'My_course') {
              iconName = focused
                ? 'home'
                : 'home';
              setname("home")
            }

            else if (route.name === 'Promocode') {
              iconName = focused ? 'confirmation-num' : 'confirmation-num';
              setname("confirmation-num")
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
        <Tab.Screen name="My_course" component={My_course} options={{ headerShown: false, title: 'Home' }} />
        <Tab.Screen name="Promocode" component={Promocode} options={{ headerShown: false, title: 'Promo Codes', }} />
        <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false, title: 'Settings' }} />
      </Tab.Navigator>
    );
  }

}
export default MainNavigator;