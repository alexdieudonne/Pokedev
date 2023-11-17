import { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'

export default function useCacheAssets() {
  const [cacheComplete, setCacheComplete] = useState(false)
  const [fonts] = useFonts({
    helvetica: require('src/assets/fonts/helvetica/FreeSans.otf'),
    helveticaBold: require('src/assets/fonts/helvetica/FreeSansBold.otf'),
    helveticaItalic: require('src/assets/fonts/helvetica/FreeSansOblique.otf'),
    helveticaBoldItalic: require('src/assets/fonts/helvetica/FreeSansBoldOblique.otf'),
    helveticaBlack: require('src/assets/fonts/helvetica/helveticaBlack.otf'),
  })

  // Set Cache Complete
  useEffect(() => {
    if (fonts && !cacheComplete) setCacheComplete(true)
  }, [fonts])

  return cacheComplete
}
