import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "./components/Logo";
/*import styles from "./components/styles";*/
import stySheet from "./components/stySheet";

const App = () => {
  return (
    <View style ={stySheet.container}>
      <Text style={[stySheet.title]}>React Native</Text>
   
    </View>
  );
};

export default App;


