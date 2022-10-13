import { View, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CardImages } from '@/Components/Common/CardComponent'
import { useTheme } from '@/Hooks'
import { Text } from '@/Components'
import { FontBase } from '@/Theme/Variables'
import { HeartIcon } from 'react-native-heroicons/outline'
import { StarIcon } from 'react-native-heroicons/solid'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { watchListDatas } from '@/Store/Movie'

const ListMovieComponent = (props:any) => {
  const { Layout, Gutters, Colors, Fonts } = useTheme();
  const dispatch = useDispatch<any>();
  
  const {watchListData} = useSelector((state: any) => ({
    watchListData: state?.MovieStore?.watchListData,
  }))

  const handleSaveToWatchList = (values:any) => {
    let Watchlist = []
    const data = watchListData;
   

    if (data != undefined) {
      if (typeof data == 'string') {
        Watchlist = JSON.parse(data);
      } else {
        Watchlist = data
      }
    }

    if (data != undefined) {
      const find = data.filter((x: any) => x.title == values.title);
      if (find && find.length != 0) {
        Alert.alert('Maaf film untuk judul ini telah tersedia!')
      } else {
        const app = data.map((item: any) => ({
          ...item
        }))
        const payload:any = app.concat([values]);
        dispatch(watchListDatas({
          payload,
          callback(status) {
            if(status == 200){
              Alert.alert('success')
            } else {
              Alert.alert('err')
            }
          },
        }));
      }
    } else {
      let payload:any = [values]
      dispatch(watchListDatas({
        payload,
        callback(status) {
          if(status == 200){
            Alert.alert('success')
          } else {
            Alert.alert('err')
          }
        },
      }));
    }
  }
  
  const _renderItem = ({item, index}:any) => {
    return(
      <View style={[Layout.row]} key={index}>
        <View style={{flex:0.6}}>
          <CardImages width={110} height={140} dataImage={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item?.poster_path}`} />
        </View>
        <View style={[Layout.fill, Layout.justifyContentCenter]}>
          <Text font={FontBase.extraBold} style={[Fonts.textSmall]}>{item?.title || item?.name}</Text>
          <Text font={FontBase.semiBold} style={[Fonts.textExtraSmall, {color: Colors.mono9}]}>{moment(item?.release_date || item?.first_air_date).format('ll')}</Text>
          <View style={[Layout.row, Layout.alignItemsCenter]}>
            <Text font={FontBase.semiBold} style={[Fonts.textExtraSmall, {color: Colors.mono9}]}>Rating</Text>
            <StarIcon color={'#0d253f'} style={[Gutters.smallLMargin]} />
            <Text font={FontBase.semiBold} style={[Fonts.textExtraSmall, {color: Colors.mono9}]}>{String(item?.vote_average).substr(0, 3)}</Text>
          </View>
          {!props.watchlist && (
            <TouchableOpacity
              onPress={() => handleSaveToWatchList(item)}
              style={[Layout.row, Layout.alignItemsCenter, Gutters.smallTMargin]}
            >
              <HeartIcon color={'#0d253f'} />
              <Text font={FontBase.semiBold} style={[Fonts.textSmall]}> Add to Watchlist</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  }

  return (
    <>
      <FlatList
        data={props?.data}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => {
          return(
            <Text>List Kosong</Text>
          )
        }}
      />
    </>
  )
}

export default ListMovieComponent