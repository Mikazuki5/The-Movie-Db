import { View, TextInput } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks';
import { SearchTypesComponent } from '@/Services/Common/Types';
import { SearchIcon } from 'react-native-heroicons/outline'

const SearchComponent = (props: SearchTypesComponent) => {
  const { Colors } = useTheme();
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
      <SearchIcon color={Colors.mono8} />
    </View>
  )
}

export default SearchComponent