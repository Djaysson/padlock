import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider';
import logoIcon from '../../assets/logo.png';
import Clipboard from 'expo-clipboard';
import charsPassword from '../password/password';
import styles from '../page/styles';

export default function Padlock() {
  const [password, setPassword] = useState('');
  const [minValue, setMinValue] = useState(10);

  function generatePass() {
    let pass = '';
    for (let i = 0, n = charsPassword.length; i < minValue; i++) {
      pass += charsPassword.charAt(Math.floor(Math.random() * n))
    }
    setPassword(pass);
  }

  function copyPassword() {
    Clipboard.setString(password);
    alert('Password successfully copied');
    setPassword('')
  }

  return (

    <View style={styles.container}>
      <Image
        source={logoIcon}
        style={styles.logo}
      />
      <Text style={styles.title}>{minValue} Characters</Text>
      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#FFA200"
          maximumTrackTintColor="#000"
          value={minValue}
          onValueChange={(valor) => setMinValue(valor.toFixed(0))}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePass}>
        <Text style={styles.buttonText}>Generate password</Text>
      </TouchableOpacity>

      {password !== '' && (
        <View style={styles.areaPassword}>
          <Text style={styles.password} onLongPress={copyPassword}>Password: {password}</Text>
        </View>
      )}
    </View>

  )
}

