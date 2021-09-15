import React, { useState } from 'react'
import { View, Text, ImageBackground, TextInput } from 'react-native'
import image from "../../../assets/images/Login.png"


const UserConfirmation = () => {
  const [Otp, setOtp] = useState('')
  return (
    <ImageBackground source={image} style={{ width: '100%', width: '100%' }}>
      <View style={{ width: '100%', height: '100%' }}>
        <View style={{ marginTop: 200, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontFamily: 'Montserrat-Light' }}> Enter Otp</Text>
          <TextInput autoCompleteType='off' fontSize={16} value={Otp} onChangeText={setOtp} placeholder={'Enter OTP'} style={{ borderBottomWidth: 1, borderBottomColor: 'silver' }} />
        </View>
      </View>

    </ImageBackground>
  )
}

export default UserConfirmation
