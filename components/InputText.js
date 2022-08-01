import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

const InputText = () => {
  const [UserName, setUserName] = useState("");

  return (
    <View style={{ flex: 1, marginTop: 20, alignItems: "center" }}>
      <Text>Insert any text in below input</Text>
      <TextInput 
      value={UserName}
      onChangeText = {(UserName) =>{setUserName(UserName)}}
      style={styles.textinput} 
      placeholder="Please input username" />
    <Text style = {{color:'skyblue',fontSize:20}}>{UserName}</Text>
    </View>
  
  );
};

export default InputText;

const styles = StyleSheet.create({
  textinput: {
    width: 300,
    height: 45,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#e8e8e8",
  },
});
