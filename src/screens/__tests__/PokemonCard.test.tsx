import React from 'react'
import { create, type ReactTestRendererJSON } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components/native'
import { appTheme } from 'src/assets/styles/theme'
import PokemonCard from '../Home/components/PokemonCard'
import ScreenLayout from 'src/layouts/ScreenLayout'

jest.mock('expo-router', () => ({ Link: 'Link' }))
jest.mock('expo-asset');
jest.mock('react-native-image-colors', () => ({
  getColors: jest.fn(() => Promise.resolve({
    platform: 'android',
    dominant: 'red',
    secondary: 'red',
    darkVibrant: 'red',
    background: 'red',
  }))
}));

jest.mock('styled-components/native', () => {
  const originalModule = jest.requireActual('styled-components/native');
  return {
    __esModule: true,
    default: originalModule,
    ...originalModule,
    useTheme: jest.fn(() => ({
      primary: 'red',
      secondary: 'red',
      background: 'red',
      white: 'red',
      darkTheme: 'red',

    })),
  };
})

describe('src/screens/Home/components/PokemonCard', () => {
  const PokemonCardComponent = (
    <ThemeProvider theme={appTheme}>
      <PokemonCard name='salamender' imageUrl='' isLoading={false} />
    </ThemeProvider>
  )

  it('renders correctly', () => {

    const pokemonCardComponent = create(PokemonCardComponent).toJSON() as ReactTestRendererJSON
    const screen = pokemonCardComponent.children![0] as ReactTestRendererJSON
    const imageIllustrationPokemon = screen.children![0] as ReactTestRendererJSON
    const namePokemon = screen.children![1] as ReactTestRendererJSON

    expect(imageIllustrationPokemon.type).toBe('ViewManagerAdapter_ExpoImage')
    expect(imageIllustrationPokemon.props.source[0]).toEqual({ uri: '' })

    expect(namePokemon.type).toBe('Text')
    expect(namePokemon.children![0]).toBe('salamender')

  })
})
