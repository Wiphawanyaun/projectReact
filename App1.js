import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View ,Button} from "react-native";
import Cafe from "./components/Cafe";
import Cat from "./components/Cat";
import Logo from "./components/Logo";
import TextInputExample from "./components/TextInputExample";

  const App = () => {
    const showData =() =>{
      alert("Hello Button")
    }


  
  return (
    <View >
      <Text>Hello React Native</Text>
      <Logo/>
      <Button
        title = 'Click Me'
        onPress={showData}
      />
      {/* <TextInputExample /> */}
      {/* <Cat/> */}
      {/* <Cafe/> */}
    </View>
  );
};

export default App; 