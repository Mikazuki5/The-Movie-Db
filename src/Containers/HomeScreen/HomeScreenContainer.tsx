import { View, SafeAreaView, ScrollView, Alert } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { HeaderHome, Loading, NowPlayingComponent, SearchComponent, Text, TopRatedComponent, TrendingComponent } from '@/Components'
import { FontBase } from '@/Theme/Variables'
import { useDispatch, useSelector } from 'react-redux'
import { MultiSearch } from '@/Store/Movie'

const HomeScreenContainer = ({navigation}: any) => {
  const { Layout, Colors, Gutters, Fonts } = useTheme();
  const dispatch = useDispatch<any>();
  const {loading} = useSelector((state: any) => ({
    loading: state?.MovieStore?.isLoading,
  }))
  

  const loadData = (values:any) => {
    let payload:any = {
      page: 1,
      language: 'en-US',
      include_adult: false,
      query: values
    }
    dispatch(
      MultiSearch({
        payload,
        callback(action, status) {
          if (status == 200) {
            navigation.navigate('resultSearch', {
              data: action?.results
            })
          } else {
            Alert.alert('error')
          }
        },
      })
    )
  }

  return (
    <SafeAreaView style={[Layout.fill, {backgroundColor: Colors.white}]}>
      <HeaderHome />
      <ScrollView 
        key={'ScrollView'}
        style={[Gutters.largeTMargin, Gutters.smallHMargin]}
        keyboardShouldPersistTaps={'handled'}
        nestedScrollEnabled
      >
        <View>
          <Text font={FontBase.extraBold} style={[Fonts.textRegular]}>Welcome.</Text>
          <Text style={[Gutters.smallTMargin, Gutters.regularBMargin, {color: Colors.mono6, fontSize: 14}]}>{'Millions of movies, TV shows and people to discover. \nExplore now.'}</Text>
        </View>
        <SearchComponent
          placeholder={'Search for a movie, tv show, people,...'}
          styleContainer={[
            Gutters.regularHPadding,
            Gutters.smallVMargin,
            Layout.row,
            Layout.justifyContentBetween,
            Gutters.smallBRadius,
            Layout.alignItemsCenter,
            {
              backgroundColor: Colors.gray7
            }
          ]}
          placeholderTextColor={Colors.mono7}
          styleContainerTextInput={Layout.fill}
          onEndEditing={(values:any) => {
            loadData(values?.nativeEvent?.text)
          }}
        />
        <NowPlayingComponent />
        <TopRatedComponent />
        <TrendingComponent />
        <Loading isLoading={loading} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreenContainer