import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Login from './src/screen/Login/index'
MapboxGL.setAccessToken('sk.eyJ1Ijoia2lzaG9yZS1zaGFua2FyIiwiYSI6ImNrc3pudW5pNTFydngzMXB1N2JvMHZzaHQifQ.YhiU2f5vHMKT-Toi4xkPNA');



const App = () => {
  return (
    <View>
      {/* <MapboxGL.MapView style={{ height: '100%', width: '100%' }} /> */}
      <Login />
    </View>
  )
}

export default App


// export default class App extends Component {
//   render() {
//     return (
//       <View >
//       </View>
//     );
//   }
