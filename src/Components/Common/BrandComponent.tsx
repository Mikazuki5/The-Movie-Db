import { View, Text, Image } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { BrandTypes } from '@/Services/Common/Types'

const Brand = ({height, width, mode}: BrandTypes) => {
  const { Layout, Images } = useTheme();

  return (
    <View style={{ height, width }}>
      <Image source={Images.base_logo} resizeMode={mode} style={Layout.fullSize} />
    </View>
  )
}

Brand.defaultProps = {
  height: 200,
  width: 200,
  mode: 'contain'
}

export default Brand