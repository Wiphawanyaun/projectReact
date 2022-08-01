import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const App = () => {
  const showData =() =>{
    alert("Hello Button")
  }

  return (
    <View  style={styles.container}>
       <Text>Button Example</Text>
       <Button
        title = 'Click Me'
        onPress={showData}
        color = 'skyblue'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
  }
});

export default App