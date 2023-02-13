import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useContext, useState } from "react";
import { TopicsContext } from "../contexts/topics-context";
import { Button } from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";

const CreateTopicModal = ({ isVisible, onClose }) => {
  const [name, setName] = useState("");

  const { addTopic } = useContext(TopicsContext);

  const onSubmit = () => {
    addTopic(name);
    setName("");
    onClose();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <SafeAreaView style={styles.container}>
        <View style={{ padding: 10 }}>
          <Pressable onPress={onClose} style={{ marginBottom: 10 }}>
            <MaterialIcons name="close" color="#000" size={22} />
          </Pressable>
          <Text style={{ marginBottom: 10 }}>Create new topic</Text>

          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Example: School"
            placeholderTextColor="gray"
            editable
          />

          <Button radius={"sm"} type="solid" onPress={onSubmit}>
            Create topic
            <Ionicons name="add" size={24} color="#fff" />
          </Button>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 2,
    marginBottom: 10,
    padding: 10,
    borderRadius: 3,
  },
});

export default CreateTopicModal;
