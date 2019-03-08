import React from 'react'
import {Text, TouchacbleOpacity} from 'react-native'

export default function TextButton ({children, onPress}){
  return (
    <TouchacbleOpacity onPress={onPress}>
      <Text>{children}</Text>
    </TouchacbleOpacity>
  )
}