import styled, { useTheme } from 'styled-components/native'
import { Stack, useLocalSearchParams, useNavigation, useRouter } from 'expo-router'
import { Styles as S } from './styles'
import ScreenLayout from 'src/layouts/ScreenLayout'
import React from 'react';
import { ImageColorsResult, getColors } from 'react-native-image-colors';
import { useGetPokemonByNameQuery } from 'src/redux/api/apiSlice';
import { Platform, View } from 'react-native';

export default function DetailPokemon() {
  const params = useLocalSearchParams<DetailPokemonProps>();
  const { name = '', imageUrl } = params;

  const {
    data,
    isLoading,
    isError,
    error,
    isSuccess
  } = useGetPokemonByNameQuery(name ?? "")

  const [colors, setColors] = React.useState<ImageColorsResult | null>(null)
  const theme = useTheme()



  React.useEffect(() => {
    if (!imageUrl) return
    getColors(imageUrl, {
      fallback: theme.primary,
      cache: true,
      key: imageUrl,
    }).then((colors) => setColors(colors))
      .catch((e) => console.log(e))
  }, [])

  const dynamicBackgroundColor: string = colors?.platform === 'android' ? colors.dominant : colors?.platform === 'ios' ? colors.secondary : theme.primary

  return (
    <ScreenLayout testID="detail-screen-layout">
      {isLoading ?
        (<S.PokeText color={theme.background}>Chargement de vos pokémons...</S.PokeText>) :
        (<>
          <S.PokeCard
            color={colors ? dynamicBackgroundColor : theme.primary}
            testID="poke-illustration"
          >
            <S.PokeCardImage source={{ uri: imageUrl }} />
          </S.PokeCard>
          <S.GroupInFoWrapper>
            <S.GroupInFo>
              <S.PokeText color={theme.darkTheme}>Type</S.PokeText>
              <S.GroupInFoDesc>{data?.types[0].type.name}</S.GroupInFoDesc>
            </S.GroupInFo>
            <S.GroupInFo>
              <S.PokeText color={theme.darkTheme}>Poids</S.PokeText>
              <S.GroupInFoDesc>{data?.weight}</S.GroupInFoDesc>
            </S.GroupInFo>
            <S.GroupInFo>
              <S.PokeText color={theme.darkTheme}>Taille</S.PokeText>
              <S.GroupInFoDesc>{data?.height}</S.GroupInFoDesc>
            </S.GroupInFo>
          </S.GroupInFoWrapper>
        </>)}
      <Stack.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: name,
          // https://reactnavigation.org/docs/headers#adjusting-header-styles
          headerStyle: { backgroundColor: theme.background },
          headerShown: true,
          headerTintColor: theme.primary,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: theme.primary
          },
          // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component
        }}
      />
    </ScreenLayout>
  )
}

type DetailPokemonProps = {
  name: string,
  imageUrl: string,
}

