import {
  TouchableOpacity,
  Linking,
  View,
  Text,
  Image,
  Alert,
} from "react-native";
import { useCallback } from "react";

import styles from "./styles";
import { IAnyButtonProps } from "src/types/EditorJs/AnyButton";
import { IComponentBlockProps } from "editorjs-viewer-native";

const AnyButton = ({
  block: { data },
  ...rest
}: IComponentBlockProps<IAnyButtonProps>) => {
  const { link, text } = data;

  const handleOpenLink = useCallback(async (link: string) => {
    if (!link) {
      Alert.alert("Missing link");
      return;
    }

    try {
      await Linking.openURL(link);
    } catch {
      Alert.alert(`Don't know how to open this URL: ${link}`);
    }
  }, []);

  return (
    <TouchableOpacity
      accessible
      accessibilityRole="link"
      accessibilityLabel="Bookmark"
      accessibilityHint="Clique para abrir o link"
      activeOpacity={0.2}
      style={[styles.button]}
      onPress={() => handleOpenLink(link)}
      {...rest}
    >
      <Text style={styles.textPrimary}>{text}</Text>
    </TouchableOpacity>
  );
};

export { AnyButton };
