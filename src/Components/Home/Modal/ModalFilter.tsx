import { View, Modal, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { CardComponent } from '@/Components/Common/CardComponent'
import { Text } from '@/Components'
import { FontBase } from '@/Theme/Variables'
import { MediaType, TimeWindow } from '@/Services/Common/CommonServices'
import { Button } from '@/Components/Common/ButtonComponent'

const ModalFilter = () => {
  const {Layout, Colors, Gutters} = useTheme();

  const _renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity key={index} style={[Layout.alignItemsCenter,Layout.justifyContentCenter,Gutters.smallBRadius, {width:95, height:30, backgroundColor:'red', marginRight: 5}]}>
        <Text>{item?.name}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <Modal transparent>
      <View style={[Layout.fill, Layout.justifyContentCenter, Layout.alignItemsCenter, {backgroundColor: Colors.black4}]}>
        <CardComponent width={'90%'}>
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
                renderItem={_renderItem}
                style={[Gutters.tinyVMargin]}
                horizontal
              />
            </View>
          </View>
          <Button 
            type='submit' 
            onSubmit={() => console.log('amna')} 
            animated={false}
          >
            <Text>Simpan</Text>
          </Button>
        </CardComponent>
      </View>
    </Modal>
  )
}

export default ModalFilter