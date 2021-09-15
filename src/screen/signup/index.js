import React, { useState } from 'react'
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import image from "../../../assets/images/Login.png"
import { Auth } from 'aws-amplify'
// import { useNavigation } from '@react-navigation/core'
const Signup = () => {

  // const navigation = useNavigation();
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [email, setemail] = useState("")
  const phonenumber = 8754423475
  async function signUp() {
    try {
      var user = await Auth.signUp({
        username, password, attributes: {
          email
        }
      })
      console.log(user)

    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={image} style={{ width: '100%', height: '100%' }}>

        <View style={{ alignItems: 'center', marginTop: 100 }}>
          <Text style={{ color: 'white', fontSize: 30, fontFamily: 'Montserrat-SemiBold' }}>
            Sign up
          </Text>
        </View>
        <View style={{ marginTop: 100, marginLeft: 50, marginRight: 50 }}>
          <View>
            <Text style={{ color: 'white' }}>
              Username
            </Text>
            <TextInput font={16} placeholderTextColor="silver"
              value={username}
              fontFamily="Montserrat-Light" placeholder="Username" onChangeText={setusername} style={{ borderBottomWidth: 0.5, borderBottomColor: 'silver' }}>
            </TextInput>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={{ color: 'white' }}>
              Password
            </Text>
            <TextInput placeholderTextColor="silver" onChangeText={setpassword} fontSize={16} placeholder="Password" value={password} fontFamily="Montserrat-Light"
              style={{ borderBottomWidth: 0.5, borderBottomColor: 'silver' }}>

            </TextInput>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={{ color: 'white' }}>
              Email
            </Text>
            <TextInput placeholderTextColor="silver" fontSize={16} placeholder="Email" onChangeText={setemail} value={email} fontFamily="Montserrat-Light" autoCompleteType='email'
              style={{ borderBottomWidth: 0.5, borderBottomColor: 'silver' }}>

            </TextInput>
          </View>
          <View style={{ marginTop: 50, alignItems: 'center' }}>
            <TouchableOpacity onPress={signUp}
            >
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
                <Text style={{ color: 'white', fontFamily: 'Montserrat-SemiBold' }}>
                  Signup
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Signup;
