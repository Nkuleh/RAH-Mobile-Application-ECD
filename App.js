import React from 'react'
import { StyleSheet, Text, View, useRef, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import TaskCategories from './components/home/TaskCategories';
import ProgressBar from './components/home/ProgressBar';


// Importing font awsome Icons
import {FontAwesome5} from 'react-native-vector-icons'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import MoreOps from './components/more/MoreOps';
import TabViews from './components/deliveries/TabViews';



const Tab = createBottomTabNavigator();

export default function App() {
  //Animated tab indicator top-line

  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
          showLabel: true, // You can turn it to false to make the labels disappear
          style:{
            backgroundColor: 'white',
            position: 'absolute',
            height: 60,
            
            }
      }}
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 100 },
        //tabBarStyle: { backgroundColor: 'powderblue' },
      }}>
        {
          // Tab screens
        }
        <Tab.Screen name={"Home"} component={HomeScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              
            }}>
              <FontAwesome5 name="home" size={20} color={focused ? 'red': 'black'}></FontAwesome5>
            </View>
          )
        }} ></Tab.Screen>

        <Tab.Screen name={"Deliveries"} component={DeliveriesScreen}options={{
          tabBarIcon: ({focused}) => (
            <View>
              <MaterialCommunityIcons name="truck-fast-outline" size={25} color={focused ? 'red': 'black'}></MaterialCommunityIcons>
            </View>
          )
        }}></Tab.Screen>
        <Tab.Screen name={"Notifications"} component={NotificationsScreen} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <FontAwesome5 name="bell" size={20} color={focused ? 'red': 'black'}></FontAwesome5>
            </View>
          )
        }}></Tab.Screen>
        <Tab.Screen name={"More"} component={MoreScreen} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <MaterialCommunityIcons name="dots-horizontal" size={25} color={focused ? 'red': 'black'}></MaterialCommunityIcons>
            </View>
          )
        }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer> 
  );
}



function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{paddingTop:2,paddingBottom:2,marginTop:2, backgroundColor: 'white'}}>
        <Text style={{marginLeft:10}}>Welcome back (placeholder)</Text>
      </View>
      <TaskCategories />
      <View style={{backgroundColor:'white',marginTop:2}}>
      <Text style={{fontWeight:'bold', fontSize: 16, marginLeft: 10}}>Progress of the Projects</Text>
      </View>
      

      <ScrollView style={{paddingTop:10, backgroundColor:"white"}}>
        <View style={{backgroundColor: 'white'}}>
          
          <ProgressBar />
        </View>
        <View style={{height:200, backgroundColor: 'yellow'}}>
          <Text>Test</Text>
        </View>
      </ScrollView>
      
    </View>
  );
}

function DeliveriesScreen() {
  return (
    <View style={{ flex: 1}}>
      <TabViews />
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'red'}}>
      <Text>Notifications!</Text>
    </View>
  );
}

function MoreScreen() {
  return (
    <View style={{ flex: 1}}>
      <MoreOps />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
