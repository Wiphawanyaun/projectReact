import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "./components/Logo";
import styles from "./components/styles";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.warning]}>Hello React Native</Text>
      <Logo />
    </View>
  );
};

export default App;


