import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Logo from "./components/Logo";
import User from "./components/User";
import { Button } from "react-native-web";
import LotsOfGreeting from "./components/LotsOfGreeting";
import MycustomTextWith from "./components/MycustomTextWith";
import Count from "./components/Count";
import InputText from "./components/InputText";
import UserNameandPassWord from "./components/UserNameandPassWord";
import UserNamePassword from "./components/UserNamePassword";
import AlertComponent from "./components/AlertComponent";
import ImageWithTextInput from "./components/ImageWithTextInput";
import ButtonExample from "./components/ButtonExample";
import Touchable_Example from "./components/Touchable_Example";
import TouchablePractice from "./components/TouchablePractice";
import DynamicStyle from "./components/DynamicStyle";
import ModelExample from "./components/ModelExample";

const App = () => {
  return (
    <View 
     style={styles.container}
    >
      {/* <Logo />
      <User /> */}
      {/* <LotsOfGreeting/> */}
      {/* <MycustomTextWith/> */}
      {/* <Count/> */}
      {/* <InputText/> */}
      {/* <UserNameandPassWord/> */}
      {/* <UserNamePassword/> */}
       {/* <AlertComponent/>  */}
      {/* { <ImageWithTextInput/> } */}
      {/* <ButtonExample/> */}
      {/* <Touchable_Example/> */}
      {/* <TouchablePractice/> */}
      {/* <DynamicStyle/> */}
      <ModelExample/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container :{
    flex:1,
    justifyContent:'center',
    alignItems:'center'

  }
});
