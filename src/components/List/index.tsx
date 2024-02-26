import { IListProps } from "editorjs-viewer-native";
import React, { useMemo } from "react";
import { SectionList } from "react-native";
import styles from "./styles";
import { ListItem } from "../ListItem";

const List = ({ data, fontFamily, containerStyle }: IListProps) => {
  const sections = useMemo(() => {
    return [{ data: data.items }];
  }, []);

  return (
    <SectionList
      scrollEnabled={false}
      style={[styles.list, containerStyle]}
      sections={sections}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item, index }) => (
        <ListItem
          value={item}
          index={index}
          listStyle={data.style}
          fontFamily={fontFamily}
        />
      )}
    />
  );
};

export { List };
