import { View, Text } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/app/themes/GlobalStyles'



const Dbdata = () => {
  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style= {GlobalStyles.title}>Datos de la base de datos</Text>
    </View>
  )
}

export default Dbdata;