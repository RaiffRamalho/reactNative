import React from 'react'
import {Text, TouchacbleOpacity, StyleSheet} from 'react-native'
import { purple } from '../utils/colors'


export default function TextButton ({children, onPress, style = {}}){
  return (
    <TouchacbleOpacity onPress={onPress}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchacbleOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: purple,
  }
}) 