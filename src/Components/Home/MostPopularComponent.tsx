import { View, VirtualizedList, FlatList, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '@/Hooks'
import { genres, PopularCategories } from '@/Services/Common/CommonServices'
import { Text } from '../index'
import MappingDataWithScrollView from '../Common/MappingDataWithScrollView'
import { Button } from '../Common/ButtonComponent'
import { FontBase } from '@/Theme/Variables'
import { CardComponent, CardImages } from '../Common/CardComponent'
import { useDispatch } from 'react-redux'
import { fetchTopRateMovie } from '@/Store/Movie'
import { useSelector } from 'react-redux'
import moment from 'moment';
import { LoadingComponent } from '../Common/LoadingComponent'

const MostPopularComponent = () => {
  const { Layout, Gutters, Colors, Fonts } = useTheme();
  const dispatch = useDispatch<any>()
  const [ category, setCategory ] = useState('topRatedMovie');
  const [ data, setData ] = useState(null)

  const {loading} = useSelector((state: any) => ({
    loading: state?.MovieStore?.TopRatedMovies?.isLoading,
  }))
  
  useEffect(() => {
    changeStateColors('topRatedMovie');
  }, [])
  

  const changeStateColors = (values: any) => {
    if (values == 'topRatedMovie') {
      let payload = {
        language: 'en-US',
        page: 1
      }
      dispatch(fetchTopRateMovie({
        payload,
        callback(action, status) {
          if (status == 200) {
            setData(action?.results);
          } else {
            Alert.alert('Error')
          }
        },
      }))
    } 

    if (values == 'topRatedTvShow') {
      console.log('values: ', values)
    }
    
    setCategory(values);
  }

  const _renderItem = (item: any, index: any) => {
    return(
      <Button 
        animated={false} 
        onSubmit={() => changeStateColors(item?.id)} 
        type={'submit'} 
        color={category == item?.id ? Colors.baseColorAppBlue : 'transparent'} 
        style={[ Gutters.tinyRMargin, Gutters.tinyPadding]}
      >
        <Text font={FontBase?.extraBold} style={[Fonts.textSmall, {color: category == item?.id ? Colors.white : Colors.baseColorAppBlue}]}>{item.name}</Text>
      </Button>
    )
  }

  const _renderListTopMovie = (item: any, index: any) => {
    return (
      <CardImages key={index} width={150} height={200} dataImage={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item?.poster_path}`}>
        <View style={{width:140}}>
          <Text font={FontBase.bold} style={[{fontSize: 14, color: Colors.richBlack1}]}>{item?.title}</Text>
          <Text font={FontBase.reguler} style={[Fonts.textExtraSmall, {color: Colors.richBlack1}]}>{moment(item?.release_date).format('ll')}</Text>
        </View>
      </CardImages>
    )
  }
  return (
    <>
      <View style={[Layout.row, Layout.alignItemsCenter]}>
        <View style={[Gutters?.tinyRMargin, {flex:0.7}]}>
          <Text font={FontBase?.bold} style={[Fonts.textSmall, {color: Colors.baseColorAppBlue}]}>What's popular?</Text>
        </View>
        <View style={[Gutters.tinyPadding, Gutters.smallBRadius, Layout.fill ,{borderWidth: 1, borderColor: Colors.baseColorAppBlue}]}>
          <MappingDataWithScrollView
            data={PopularCategories}
            renderItem={_renderItem}
            horizontal
          />
        </View>
      </View>
      <MappingDataWithScrollView
        data={data}
        renderItem={_renderListTopMovie}
        horizontal
        ListEmptyComponent={<View><Text>Kosong</Text></View>}
      />
      <LoadingComponent isLoading={loading} />
    </>
  )
}

export default MostPopularComponent