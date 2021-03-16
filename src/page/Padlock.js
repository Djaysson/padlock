import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider';

export default function Padlock() {
  return (

    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>12 Characters</Text>
      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#FFA200"
          maximumTrackTintColor="#000"

        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Generate password</Text>
      </TouchableOpacity>
      <View style={styles.areaPassword}>
        <Text style={styles.password}>Password: 55543535454</Text>
      </View>
    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F8FF99',
    borderBottomWidth: 20,
    borderBottomColor: '#FFA200',
  },
  logo: {
    marginBottom: 60
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  area: {
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: '#FFF',
    width: '90%',
    borderRadius: 7,
  },
  areaPassword: {
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: '#FFF7',
    width: '90%',
    borderRadius: 7,
    borderBottomWidth: 3,
    borderBottomColor: '#FFA200',
  },
  button: {
    backgroundColor: '#FFA200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 25,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },
  password: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  }
})