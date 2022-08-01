import React from "react";
import { StyleSheet, Text, View,Button } from "react-native";

const Logo = () => {
  const textLogo = "Thai-Nihi";
  const isTH = false;
  const showData =() =>{
    alert("Hello Button")
  }
  return (
    <View>
      <Text style={styles.TextLogo}>TNI</Text>
      <Text>{textLogo}</Text>
      {/* {
                isTH && <Text>ภาษาไทย</Text>
            } */}
      {/* use if/else or conditonal operator */}
      {isTH ? <Text>ภาษาไทย</Text> : <Text>ภาษาอังกฤษ</Text>}
      <Button title="Click Me"
       onPress={showData}
       color="skyblue" 
       />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  TextLogo: {
    color: "pink",
    fontSize: 60,
  },
});
