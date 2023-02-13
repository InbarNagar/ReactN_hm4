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
import { NotesContext } from "../contexts/notes-context";
import { Button } from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";

const CreateNoteModal = ({ isVisible, onClose, topicId }) => {
  const [text, setText] = useState("");

  const { addNote } = useContext(NotesContext);

  const onSubmit = () => {
    addNote({ text, topicId });
    setText("");
    onClose();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <SafeAreaView style={styles.container}>
        <View style={{ padding: 10 }}>
          <Pressable onPress={onClose} style={{ marginBottom: 10 }}>
            <MaterialIcons name="close" color="#000" size={22} />
          </Pressable>
          <Text style={{ marginBottom: 10 }}>Create new note</Text>

          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Example: Bla Bla Bla ..."
            placeholderTextColor="gray"
            editable
            multiline
            height={80}
            numberOfLines={4}
            maxLength={255}
            padding={10}
          />

          <Button radius={"sm"} type="solid" onPress={onSubmit}>
            Add Note
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

export default CreateNoteModal;
