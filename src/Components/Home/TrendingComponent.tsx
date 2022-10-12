import { Alert, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import useTheme from '@/Hooks/useTheme';
import { FontBase } from '@/Theme/Variables';
import { Text } from '../index';
import { 
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import ModalFilter from './Modal/ModalFilter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataTrending } from '@/Store/Movie';
import MappingDataWithScrollView from '../Common/MappingDataWithScrollView';
import { CardImages } from '../Common/CardComponent';
import moment from 'moment';
import { LoadingComponent } from '../Common/LoadingComponent';

const TrendingComponent = () => {
  const dispatch = useDispatch<any>()
  const { Layout, Gutters, Colors, Fonts } = useTheme();
  const {loading} = useSelector((state: any) => ({
    loading: state?.MovieStore?.isLoading,
  }))
  const [ mediaType ] = useState('all');
  const [ timeWindow ] = useState('day');
  const [ showModalFilter, setModalFilter ] = useState(false);
  const [ data, setData ] = useState(null);

  useEffect(() => {
    loadData(mediaType, timeWindow);
  },[])

  const loadData = (mediaTypes:string, timeWindows: string) => {
    let payload = {
      mediaType: mediaTypes,
      timeWindow: timeWindows,
    }

    dispatch(
      fetchDataTrending({
        payload,
        callback(action, status) {
          if (status == 200) {
            setData(action?.results)
          } else {
            Alert.alert('Error')
          }
        },
      })
    )
  }

  const _renderListTopMovie = (item: any, index: any) => {
    return (
      <View style={Gutters.tinyRMargin}>
        <CardImages key={index} width={150} height={200} dataImage={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item?.poster_path}`}>
          <View style={[Layout?.row]}>
            <View style={[{width:120}]}>
              <Text font={FontBase.bold} style={[{fontSize: 14, color: Colors.richBlack1}]}>{item?.title || item?.name}</Text>
              <Text font={FontBase.reguler} style={[Fonts.textExtraSmall, {color: Colors.mono9}]}>{moment(item?.release_date || item?.first_air_date).format('ll')}</Text>
            </View>
            <View style={[Layout.fill]}>
              <Text font={FontBase.bold} style={[{fontSize: 14, color: Colors.richBlack1}]}>Rating</Text>
              <Text font={FontBase.bold} style={[{fontSize: 12, color: '#46C0C4', textAlign: 'center'}]}>{String(item?.vote_average).substr(0, 3)}</Text>
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
          <Text font={FontBase?.bold} style={[Fonts.textSmall, {color: Colors.baseColorAppBlue}]}>Trending</Text>
        </View>
        <TouchableOpacity style={[Layout.fill, Layout.alignItemsEnd]} onPress={() => setModalFilter(true)}>
          <AdjustmentsIcon color='#00CCBB' />
        </TouchableOpacity>
      </View>
      <MappingDataWithScrollView
        data={data}
        renderItem={_renderListTopMovie}
        horizontal
        ListEmptyComponent={<View><Text>Kosong</Text></View>}
      />
      <ModalFilter
        visible={showModalFilter}
        onSubmit={(mediaType, timeWindow) => {
          loadData(mediaType, timeWindow)
          setModalFilter(false);
        }}
        onClosed={() => setModalFilter(false)}
      />
      <LoadingComponent isLoading={loading} />
    </>
  )
}

export default TrendingComponent