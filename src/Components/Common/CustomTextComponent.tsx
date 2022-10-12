import { View, Text } from 'react-native'
import React from 'react'

type Props = {
  font?: string
  numberOfLines?: number,
  style?: object,
  children?: any
}

const CustomTextComponent = ({font, numberOfLines, style, children, ...others}: Props) => {
  return (
    <Text numberOfLines={numberOfLines} style={[style, {fontFamily: font}]} {...others}>
      {children}
    </Text>
  )
}

CustomTextComponent.defaultProps = {
  font: 'NunitoSans-Regular'
}

export default CustomTextComponent