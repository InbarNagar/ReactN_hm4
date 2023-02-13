import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import Screens from "../constants/screens";
import { NotesContext } from "../contexts/notes-context";

const TopicItem = ({ topic }) => {
  const navigation = useNavigation();

  const { getNotesCount } = useContext(NotesContext);

  const notesCount = getNotesCount(topic.id);

  const navigateToTopic = () => {
    navigation.push(Screens.TOPIC_SCREEN, { topic });
  };

  return (
    <Pressable onPress={navigateToTopic}>
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
        <Text>{topic.name}</Text>
        <Text>{notesCount}</Text>
      </View>
    </Pressable>
  );
};

export default TopicItem;
