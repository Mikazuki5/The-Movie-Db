import { TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import useTheme from '@/Hooks/useTheme';
import { FontBase } from '@/Theme/Variables';
import { Text } from '../index';
import { 
  ChevronDownIcon,
  UserIcon,
  AdjustmentsIcon,
  SearchIcon,
} from "react-native-heroicons/outline";
import ModalFilter from './Modal/ModalFilter';

const TrendingComponent = () => {
  const { Layout, Gutters, Colors, Fonts } = useTheme();
  const [ filterTrending, setFilterTrending ] = useState('all')
  return (
    <>
      <View style={[Layout.row, Layout.alignItemsCenter, Gutters.smallBMargin]}>
        <View style={[Gutters?.tinyRMargin, {flex:0.7}]}>
          <Text font={FontBase?.bold} style={[Fonts.textSmall, {color: Colors.baseColorAppBlue}]}>Trending</Text>
        </View>
        <TouchableOpacity style={[Layout.fill, Layout.alignItemsEnd]}>
          <AdjustmentsIcon color='#00CCBB' />
        </TouchableOpacity>
      </View>
      <ModalFilter />
    </>
  )
}

export default TrendingComponent