import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'

type Props = {
  name: string
  width?: number | string 
  height?: number | string 
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
  color?: string,
  onPress?:() => void
}

const Icon = ({ width, height, mode, color, name, onPress }: Props) => {
  const { Images, Layout } = useTheme();

  const getTypeIcon = () => {
    switch (name) {
      case 'ic-logo':
        return Images.ic_logo;
      case 'ic-homes':
        return Images.ic_home;
      case 'ic-cross-blue':
        return Images.ic_closed_btn_blue;
    
      default:
        return Images.ic_default
    }
  }

  return (
    <TouchableOpacity 
      style={{width, height}}
      onPress={onPress}
      disabled={!onPress}
    >
      <Image source={getTypeIcon()} resizeMode={mode} style={[Layout.fullSize, {tintColor: color ? color : undefined}]} />
    </TouchableOpacity>
  )
}

Icon.defaultProps={
  width: 20,
  height: 20,
  mode: 'contain',
}

export default Icon