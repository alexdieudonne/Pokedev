import styled from "styled-components/native";
import { Image } from "expo-image";


export const Styles = {
    PokeCard: styled.TouchableOpacity<{ color: string }>`
        flex: 1;
        height: ${p => p.theme.dimensions(250, 'px')};
        box-shadow: 0px 0px 5px #00000029;
        align-items: center;
        background-color: ${p => p.color};
        margin-vertical: ${p => p.theme.dimensions(10, 'px')};
        border-radius: 10px;
        padding: 10px;
    `,
    PokeCardImage: styled(Image)`
        height: ${p => p.theme.dimensions(150, 'px')};
        content-fit: cover;
        width: ${p => p.theme.dimensions(90, '%')};
    `,
    PokeCardText: styled.Text<{ color: string }>`
        font-size: ${p => p.theme.dimensions(20, 'px')};
        font-family: ${p => p.theme.fonts.black};
        font-weight: bold;
        color: ${p => p.color};
        position: absolute;
        bottom: 20px;
    `,
    PokeText: styled.Text<{ color: string }>`
        font-size: ${p => p.theme.dimensions(20, 'px')};
        font-family: ${p => p.theme.fonts.black};
        font-weight: bold;
        color: ${p => p.color};
    `,

}