import { View, Text } from "react-native";
import React from "react";

const Greeting = ({name,date}) => {
  return (
    <View style={{ alignItems: "center"}}>
      <Text>Hello {name} {date}</Text>
    </View>
  );
};

const LotsOfGreeting = () => {
  return (
    <View style={{ alignItems: "center", top: 50 }}>
      <Greeting name="Marry Christmas" date='25.12' />
      <Greeting name="Happy New Year" date='31.01' />
      <Greeting name="Songkarn Festival" date='13.05' />
    </View>
  );
};

export default LotsOfGreeting;
