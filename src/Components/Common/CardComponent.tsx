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
          : Gutters.regularBRadius, Layout.fill, Common.cardShadows, Gutters.tinyMargin, Gutters.tinyPadding, {
            backgroundColor: props.color,
            width: props?.width,
            height: props?.height
          }
      ]}
    >
      {props.children}
    </TouchableOpacity>
  )
}

CardComponent.defaultProps = {
  color: 'white',
  width: '40%',
  height: 200,
  disable: true
}

const CardImages = (props:CardTypes) => {
  const  { Gutters, Common, Images, Layout} = useTheme()
  return (
    <TouchableOpacity
      key={props.key}
      disabled={props.disable}
      onPress={props.onSubmit}
      style={[Layout?.fill, Gutters?.tinyRMargin]}
    >
      <Image 
        source={{uri: props?.dataImage}}
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