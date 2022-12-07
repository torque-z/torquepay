import * as React from "react";
import { Button, StyleSheet, Text, View ,TouchableOpacity} from "react-native";
import Modal from "react-native-modal";
import CardEnter from "../components/widgets/CardEnter";

export default function MyCardpage() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <Button title="Add Card" onPress={handleModal} />
      <Modal isVisible={isModalVisible}>
      <TouchableOpacity  
      style={{flex:1}}
            activeOpacity={1} 
            onPressOut={() => {setIsModalVisible(false)}}
          >
            <CardEnter/>
          </TouchableOpacity>
        {/* <CardEnter /> */}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    height: 50,
    width: 50,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
