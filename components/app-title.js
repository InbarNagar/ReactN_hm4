import { Text } from "react-native";
import AppBaseText from "./app-base-text";

const AppTitle = ({ children }) => {
  return (
    <Text style={{ fontSize: "24px" }}>
      <AppBaseText>{children}</AppBaseText>
    </Text>
  );
};

export default AppTitle;
