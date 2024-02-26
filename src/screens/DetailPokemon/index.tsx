import styled, { useTheme } from "styled-components/native";
import {
  Stack,
  useLocalSearchParams,
  useNavigation,
  useRouter,
} from "expo-router";
import { Styles as S } from "./styles";
import ScreenLayout from "src/layouts/ScreenLayout";
import React from "react";
import { ImageColorsResult, getColors } from "react-native-image-colors";
import { useGetPokemonByNameQuery } from "src/redux/api/apiSlice";
import { EditorJsViewerNative } from "src/helpers/EditorjsHelper";


const dataJson = {
  time: 1708697679399,
  blocks: [
    {
      type: "image",
      data: {
        url: "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg",
        caption: "Here is a caption field",
        withBorder: false,
        withBackground: false,
        stretched: true,
      },
    },
    {
      id: "SynS7DS9_d",
      type: "header",
      data: {
        text: "Devenez actionnaire de COMIN !",
        level: 2,
      },
    },
    {
      id: "V2-_NNNrIz",
      type: "AnyButton",
      data: {
        link: "https://lamoula.co",
        text: "Investir via Tudigo",
      },
    },
    {
      id: "cFuwDS40_0",
      type: "paragraph",
      data: {
        text: '<span style="white-space-collapse: preserve;">COMIN est la 1ère solution de VTC offrant un modèle économique durable, juste et participatif sur un marché français de 15 millions de courses VTC par mois.</span>',
      },
    },
    {
      id: "XFYTpvTyLS",
      type: "paragraph",
      data: {
        text: '<span style="white-space-collapse: preserve;">COMIN offre des courses à des prix compétitifs tout en rémunérant mieux les chauffeurs.</span>',
      },
    },
    {
      id: "CP2yaz-Hmf",
      type: "paragraph",
      data: {
        text: '<span style="white-space-collapse: preserve;">Aujourd’hui, avec plus de 1 500 chauffeurs et 30 000 clients à Paris, COMIN réinvente le service pour les usagers tout en améliorant la condition sociale des chauffeurs.</span>',
      },
    },
    {
      id: "pgBp-SNxz0",
      type: "paragraph",
      data: {
        text: '<span style="white-space-collapse: preserve;">Pour accélérer notre lancement dans le cadre des Jeux Olympiques de Paris, nous levons 600 000 euros en actions.\nEn tant que membre de notre communauté, nous vous proposons l’opportunité exceptionnelle de prendre des actions COMIN.</span>',
      },
    },
    {
      id: "sFzG4C3Tc_",
      type: "paragraph",
      data: {
        text: "Le nombre de places étant limité, inscrivez vous dès à présent à la levée de fonds pour avoir accès aux détails de l'investissement et investir en avant-première.",
      },
    },
  ],
  version: "2.29.0",
};



export default function DetailPokemon() {
  const params = useLocalSearchParams<DetailPokemonProps>();
  const { name = "", imageUrl } = params;

  const { isLoading } = useGetPokemonByNameQuery(name ?? "");

  const [colors, setColors] = React.useState<ImageColorsResult | null>(null);
  const theme = useTheme();

  React.useEffect(() => {
    if (!imageUrl) return;
    getColors(imageUrl, {
      fallback: theme.primary,
      cache: true,
      key: imageUrl,
    })
      .then((colors) => setColors(colors))
      .catch((e) => console.log(e));
  }, []);


  return (
    <ScreenLayout testID="detail-screen-layout">
      {isLoading ? (
        <S.PokeText color={theme.background}>
          Chargement de vos pokémons...
        </S.PokeText>
      ) : (
        <S.ScrollViewPage>
          <S.ViewFlex>
            <EditorJsViewerNative data={dataJson} />
          </S.ViewFlex>
        </S.ScrollViewPage>
      )}
      <Stack.Screen
        options={{
          title: name,
          headerStyle: { backgroundColor: theme.background },
          headerShown: true,
          headerTintColor: theme.primary,
          headerTitleStyle: {
            fontWeight: "bold",
            color: theme.primary,
          },
        }}
      />
    </ScreenLayout>
  );
}

type DetailPokemonProps = {
  name: string;
  imageUrl: string;
};
