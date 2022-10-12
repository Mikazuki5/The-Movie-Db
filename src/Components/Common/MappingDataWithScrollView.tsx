import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { MappingDataWithScrollViewProps } from '@/Services/Common/Types'



const MappingDataWithScrollView = ({ renderItem, data, horizontal, style, contentContainerStyle, refreshControl, keyboardShouldPersistTaps, keyboardDismissMode, ListEmptyComponent}: MappingDataWithScrollViewProps) => {
  return (
    <ScrollView 
      horizontal={horizontal} 
      style={style}
      contentContainerStyle={contentContainerStyle}
      refreshControl={refreshControl}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      keyboardDismissMode={keyboardDismissMode}
    >
      {data?.length == 0 && ListEmptyComponent}
      {data?.map(renderItem)}
    </ScrollView>
  )
}

MappingDataWithScrollView.defaultProps = {
  horizontal: false
}

export default MappingDataWithScrollView