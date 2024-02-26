import { FlatList, FlatListProps } from "react-native";
import { AppStyles } from "src/components/AppStyle";
import { PokemonQuery } from "src/redux/types/Pokemon";
import styled from "styled-components/native";

const Subtitle_ = styled(AppStyles.textStyles.Subtitle) <{ $hasMargin?: boolean }>`
    color: ${p => p.theme.primary};
`;


export const Styles = {
    Title: AppStyles.textStyles.Title,
    Subtitle: Subtitle_,
    Text: AppStyles.textStyles.Text,
    Content: styled.View` 
        padding-horizontal: 10px;
    `,
    HeaderView: styled.View`
        background-color: ${p => p.theme.background};
    `,
    SearchBarWrapper: styled.View`
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    `,
    SearchBarContainer: styled.View`
        border-radius: 10px;
        border-width: 1px;
        flex-direction: row;
        padding-horizontal: 10px;
        align-items: center;
        border-color: ${p => p.theme.primary};
        width: 85%;
    `,
    SearchBarInput: styled.TextInput`
        padding: 10px;
        font-size: 20px;
    `,
    SearchBtn: styled.TouchableOpacity`
        background-color: ${p => p.theme.primary};
        padding: 10px;
        border-radius: 10px;
        margin-left: 10px;
    `,
    
    // List of pokemons
    PokemonList: styled(FlatList as new (props: FlatListProps<PokemonQuery>) => FlatList<PokemonQuery>)`
        
    `,

}