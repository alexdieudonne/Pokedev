import { useMemo } from "react";
import { Text, View } from "react-native";

import { useParseHtmlTags } from "src/hooks/useParseHtmlTags";
import { IBreakProps } from "src/types/EditorJs/Break";
import { IItemIListProps } from "src/types/EditorJs/ItemList";
import styles from "./styles";

const Break = ({ style }: IBreakProps) => {
  console.log("Break");

  return <Text style={style}>{"\n"}</Text>;
};

export { Break };
