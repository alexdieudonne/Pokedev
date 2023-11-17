import { View, Text, Image, Platform } from 'react-native'
import React, { FC } from 'react'
import { ImageColorsResult, getColors } from 'react-native-image-colors'
import { Styles as S } from './styles'
import { useTheme } from 'styled-components'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'
import { appTheme } from 'src/assets/styles/theme'
import ScreenLayout from 'src/layouts/ScreenLayout'

const PokeCard: FC<PokeCardProps> = ({ name, imageUrl, isLoading = true }) => {

    const [colors, setColors] = React.useState<ImageColorsResult | null>(null)
    const theme = useTheme()



    React.useEffect(() => {
        getColors(imageUrl, {
            fallback: appTheme.primary,
            cache: true,
            key: imageUrl,
        }).then((colors) => setColors(colors))
            .catch((e) => console.log(e))
    }, [])

    const dynamicBackgroundColor: string = colors?.platform === 'android' ? colors.dominant : colors?.platform === 'ios' ? colors.secondary : appTheme.primary

    return (
        <Link href={{
            pathname: '/detailPokemon',
            params: {
                name,
                imageUrl,
            },
        }}  asChild>
            <S.PokeCard
                color={dynamicBackgroundColor}
                testID="poke-card"
                activeOpacity={.9}>
                {
                    isLoading ?
                        (<S.PokeText color={appTheme.background}>Chargement de vos pokémons...</S.PokeText>) :
                        (<>
                            <S.PokeCardImage source={{ uri: imageUrl }} />
                            <S.PokeCardText color={colors?.platform === 'android' ? colors.darkVibrant : colors?.platform === 'ios' ? colors.background : appTheme.primary}>{name}</S.PokeCardText>
                        </>)
                }
            </S.PokeCard>
        </Link>
    )
}

export default PokeCard

type PokeCardProps = {
    name: string;
    imageUrl: string;
    isLoading?: boolean;
}

