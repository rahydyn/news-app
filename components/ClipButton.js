import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

export const ClipButton = ({ onPress, enabled }) => {
  const iconName = enabled ? "bookmark" : "bookmark-o";
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontAwesome name={iconName} size={40} color="gray" />
    </TouchableOpacity>
  );
};
