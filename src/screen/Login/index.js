import React, { useState } from 'react'
import { View, Text, ImageBackground, TextInput, Pressable, TouchableOpacity } from 'react-native'
import styles from './style'
import images from "../../../assets/images/Login.png"



const Login = () => {
  const [email, setemail] = useState("yourmail@example.com")
  const [password, setpassword] = useState("Password")

  return (
    <View style={{ height: '100%', width: '100%', }}>
      <ImageBackground source={images} style={{ width: '100%', height: '100%' }}>
        <View style={{ alignItems: 'center', marginTop: 100 }}>
          <Text style={{ color: 'white', fontSize: 30, fontFamily: 'Montserrat-SemiBold' }}>
            Sign in
          </Text>

        </View>
        <View style={{ marginTop: 100, marginLeft: 50, marginRight: 50 }}>
          <View>
            <Text style={{ color: 'white' }}>
              E-Mail
            </Text>
            <TextInput fontSize={16} placeholderTextColor="silver" fontFamily="Montserrat-Light" placeholder={email} style={{ borderBottomWidth: 0.5, borderBottomColor: 'silver' }} onChangeText={setemail}>

            </TextInput>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: 'white' }}>
              Password
            </Text>
            <TextInput secureTextEntry={true} fontSize={16} placeholderTextColor="silver" fontFamily="Montserrat-Light" placeholder={password} style={{ borderBottomWidth: 0.5, borderBottomColor: 'silver' }} onChangeText={setpassword}>

            </TextInput>
          </View>
        </View>
        <View style={{ marginTop: 100, alignItems: 'center' }}>
          <TouchableOpacity onPress={console.log('Hello')} >
            <View style={{
              height: 60, width: 250, backgroundColor: '#252537', borderRadius: 10, alignItems: 'center', justifyContent: 'center', shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.36,
              shadowRadius: 6.68,

              elevation: 11,
            }}>
              <Text style={{ color: 'white', fontFamily: 'Montserrat-SemiBold', fontSize: 20 }}> Sign in</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={{ marginLeft: 50, marginTop: 100 }}>
          <View>
            <Text style={{ color: '#585A66', fontSize: 18, fontFamily: 'Montserrat' }}>Don't have an account ?</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: '#585A66', fontSize: 18, fontFamily: 'Montserrat' }}>Sign up</Text>
          </View>
        </View>
      </ImageBackground >
    </View >

  )
}

export default Login;
