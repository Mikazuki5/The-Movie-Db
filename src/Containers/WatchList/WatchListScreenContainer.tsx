import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { HeaderCompoenent } from '@/Components/Common/HeaderCompoenent'
import { ArrowSmLeftIcon } from 'react-native-heroicons/outline'
import { useTheme } from '@/Hooks'
import { useSelector } from 'react-redux'
import { LoadingComponent } from '@/Components/Common/LoadingComponent'
import { ListMovieComponent } from '@/Components/Movie'

const WatchListScreenContainer = (props:any) => {
  const { Layout, Gutters, Fonts, Colors, Common } = useTheme();
  const {loading, watchListData} = useSelector((state: any) => ({
    loading: state?.MovieStore?.isLoading,
    watchListData: state?.MovieStore?.watchListData,
  }))
  return (
    <SafeAreaView style={[ Layout.fill, {backgroundColor: Colors.white} ]}>
      <HeaderCompoenent
        title={'Watchlist'}
        leftComponent={
          <TouchableOpacity onPress={() => props?.navigation.replace('MainMenu')}>
            <ArrowSmLeftIcon color={'black'} />
          </TouchableOpacity>
        }
      />
      <View style={[Layout.fill, Gutters.smallTMargin, Gutters.smallHMargin]}>
        <ListMovieComponent data={watchListData} watchlist />
      </View>
      <LoadingComponent isLoading={loading} />
    </SafeAreaView>
  )
}

export default WatchListScreenContainer