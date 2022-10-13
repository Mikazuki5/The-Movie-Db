import { TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { CardTypes } from '@/Services/Common/Types';

const CardComponent = (props:CardTypes) => {
  const  { Gutters, Common,Layout} = useTheme();
  return (
    <TouchableOpacity
      key={props.key}
      disabled={props.disable}
      onPress={props.onSubmit}
      style={[
        props.CardStyle
          ? props.CardStyle
          : Gutters.regularBRadius, Common.cardShadows, Gutters.tinyMargin, Gutters.tinyPadding, {backgroundColor: props.color,}
      ]}
    >
      {props.children}
    </TouchableOpacity>
  )
}

CardComponent.defaultProps = {
  color: 'white',
  disable: true
}

const CardImages = (props:CardTypes) => {
  const  { Gutters, Common, Images, Layout} = useTheme()
  return (
    <TouchableOpacity
      key={props.key}
      disabled={props.disable}
      onPress={props.onSubmit}
      style={[Gutters?.tinyRMargin]}
    >
      <Image 
        source={props?.dataImage ? {uri: props?.dataImage} : Images.background}
        resizeMode='cover'
        style={[
          props.CardStyle
            ? props.CardStyle
            : Gutters.regularBRadius, Common.cardShadows, Gutters.tinyMargin, Gutters.tinyPadding, {
              backgroundColor: props.color,
              width: props?.width,
              height: props?.height
            }
        ]}  
      />
      {props.children}
    </TouchableOpacity>
  )
}

CardImages.defaultProps = {
  color: 'white',
  width: 200,
  height: 200,
  disable: true
}

export {CardComponent, CardImages}