import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { HeaderCompoenent } from '@/Components/Common/HeaderCompoenent'
import { ArrowSmLeftIcon } from 'react-native-heroicons/outline'
import { ListMovieComponent } from '@/Components/Movie'
import { LoadingComponent } from '@/Components/Common/LoadingComponent'
import { useSelector } from 'react-redux'
import { useTheme } from '@/Hooks'

const MultiSearchContainer = (props:any) => {
  const { Layout, Gutters, Colors, } = useTheme();
  const {loading,} = useSelector((state: any) => ({
    loading: state?.MovieStore?.isLoading,
  }))
  return (
    <SafeAreaView style={[ Layout.fill, {backgroundColor: Colors.white} ]}>
      <HeaderCompoenent
        title={'Pencarian'}
        leftComponent={
          <TouchableOpacity onPress={() => props?.navigation.replace('MainMenu')}>
            <ArrowSmLeftIcon color={'black'} />
          </TouchableOpacity>
        }
      />
      <View style={[Layout.fill, Gutters.smallTMargin, Gutters.smallHMargin]}>
        <ListMovieComponent data={props?.route?.params?.data} />
      </View>
      <LoadingComponent isLoading={loading} />
    </SafeAreaView>
  )
}

export default MultiSearchContainer