import { Alert, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@/Hooks';
import { FontBase } from '@/Theme/Variables';
import { Text } from '../index';
import MappingDataWithScrollView from '../Common/MappingDataWithScrollView';
import { LoadingComponent } from '../Common/LoadingComponent';
import { CardImages } from '../Common/CardComponent';
import { fetchDataNowPlaying, fetchDataUpcomingMovie } from '@/Store/Movie';
import moment from 'moment';
import { Movies } from '@/Services/Common/CommonServices';
import { Button } from '../Common/ButtonComponent';

const NowPlayingComponent = () => {
  const dispatch = useDispatch<any>()
  const { Layout, Gutters, Colors, Fonts } = useTheme();
  const [ data, setData ] = useState(null);
  const [ category, setCategory ] = useState('nowPlaying');

  const {loading} = useSelector((state: any) => ({
    loading: state?.MovieStore?.isLoading,
  }))

  useEffect(() => {
    changeStateColors('nowPlaying');
  }, [])

  const changeStateColors = (values: any) => {
    let payload = {
      language: 'en-US',
      page: 1
    }
    if (values == 'nowPlaying') {
      dispatch(
        fetchDataNowPlaying({
          payload,
          callback(action, status) {
            if (status == 200) {
              setData(action?.results);
            } else {
              Alert.alert('Error')
            }
          },
        })
      )
    } 
    
    if (values == 'upcoming') {
      dispatch(fetchDataUpcomingMovie({
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
    
    setCategory(values);
  }

  const _renderItem = (item: any, index: any) => {
    return(
      <Button
        key={index}
        animated={false} 
        onSubmit={() => changeStateColors(item?.id)} 
        type={'submit'} 
        color={category == item?.id ? Colors.baseColorAppBlue : 'transparent'} 
        style={[ Gutters.tinyRMargin, Gutters.tinyVPadding, Gutters.smallHPadding, Gutters.largeBRadius]}
      >
        <Text font={FontBase?.extraBold} style={[Fonts.textExtraSmall, {color: category == item?.id ? Colors.white : Colors.baseColorAppBlue}]}>{item.name}</Text>
      </Button>
    )
  }

  const _renderListTopMovie = (item: any, index: any) => {
    return (
      <View style={Gutters.tinyRMargin} key={index}>
        <CardImages width={150} height={200} dataImage={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item?.poster_path}`}>
          <View style={[Layout?.row]}>
            <View style={[{width:120}]}>
              <Text font={FontBase.bold} style={[{fontSize: 14, color: Colors.richBlack1}]}>{item?.title || item?.name}</Text>
              <Text font={FontBase.reguler} style={[Fonts.textExtraSmall, {color: Colors.mono9}]}>{moment(item?.release_date || item?.first_air_date).format('ll')}</Text>
            </View>
            <View style={[Layout.fill]}>
              <Text font={FontBase.bold} style={[{fontSize: 14, color: Colors.richBlack1}]}>Rating</Text>
              <Text font={FontBase.bold} style={[{fontSize: 12, color: '#46C0C4', textAlign: 'center'}]}>{item?.vote_average}</Text>
            </View>
          </View>
        </CardImages>
      </View>
    )
  }
  
  return (
    <>
      <View style={[Layout.row, Layout.alignItemsCenter, Gutters.smallBMargin]}>
        <View style={[Gutters?.tinyRMargin, {flex:0.7}]}>
          <Text font={FontBase?.bold} style={[Fonts.textSmall, {color: Colors.baseColorAppBlue}]}>Movie</Text>
        </View>
        <View style={[Gutters.tinyPadding, Gutters.largeBRadius, Layout.fill ,{borderWidth: 1, borderColor: Colors.baseColorAppBlue}]}>
          <MappingDataWithScrollView
            data={Movies}
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

export default NowPlayingComponent