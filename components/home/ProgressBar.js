import { View, Text, StyleSheet, Animated } from 'react-native'
import React from 'react'
//import * as Progress from 'react-native-progress'
import * as Progress from 'react-native-progress/Bar';
import {MaterialCommunityIcons} from 'react-native-vector-icons'


const ProjectProgress = ({step, steps, height}) => {
  const [width, setWidth] = React.useState(0);
  const animatedValue = React.useRef(new Animated.Value(-1000)).current; //Passing -1000 to move it out of the screen before getting the width of the container
  const reactive = React.useRef(new Animated.Value(-1000)).current;
  
  // 
  React.useEffect(()=>{
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true
    }).start();
  },[]),

  React.useEffect(()=>{
    // -width + (width *step/steps)

    reactive.setValue(-width + (width * step)/ steps);
  }, [step, width])
  return (
    <View onLayout={e =>{
        const  newWidth = e.nativeEvent.layout.width;
        setWidth(newWidth);
    }}
     style={{
      height,
      backgroundColor: '#d1cfcf',
      borderRadius: height,
      overflow: 'hidden',
    }}>
      <Animated.View style={{
        height,
        width: '100%',
        borderRadius: height,
        backgroundColor: 'red',
        position: 'absolute',
        left: 0,
        top: 0,
        transform: [{
          translateX: animatedValue
        }]
      }} 
      />
      </View>
    
  )
}

const Progress_Bar = () => {
  return (
    <View>
      <Text style={{marginLeft:10}}>Project 1</Text>
      <View style={{padding:15}}>
      <ProjectProgress step={3} steps={10} height = {20}/>
      <MaterialCommunityIcons name="dots-horizontal" size={25}></MaterialCommunityIcons>
      </View>

      <Text style={{marginLeft:10}}>Project 2</Text>
      <View style={{padding:15}}>
      <ProjectProgress step={5} steps={10} height = {20}/>
      <MaterialCommunityIcons name="dots-horizontal" size={25}></MaterialCommunityIcons>
      </View>

      <Text style={{marginLeft:10}}>Project 3</Text>
      <View style={{padding:15}}>
      <ProjectProgress step={9} steps={10} height = {20} />
      <MaterialCommunityIcons name="dots-horizontal" size={25}></MaterialCommunityIcons>
      </View>

      <Text style={{marginLeft:10}}>Project 4</Text>
      <View style={{padding:15}}>
      <ProjectProgress step={0} steps={10} height = {20}/>
      <MaterialCommunityIcons name="dots-horizontal" size={25}></MaterialCommunityIcons>
      </View>

      <Text style={{marginLeft:10}}>Project 5</Text>
      <View style={{padding:15}}>
      <ProjectProgress step={1} steps={10} height = {20}/>
      <MaterialCommunityIcons name="dots-horizontal" size={25}></MaterialCommunityIcons>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  progress:{
    margin: 10,
  },
})

export default Progress_Bar