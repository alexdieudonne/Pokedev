import { useMemo } from 'react';
import { Text } from 'react-native';


import { styles } from './styles';
import { IParagraphProps } from 'editorjs-viewer-native';
import { useParseHtmlTags } from 'src/hooks/useParseHtmlTags';

const Paragraph = ({ data, fontFamily, style, ...rest }: IParagraphProps) => {
  const { parseHtmlTag, defaultListTags } = useParseHtmlTags();

  const parsedText = useMemo(() => parseHtmlTag(defaultListTags, data.text), []);

  return (
    <Text
      accessible
      accessibilityRole="text"
      allowFontScaling={true}
      style={[ styles.paragraph, style, { fontFamily } ]}
      {...rest}
    >
      {parsedText}
    </Text>
  );
};

export { Paragraph };