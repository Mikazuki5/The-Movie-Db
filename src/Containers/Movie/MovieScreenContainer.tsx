import { View, SafeAreaView, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '@/Hooks'
import { HeaderCompoenent } from '@/Components/Common/HeaderCompoenent'
import { ListMovieComponent } from '@/Components/Movie'
import { ArrowSmLeftIcon, DotsVerticalIcon } from 'react-native-heroicons/outline'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataNowPlaying, fetchDataPopularMovie, fetchDataUpcomingMovie, fetchTopRateMovie } from '@/Store/Movie'
import { LoadingComponent } from '@/Components/Common/LoadingComponent'
import { Modalize } from 'react-native-modalize'
import { MoviesCategories } from '@/Services/Common/CommonServices'
import { Text } from '@/Components'
import { FontBase } from '@/Theme/Variables'

const MovieScreenContainer = (props:any) => {
  const { Layout, Gutters, Fonts, Colors, Common } = useTheme();

  const [ data, setData ] = useState(null);
  const [ page, setPage ] = useState(1);
  const [ filter, setfilter ] = useState('popular');

  const modalizeRef = useRef<Modalize>(null);
  const dispatch = useDispatch<any>();
  const {loading} = useSelector((state: any) => ({
    loading: state?.MovieStore?.isLoading,
  }))

  useEffect(() => {
    loadData('popular')
  }, [])

  const loadData = (values:any) => {
    let payload = {
      page: page,
      language: 'en-US'
    }

    if (values == 'popular') {
      dispatch(
        fetchDataPopularMovie({
          payload,
          callback(action, status) {
            if (status == 200) {
              setData(action?.results)
            } else {
              Alert.alert('error')
            }
          },
        })
      )
    }
    if (values == 'nowPlaying') {
      dispatch(
        fetchDataNowPlaying({
          payload,
          callback(action, status) {
            if (status == 200) {
              setData(action?.results)
            } else {
              Alert.alert('error')
            }
          },
        })
      )
    }
    if (values == 'upcoming') {
      dispatch(
        fetchDataUpcomingMovie({
          payload,
          callback(action, status) {
            if (status == 200) {
              setData(action?.results)
            } else {
              Alert.alert('error')
            }
          },
        })
      )
    }
    if (values == 'topRated') {
      dispatch(
        fetchTopRateMovie({
          payload,
          callback(action, status) {
            if (status == 200) {
              setData(action?.results)
            } else {
              Alert.alert('error')
            }
          },
        })
      )
    }
  }

  const _renderFilterItem = ({item, index}:any) => {
    return(
      <TouchableOpacity 
        key={index} 
        style={[
          Layout.alignItemsCenter,
          Layout.justifyContentCenter,
          Gutters.smallBRadius,
          Common.cardShadows,
          Gutters.smallMargin,
            {
              flex: 0.5,
              height: 50,
              marginRight: 5,
              backgroundColor: Colors.white,
              borderWidth: filter == item.id ? 1 : 0,
              borderColor: '#01b4e4'
            }
          ]}
        onPress={() => {
          setfilter(item.id);
          loadData(item.id)
          modalizeRef?.current?.close();
        }}  
        >
        <Text style={[{color: filter == item.id ? '#01b4e4' : Colors.ebony7}]}>{item?.name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={[ Layout.fill, {backgroundColor: Colors.white} ]}>
      <HeaderCompoenent
        leftComponent={
          <TouchableOpacity onPress={() => props?.navigation.replace('MainMenu')}>
            <ArrowSmLeftIcon color={'black'} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity onPress={() => modalizeRef?.current?.open()}>
            <DotsVerticalIcon color={'#0d253f'} />
          </TouchableOpacity>
        }
      />
      <View style={[Layout.fill, Gutters.smallTMargin, Gutters.smallHMargin]}>
        <ListMovieComponent data={data} />
      </View>
      <LoadingComponent isLoading={loading} />
      <Modalize 
        ref={modalizeRef}
        adjustToContentHeight 
        flatListProps={{
          data: MoviesCategories,
          renderItem: _renderFilterItem,
          numColumns: 2,
          ListHeaderComponent:() => {
            return(
              <View style={[Gutters.smallPadding]}>
                <Text font={FontBase.bold} style={[Gutters.regularBMargin, {fontSize: 16, color: Colors.richBlack1}]}>Filter</Text>
              </View>
            )
          }
        }}
      />
    </SafeAreaView>
  )
}

export default MovieScreenContainer