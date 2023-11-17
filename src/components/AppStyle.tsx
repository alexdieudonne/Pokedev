import styled from "styled-components/native";

export const AppStyles = {
  textStyles: {
    Content: styled.View`
        flex: 1;
        align-items: center;
        justify-content: center;
      `,
    Title: styled.Text`
        color: ${p => p.theme.primary};
        font-family: helveticaBlack;
        font-weight: 900;
        font-size: ${p => p.theme.dimensions(40, 'px')};
        margin-bottom: ${p => p.theme.dimensions(10, 'px')};
      `,
    Subtitle: styled.Text`
        color: ${p => p.theme.primary};
        font-family: helvetica;
        font-weight: 300;
        font-size: ${p => p.theme.dimensions(15, 'px')};
        margin-bottom: ${p => p.theme.dimensions(15, 'px')};
      `,
    Text: styled.Text`
        color: ${p => p.theme.primary};
        font-family: helvetica;
        font-weight: 300;
        font-size: ${p => p.theme.dimensions(15, 'px')};
        margin-bottom: ${p => p.theme.dimensions(15, 'px')};
      `,

  }
}