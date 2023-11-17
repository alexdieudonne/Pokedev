import React from 'react'
import { create, type ReactTestRendererJSON } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components/native'
import { appTheme } from 'src/assets/styles/theme'
import Home from 'src/screens/Home'
import { AppStyles } from 'src/components/AppStyle'

jest.mock('src/components/LinkButton', () => 'LinkButton')
jest.mock('src/hooks/useCacheAssets', () => () => true)
jest.mock('src/screens/Home/components/PokemonCard', () => 'PokemonCard')

jest.mock('expo-router', () => ({
  useLocalSearchParams: jest.fn(
    () => ({ name: 's', imageUrl: '' })
  ),
  useRouter: jest.fn(
    () => ({ name: 's', imageUrl: '' })
  ),
  Stack: { Screen: 'Screen', Link: 'Link' }
}))

jest.mock('src/redux/api/apiSlice', () => ({
  useGetPokemonsQuery: jest.fn(
    ({ limit, page }) => (
      {
        data: {
          results: [
            { url: 'https://pokeapi.co/api/v2/pokemon/1/', name: 'bulbasaur' },
          ],
        },
        isLoading: false,
        isError: false,
        error: null,
        isSuccess: false
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

jest.mock('@expo/vector-icons/Ionicons', () => {
  const { View } = require('react-native');
  return View;
});


describe('src/screens/Home', () => {
  const HomeComponent = (
    <ThemeProvider theme={appTheme}>
      <Home />
    </ThemeProvider>
  )

  it('renders correctly', () => {
    const homeScreen = create(HomeComponent).toJSON() as ReactTestRendererJSON
    const screen = homeScreen.children![0] as ReactTestRendererJSON
    const flatList = screen.children![1] as ReactTestRendererJSON
    const flatListContent = flatList.children![0] as ReactTestRendererJSON

    expect(screen.type).toBe('View')
    expect(screen.props.testID).toBe('home-screen-content')

    expect(flatListContent.children?.length).toBe(2)

  })

})
