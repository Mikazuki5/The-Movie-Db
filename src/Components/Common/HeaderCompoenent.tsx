import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { HeartIcon, ArrowSmLeftIcon } from 'react-native-heroicons/outline'
import { Text } from '../index'
import { FontBase } from '@/Theme/Variables'

const HeaderCompoenent = (props:any) => {
  const { Layout, Gutters, Fonts, Colors } = useTheme();
  return (
    <View style={[Layout.row, Gutters.smallMargin, Layout.alignItemsCenter]}>
      <View style={[Layout.fill, {}]}>
        {props.leftComponent}
      </View>
      <View style={[Layout.fill, Layout.alignItemsCenter, {}]}>
        <Text font={FontBase.extraBold} style={[Fonts.textRegular]}>Movie List</Text>
      </View>
      <View style={[Layout.fill, Layout.alignItemsEnd, {}]}>
        {props.rightComponent}
      </View>
    </View>
  )
}

const HeaderDynamicComponent = () => {
  return(
    <View>
      <Text>Dynamic</Text>
    </View>
  )
}

export {HeaderCompoenent, HeaderDynamicComponent}