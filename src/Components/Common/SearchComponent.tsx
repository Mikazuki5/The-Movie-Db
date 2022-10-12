import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks';
import { SearchTypesComponent } from '@/Services/Common/Types';
import { Icon } from '../index';

const SearchComponent = (props: SearchTypesComponent) => {
  const { Layout, Gutters, Colors, Fonts, Common} = useTheme();
  return (
    <View 
      style={props?.styleContainer}>
      <TextInput
        placeholder={props?.placeholder}
        placeholderTextColor={props?.placeholderTextColor}
        style={props?.styleContainerTextInput}
        onChangeText={props?.onChangeText}
        onEndEditing={props?.onEndEditing}
        keyboardType={props?.keyboardType}
        value={props?.value}
        defaultValue={props?.defaultValue}
      />
      <Icon
        width={20}
        name="search"
      />
    </View>
  )
}

export default SearchComponent