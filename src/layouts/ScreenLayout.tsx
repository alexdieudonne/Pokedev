import styled from 'styled-components/native'
import Spinner from 'src/components/Spinner'
import useCacheAssets from 'src/hooks/useCacheAssets'
import { StyleProp, ViewStyle } from 'react-native'

interface Props {
  children: React.ReactNode
  testID?: string
  style?: StyleProp<ViewStyle>
}

export default function ScreenLayout({ children, testID, style }: Props) {
  const areAssetsCached = useCacheAssets()

  return <S.Wrapper style={style} testID={testID}>{areAssetsCached ? children : <Spinner />}</S.Wrapper>
}

const S = {
  Wrapper: styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
  `
}
