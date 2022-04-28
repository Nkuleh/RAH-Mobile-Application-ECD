import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import Ionicons from "react-native-vector-icons/Ionicons";


const MoreOps = () => {
  return (
    <View style={styles.mainContainer}>
      {/*---------Profile Section------------------*/}
      <View style={{flexDirection:'row'}}> 
        <MaterialCommunityIcons name="account-edit-outline" size={40} style={{marginLeft: 15}}></MaterialCommunityIcons>

        <Text style={{paddingTop:10, marginLeft: 5, fontSize: 16}} >Profile</Text>
      </View>
      {/*---------Settings------------------*/}
      <View style={{flexDirection:'row'}}> 
        <Ionicons name="settings-outline" size={40} style={{marginLeft: 15}}></Ionicons>

        <Text style={{paddingTop:10, marginLeft: 5, fontSize: 16}} >Settings</Text>
      </View> 
       {/*---------Support------------------*/}
      <View style={{flexDirection:'row'}}> 
        <Ionicons name="help-circle-outline" size={40} style={{marginLeft: 15}}></Ionicons>

        <Text style={{paddingTop:10, marginLeft: 5, fontSize: 16}} >Support</Text>
      </View> 
{/*This is a comment*/}

      

      <View style={{ bottom: 50, position:'absolute'}}> 
      
      <View style={{flexDirection:'row'}}>
      <View style={{height:1, backgroundColor:'black', width:'95%',marginLeft:10}}> 
        
        </View>
      </View>
    </View> 



      <View style={{ bottom: 10, position:'absolute'}}> 
      
        <View style={{flexDirection:'row'}}>
          <MaterialCommunityIcons name="logout" size={30} style={{marginLeft: 15}}></MaterialCommunityIcons>

          <Text style={{paddingTop:7, marginLeft: 5, fontSize: 14}} >Logout</Text>
        </View>
      </View> 
      
      

    </View>
  )
}


const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    marginTop: 2,
    backgroundColor: 'white',
  },
  bottom_container: {
    flex: 1,
    position: 'absolute',
    height:10,
    bottom: 0,
    color:'yellow'
  },
})

export default MoreOps