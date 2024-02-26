import { Header, createEditorJsViewer } from "editorjs-viewer-native";
import { ScrollView, View } from "react-native";
import { List } from "src/components/List";
import { Paragraph } from "src/components/Paragraph";
import { AnyButton } from "src/components/Button";

const marginHorizontal = 20;

export const EditorJsViewerNative = createEditorJsViewer({
  customTools: {
    AnyButton: {
      Component: (d) => AnyButton({ ...d }),
    },
  },
  tools: {
    paragraph: {
      Component: (d) =>
        Paragraph({
          ...d,
          style: {
            marginHorizontal,
          },
        }),
    },
    header: {
      Component: (d) =>
        Header({
          ...d,
          data: { ...d.data, text: d.data.text.replace(/&nbsp;/g, " ") },
          style: { marginHorizontal },
        }),
    },
    list: {
      Component: (d) =>
        List({
          ...d,
          containerStyle: { paddingHorizontal: 15 },
        }),
    },
  },
});
