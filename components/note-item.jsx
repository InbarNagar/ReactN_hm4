import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { NotesContext } from "../contexts/notes-context";

const NoteItem = ({ note }) => {
  return (
    <View
      style={{
        padding: 10,
        borderWidth: 1,
        borderRadius: 3,
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
       
      }}
    >
      <Text>📝 {note.text}</Text>
    </View>
  );
};

export default NoteItem;
