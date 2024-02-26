import { useMemo } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

import { useParseHtmlTags } from "src/hooks/useParseHtmlTags";
import { IItemIListProps } from "src/types/EditorJs/ItemList";

const ListItem = ({ value, listStyle, index, fontFamily }: IItemIListProps) => {
  const { parseHtmlTag, defaultListTags } = useParseHtmlTags();

  const parsedText = useMemo(() => parseHtmlTag(defaultListTags, value), []);

  return (
    <View style={styles.container}>
      {
        {
          ordered: <View style={styles.listStyleDot} />,
          unordered: <Text style={styles.listStyleNumber}>{index + 1}</Text>,
        }[listStyle]
      }

      <Text
        accessible
        accessibilityRole="text"
        allowFontScaling={true}
        style={[styles.listItem, { fontFamily }]}
      >
        {parsedText}
      </Text>
    </View>
  );
};

export { ListItem };
