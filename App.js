import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// import { Header } from "react-native/Libraries/NewAppScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home-screen";
import TopicScreen from "./screens/topic-screen";
import Screens from "./constants/screens";
import TopicsProvider from "./contexts/topics-context";
import NotesProvider from "./contexts/notes-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TopicsProvider>
        <NotesProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name={Screens.HOME_SCREEN}
                component={HomeScreen}
                options={{ title: "Your topics" }}
              />

              <Stack.Screen
                name={Screens.TOPIC_SCREEN}
                component={TopicScreen}
                options={({ route }) => ({ title: route.params.topic.name })}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NotesProvider>
      </TopicsProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "white",
  },
});
