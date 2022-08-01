import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Modal,
  } from "react-native";
  import React, { useState } from "react";
  
  const ModalPractice = () => {
    const [light, setlight] = useState(true);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.centeredView}>
          <Modal animationType={"none"} transparent={false} visible={light}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>คุณลืมปิดไฟในห้อง!!!</Text>
                <View style={styles.buttonOpen}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setlight(!light)}
                  >
                    <Text style={styles.textStyle}>กรุณากดปุ่มเพิ่อปิดไฟ</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
  
          <View>
            <View style={styles.centeredView}>
              <Text style={styles.modalText}>ไฟในห้องปิดอยู่</Text>
              <View style={styles.buttonClose}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setlight(!light)}
                >
                  <Text style={styles.textStyle}>
                    กรุณากดปุ่มเพิ่อเปิดไฟอีกครั่ง
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default ModalPractice;
  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
  });