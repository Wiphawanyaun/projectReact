import {  View, Text ,StyleSheet ,TextInput ,Button} from 'react-native'
import React,{useState} from 'react'

const UserNamePassword = () => {

    const [userName, setuserName] = useState('');
    const [userEmail, setuserEmail] = useState('');
    const checkTextInput =() =>{
        if(!userName.trim()){
            alert('Please Enter Name');

        }
        if(!userEmail.trim()){
            alert('Please Enter Email');

        }
        else{alert("Email : "+userName 
                +"\nPassword : "+userEmail)}
        
      }


  return (
    <View style={{flex:1,marginTop:20,alignItems:'center'}}>
      <TextInput 
        value={userName}
        onChangeText={(userName)=>{setuserName(userName)}}
        style={styles.textinput}
        placeholder='Enter Name '
      />
      <TextInput 
        value={userEmail}
        onChangeText={(userEmail)=>{setuserEmail(userEmail)}}
        style={styles.textinput}
        placeholder='Enter Email '
      />
      <View style={{flex:1,
        width:400,
        marginTop:10,
        marginBottom:10}}>
        <Button 
            title='Submit'
            onPress={checkTextInput}
            
        />
      </View>
    </View>
  )
}

export default UserNamePassword

const styles = StyleSheet.create({
    textinput :{
        fontSize:15,
        width:400,
        height:45,
        padding:10,
        marginTop:20,
        marginBottom:10,
        borderColor:'Pink',
        borderWidth:1
    }
})