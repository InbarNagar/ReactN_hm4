import { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NoteItem from "../components/note-item";
import { NotesContext } from "../contexts/notes-context";
import { Button } from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import CreateNoteModal from "../components/create-note-modal";
import { FlatList } from "react-native";

const TopicScreen = ({ route }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { topic } = route.params;
  const { getNotes } = useContext(NotesContext);
  const notes = getNotes(topic.id);

  return (
    <View style={styles.container}>
      <CreateNoteModal
        isVisible={isModalOpen}
        onClose={closeModal}
        topicId={topic.id}
      />

      <FlatList
        data={notes}
        renderItem={({ item }) => <NoteItem key={item.id} note={item} />}
        keyExtractor={(item) => item.id}
      />

      <Button radius={"sm"} type="solid" onPress={openModal}>
        Add Note
        <Ionicons name="add" size={24} color="#fff" />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default TopicScreen;
