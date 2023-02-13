import { createContext, useState } from "react";

export const TopicsContext = createContext();

const TOPICS_INITIAL_STATE = [
  { id: 0, name: "Work" },
  { id: 1, name: "Personal" },
];

const TopicsProvider = ({ children }) => {
  const [topics, setTopics] = useState(TOPICS_INITIAL_STATE);

  const addTopic = (topicName) => {
    const topic = {
      id: Math.random() * 1000,
      name: topicName,
    };

    console.log(topic);
    setTopics([...topics, topic]);
  };

  return (
    <TopicsContext.Provider value={{ topics, addTopic }}>
      {children}
    </TopicsContext.Provider>
  );
};

export default TopicsProvider;
