import { View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { HeaderHome, NowPlayingComponent, SearchComponent, Text, TopRatedComponent, TrendingComponent } from '@/Components'
import { FontBase } from '@/Theme/Variables'

const HomeScreenContainer = () => {
  const { Layout, Colors, Gutters, Fonts } = useTheme()
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
          onEndEditing={(values:any) => console.log('Values: ', values?.nativeEvent?.text)}
        />
        <NowPlayingComponent />
        <TopRatedComponent />
        <TrendingComponent />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreenContainer