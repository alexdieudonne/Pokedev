import { ThemeProvider as NavProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import styled, { ThemeProvider } from 'styled-components/native'
import { appTheme, darkTheme, lightTheme, navTheme } from 'src/assets/styles/theme'
import { useEffect, useState } from 'react'
import { useColorScheme } from 'react-native'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { pokemonApiSlice } from 'src/redux/api/apiSlice'
import { SafeAreaProvider } from 'react-native-safe-area-context'


export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={colorScheme === 'light' ? lightTheme : darkTheme}>
        <StatusBar style="light" />
        <ApiProvider api={pokemonApiSlice}>
          <S.AppWrapper>
            <Stack screenOptions={{ headerShown: false }} />
          </S.AppWrapper>
        </ApiProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}


const S = {
  AppWrapper: styled.View`
      flex: 1;
      flex-direction: column;
      background-color: ${({ theme }) => theme.background};
    `
}