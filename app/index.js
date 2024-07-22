import { View, Text,ActivityIndicator } from 'react-native'
import React from 'react'

export default function Startpage() {
  return (
    <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
      <ActivityIndicator size="large" color="gray"/>
    </View>
  )
}