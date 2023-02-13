import { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";
import CreateTopicModal from "../components/create-topic-modal";
import TopicItem from "../components/topic-item";
import { TopicsContext } from "../contexts/topics-context";
import { Button } from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeScreen = ({}) => {
  const { topics } = useContext(TopicsContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <View style={styles.container}>
      <CreateTopicModal isVisible={isModalOpen} onClose={closeModal} />

      <FlatList
        data={topics}
        renderItem={({ item }) => <TopicItem key={item.id} topic={item} />}
        keyExtractor={(item) => item.id}
      />

      <Button radius={"sm"} type="solid" onPress={openModal}>
        Add Topic
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

export default HomeScreen;
