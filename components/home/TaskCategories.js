import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TaskCategories = () => {
 
  return (
    <View style={{backgroundColor:'white',marginTop:2}}>
      <Text style={{margin:10, fontWeight: 'bold', fontSize: 18}}>Categories</Text>
      
      <View style={styles.shape_container}>
        <View style={styles.Safety_Equipment}>
        </View>
        <Text style={{marginLeft:10}}>Safety Equipment</Text>
      </View>

      <View style={styles.shape_container}>
        <View style={styles.Nutrition}>
        </View>
        <Text style={{marginLeft:10}}>Nutrition</Text>
      </View>

      <View style={styles.shape_container}>
        <View style={styles.Improved_Learning}>
        </View>
        <Text style={{marginLeft:10}}>Improved_Learning</Text>
      </View>

      <View style={styles.shape_container}>
        <View style={styles.Teacher_Training}>
        </View>
        <Text style={{marginLeft:10}}>Teacher Training</Text>
      </View>

      <View style={styles.shape_container}>
        <View style={styles.Sanitation}>
        </View>
        <Text style={{marginLeft:10}}>Sanitation</Text>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
    shape_container:{
        height:30,
        marginLeft: 10,
        flexDirection: 'row',
    },
    Safety_Equipment:{
        width: 20,
        height: 20,
        backgroundColor: '#149D3B',
    },
    Nutrition:{
      width: 20,
      height: 20,
      backgroundColor: '#62B7E7',
    },
    Improved_Learning:{
      width: 20,
      height: 20,
      backgroundColor: '#D1FF50',
    },
    Teacher_Training:{
      width: 20,
      height: 20,
      backgroundColor: '#F50004',
    },
    Sanitation:{
      width: 20,
      height: 20,
      backgroundColor: '#F6ACAD',
    }

})

export default TaskCategories