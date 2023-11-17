import React from 'react'
import { create, type ReactTestRendererJSON } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components/native'
import { appTheme } from 'src/assets/styles/theme'
import DetailPokemon from 'src/screens/DetailPokemon'

jest.mock('expo-router', () => ({ Stack: { Screen: 'Screen' } }))
jest.mock('src/components/LinkButton', () => 'LinkButton')
jest.mock('src/hooks/useCacheAssets', () => () => true)
jest.mock('src/redux/api/apiSlice', () => ({
  useGetPokemonByNameQuery: jest.fn(
    (name: string) => (
      {
        data: {
          types: [{ type: { name: 'fire', } }],
          weight: 42,
          height: 42,
        },
        isLoading: false,
      }
    )
  )
}))

jest.mock('react-native-image-colors', () => ({
  getColors: jest.fn(() => Promise.resolve({
    platform: 'android',
    dominant: 'red',
    secondary: 'red',
    darkVibrant: 'red',
    background: 'red',
  }))
}));

jest.mock('expo-router', () => ({
  useLocalSearchParams: jest.fn(
    () => ({ name: 's', imageUrl: '' })
  ),
  useRouter: jest.fn(
    () => ({ name: 's', imageUrl: '' })
  ),
  Stack: { Screen: 'Screen', Link: 'Link' }
}))




describe('src/screens/DetailPokemon', () => {
  const DetailPokemonComponent = (
    <ThemeProvider theme={appTheme}>
      <DetailPokemon />
    </ThemeProvider>
  )

  it('renders correctly', () => {
    const detailPokemonScreen = create(DetailPokemonComponent).toJSON() as ReactTestRendererJSON
    const screen = detailPokemonScreen.children![2] as ReactTestRendererJSON

    const pokeCard = detailPokemonScreen.children![0] as ReactTestRendererJSON
    const image = pokeCard.children![0] as ReactTestRendererJSON

    const groupInFoWrapper = detailPokemonScreen.children![1] as ReactTestRendererJSON
    const groupInFoWrapper1 = groupInFoWrapper.children![0] as ReactTestRendererJSON
    const groupInFoWrapper1Title = groupInFoWrapper1.children![0] as ReactTestRendererJSON
    const groupInFoWrapper1Value = groupInFoWrapper1.children![1] as ReactTestRendererJSON

    const groupInFoWrapper2 = groupInFoWrapper.children![1] as ReactTestRendererJSON
    const groupInFoWrapper2Title = groupInFoWrapper2.children![0] as ReactTestRendererJSON
    const groupInFoWrapper2Value = groupInFoWrapper2.children![1] as ReactTestRendererJSON


    const groupInFoWrapper3 = groupInFoWrapper.children![2] as ReactTestRendererJSON
    const groupInFoWrapper3Title = groupInFoWrapper3.children![0] as ReactTestRendererJSON
    const groupInFoWrapper3Value = groupInFoWrapper3.children![1] as ReactTestRendererJSON



    expect(screen.type).toBe('Screen')
    expect(detailPokemonScreen.props.testID).toBe('detail-screen-layout')


    expect(pokeCard.props.testID).toBe('poke-illustration')

    expect(image.type).toBe('ViewManagerAdapter_ExpoImage')

    expect(groupInFoWrapper.type).toBe('View')

    expect(groupInFoWrapper1.type).toBe('View')
    expect(groupInFoWrapper1Title.type).toBe('Text')
    expect(groupInFoWrapper1Title.children![0]).toBe('Type')
    expect(groupInFoWrapper1Value.children![0]).toBe('fire')


    expect(groupInFoWrapper2.type).toBe('View')
    expect(groupInFoWrapper2Title.type).toBe('Text')
    expect(groupInFoWrapper2Title.children![0]).toBe('Poids')
    expect(groupInFoWrapper2Value.children![0]).toBe("42")


    expect(groupInFoWrapper3.type).toBe('View')
    expect(groupInFoWrapper3Title.type).toBe('Text')
    expect(groupInFoWrapper3Title.children![0]).toBe('Taille')
    expect(groupInFoWrapper3Value.children![0]).toBe("42")

  })
})
