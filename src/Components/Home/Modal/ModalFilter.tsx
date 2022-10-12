import { View, Modal, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@/Hooks'
import { CardComponent } from '@/Components/Common/CardComponent'
import { Text } from '@/Components'
import { FontBase } from '@/Theme/Variables'
import { MediaType, TimeWindow } from '@/Services/Common/CommonServices'
import { Button } from '@/Components/Common/ButtonComponent'
import { ModalFilterProps } from '@/Services/Common/Types'

const ModalFilter = ({visible, onSubmit, onClosed}: ModalFilterProps) => {
  const {Layout, Colors, Gutters, Common, Fonts} = useTheme();
  const [ mediaType, setMediaType ] = useState('all');
  const [ timeWindow, setTimeWindow ] = useState('day');
  

  const _renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity 
        key={index} 
        style={[
          Layout.alignItemsCenter,
          Layout.justifyContentCenter,
          Gutters.smallBRadius,
          Common.cardShadows,
          Gutters.smallMargin,
            {
              width:95,
              height:30,
              marginRight: 5,
              backgroundColor: Colors.white,
              borderWidth: mediaType == item.id ? 1 : 0,
              borderColor: '#01b4e4'
            }
          ]}
        onPress={() => setMediaType(item.id)}  
        >
        <Text style={[{color: mediaType == item.id ? '#01b4e4' : Colors.ebony7}]}>{item?.name}</Text>
      </TouchableOpacity>
    )
  }

  const _renderItemTime = ({item, index}: any) => {
    return (
      <TouchableOpacity 
        key={index} 
        style={[
          Layout.alignItemsCenter,
          Layout.justifyContentCenter,
          Gutters.smallBRadius,
          Common.cardShadows,
          Gutters.smallMargin,
            {
              width:95,
              height:30,
              marginRight: 5,
              backgroundColor: Colors.white,
              borderWidth: timeWindow == item.id ? 1 : 0,
              borderColor: '#01b4e4'
            }
          ]}
        onPress={() => setTimeWindow(item.id)}
        >
        <Text style={[{color: timeWindow == item.id ? '#01b4e4' : Colors.ebony7}]}>{item?.name}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <Modal animationType='slide' transparent visible={visible}>
      <View style={[Layout.fill, Layout.justifyContentCenter, Layout.alignItemsCenter, {backgroundColor: Colors.black4}]}>
        <CardComponent width={'90%'} height={"45%"}>
          <View style={[Gutters.smallPadding]}>
            <Text font={FontBase.bold} style={[Gutters.regularBMargin, {fontSize: 16, color: Colors.richBlack1}]}>Filter</Text>
            <View>
              <Text>Tipe Media</Text>
              <FlatList
                data={MediaType}
                renderItem={_renderItem}
                style={[Gutters.tinyVMargin]}
                horizontal
              />
            </View>
            <View>
              <Text>Waktu Trending</Text>
              <FlatList
                data={TimeWindow}
                renderItem={_renderItemTime}
                style={[Gutters.tinyVMargin]}
                horizontal
              />
            </View>
          </View>
          <View style={[Layout.row, Gutters.smallPadding]}>
            <Button 
              type='submit' 
              onSubmit={onClosed} 
              animated={false}
              color={'transparent'}
              style={[
                Gutters?.smallBRadius, Layout.alignItemsCenter, Layout.fill, Gutters.tinyRMargin, Layout.justifyContentCenter,{height: 50}
              ]}
            >
              <Text font={FontBase.bold} style={[Fonts.textSmall, {color:'#01b4e4'}]}>Batal</Text>
            </Button>
            <Button 
              type='submit' 
              onSubmit={() => onSubmit(mediaType, timeWindow)} 
              animated={false}
              color={'#01b4e4'}
              style={[
                Gutters?.smallBRadius, Layout.alignItemsCenter, Layout.fill, Layout.justifyContentCenter,{height: 50}
              ]}
            >
              <Text font={FontBase.bold} style={[Fonts.textSmall, {color:Colors.white}]}>Simpan</Text>
            </Button>
          </View>
        </CardComponent>
      </View>
    </Modal>
  )
}

ModalFilter.defaultProps = {
  visible: false
}

export default ModalFilter