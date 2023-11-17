import styled, { DefaultTheme, useTheme } from 'styled-components/native'
import { Stack } from 'expo-router'

import ScreenLayout from 'src/layouts/ScreenLayout'
import { Styles as S } from './styles'
import { FlatList, ListRenderItem, ListRenderItemInfo, TextInput } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import PokeCard from './components/PokemonCard'
import { useGetPokemonsQuery } from 'src/redux/api/apiSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PokemonQuery } from 'src/redux/types/Pokemon'
import { useEffect, useMemo, useState } from 'react'
import { appTheme } from 'src/assets/styles/theme'


export default function HomeScreen() {
  const [page, setPage] = useState(0)
  const {
    data,
    isLoading,
    isError,
    error,
    isSuccess
  } = useGetPokemonsQuery({ limit: 10, page: page })

  const theme: DefaultTheme = useTheme()


  const renderItem: ListRenderItem<PokemonQuery> = ({ item: { url, name } }) => <PokeCard key={url} isLoading={isLoading} imageUrl={url} name={name} />;

  return (
    <ScreenLayout testID="home-screen-layout">
      <S.Content testID="home-screen-content">
        <Stack.Screen options={{ title: 'Home Screen' }} />
        <S.PokemonList
          testID="home-screen-pokemon-list"
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={
            <>
              <SafeAreaView edges={['top']} style={{ backgroundColor: theme.background }} />
              <S.HeaderView>

                <S.Title testID="home-screen-title">Pokédex</S.Title>
                <S.Subtitle testID="home-screen-text">Recherchez un pokémon dans la liste à l'aide de son nom.</S.Subtitle>

                <S.SearchBarWrapper>
                  <S.SearchBarContainer>
                    <Ionicons name="search" size={25} color={appTheme.primary} />
                    <S.SearchBarInput testID="home-screen-search-bar" placeholder="Search" />
                  </S.SearchBarContainer>
                  <S.SearchBtn testID="home-screen-search-btn" >
                    <Ionicons name="filter" size={25} color={theme.white} />
                  </S.SearchBtn>
                </S.SearchBarWrapper>
              </S.HeaderView>
            </>
          }
          data={isLoading ? loadingData : data?.results}
          renderItem={renderItem}
          columnWrapperStyle={{ gap: 15 }}
          numColumns={2}
          onEndReached={({ distanceFromEnd }) => {
            if (distanceFromEnd < 0) return;
            setPage(page + 1);
          }}
          keyExtractor={(item: PokemonQuery) => item.name}
        />
      </S.Content>
    </ScreenLayout>
  )
}

const loadingData = [
  { name: '1', url: '1' },
  { name: '2', url: '1' },
  { name: '3', url: '1' },
  { name: '4', url: '1' },
  { name: '5', url: '1' },
  { name: '6', url: '1' },
]


