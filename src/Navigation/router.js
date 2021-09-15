import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from '../screen/signup/index'
import UserConfirmation from '../screen/UserConfirmation/index'

const Stack = createNativeStackNavigator();

const router = () => {
  return (
    <NavigationContainer>
      <Stack.Container>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="UserConfirmation" component={UserConfirmation} />
      </Stack.Container>
    </NavigationContainer>
  )
}

export default router
