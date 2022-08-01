import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const ModalPractice = () => {
  const [Closelight, setCloselight] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>คุณลืมปิดไฟในห้อง!!!</Text>
          <TouchableOpacity
            style={styles.buttonOpen}
            onPress={() => setCloselight(!Closelight)}
          >
            <View style={styles.button}>
              <Text style={styles.textStyle}>กรุณากดปุ่มเพื่อปิดไฟ</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Modal animationType={"slide"} transparent={false} visible={Closelight}>
          <View style={styles.centeredView}>
            <Text style={styles.modalText}>ไฟในห้องปิดอยู่</Text>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setCloselight(!Closelight)}
            >
              <View style={styles.button}>
                <Text style={styles.textStyle}>
                  กรุณากดปุ่มเพื่อเปิดไฟอีกครั้ง
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
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
    backgroundColor: "lightpink",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonClose: {
    backgroundColor: "skyblue",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
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
