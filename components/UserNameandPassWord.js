import { StyleSheet, Text, View ,TextInput,Button} from 'react-native'
import React,{useState} from 'react'

const UserNameandPassWord = () => {

    const [Email,setEmail] =useState();
    const [Password,setPassword] =useState();
    const Data =() =>{
        alert("Email : "+ Email +
            "\npassword: "+ Password)};

  return (
    <View>
      <TextInput
      style = {styles.textinput}
      placeholder='Email'
      value={Email}
      onChangeText = {(Email) =>{setEmail(Email)}}
      />
      <TextInput
      style = {styles.textinput}
      placeholder='Password'
      value={Password}
      onChangeText = {(Password) =>{setPassword(Password)}}
      />
      <Button 
      title='Submit'
      onPress={Data}
      color='pink'
      
      
     />
    </View>
  )
}

export default UserNameandPassWord

const styles = StyleSheet.create({
    textinput: {
        fontSize:15,
        width: 350,
        height: 45,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#F0FFFF",
        borderColor:"skyblue",
        borderWidth: 1
      }
})