import { View, Text } from 'react-native'
import React from 'react'
import Wellcome from './src/screens/Wellcome'
import Login from './src/screens/Login'
import Signup from './src/screens/Signup'


const App = () => {
  return (
    <View>
      <Signup />
      {/* <Login /> */}
      {/* <Wellcome /> */}
    </View>
  )
}

export default App