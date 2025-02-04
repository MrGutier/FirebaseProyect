import { View, Text } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../themes/GlobalStyles'
import Link_custom from '@/components/link_custom'
import { router } from 'expo-router'


const ScreenPrincipal = () => {
  return (
    <View style={GlobalStyles.containerCentrado}>
      <Link_custom nombre="log out" onPress={()=>{router.push('./login')}}></Link_custom>
    </View>
  )
}

export default ScreenPrincipal