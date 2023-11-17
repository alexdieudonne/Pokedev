import styled from "styled-components/native";
import { Image } from "expo-image";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import { AppStyles } from "src/components/AppStyle";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
const Subtitle_ = styled(AppStyles.textStyles.Subtitle)`
    color: ${p => p.theme.secondary};
`;
export const Styles = {

    PokeCard: styled.View<{ color: string }>`
        height: ${p => p.theme.dimensions(350, 'px')};
        box-shadow: 0px 0px 5px #00000029;
        align-items: center;
        justify-content: center;
        background-color: ${p => p.color};
        border-radius: 10px;
        width: 80%;
        align-self: center;
        margin-top:20px
    `,
    PokeCardImage: styled(Image)`
        height: ${p => p.theme.dimensions(400, 'px')};
        content-fit: contain;
        width: 100%;
    `,
    PokeCardText: styled.Text<{ color: string }>`
        font-size: ${p => p.theme.dimensions(20, 'px')};
        font-family: ${p => p.theme.fonts.black};
        font-weight: bold;
        color: ${p => p.color};
    `,
    PokeText: styled.Text<{ color: string }>`
        font-size: ${p => p.theme.dimensions(20, 'px')};
        font-family: ${p => p.theme.fonts.black};
        font-weight: bold;
        color: ${p => p.color ?? p.theme.primary};
    `,

    GroupInFoWrapper: styled.View`
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding: 0px 20px;
        flex-wrap: wrap;
        margin-top: 20px;
    `,

    GroupInFo: styled.View`
        padding: 0px 20px;
        align-items: center;
    `,

    GroupInFoDesc: Subtitle_

}