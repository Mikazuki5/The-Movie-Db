import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import Brand from '../Common/BrandComponent'

export const HeaderHomeComponent = () => {
  const { Layout, Gutters, Colors, Images} = useTheme()
  return (
    <View style={[Layout.row, Gutters.smallHMargin, Gutters.regularTMargin, Layout.justifyContentCenter]}>
      <View style={[Layout.fill]}>
        <Brand width={50} height={50} />
      </View>
      <View style={[Layout.fill, Layout.alignItemsEnd]}>
        <Image source={Images.avatar} style={{width: 50, height: 50}} />
      </View>
    </View>
  )
}