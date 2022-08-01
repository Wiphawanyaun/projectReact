import { View, Text } from "react-native";
import React from "react";

const MeandFriend = ({ fName, Lname, }) => {
  return (
    <View style={{ alignItems: "center"}}>
      <Text>
        Your First Name is {fName}! and Last Name is {Lname}
      </Text>
    </View>
  );
};

const MycustomTextWith = () => {
  return (
    <View style={{flex:1,justifyContent:'center'}}>
        
      <MeandFriend fName="Wiphawan" Lname="Piapramong"  />
      <MeandFriend fName="Pimhathai" Lname="Meesomrote"/>
    </View>
  );
};

export default MycustomTextWith;
