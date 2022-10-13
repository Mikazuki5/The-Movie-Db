import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreenContainer, MovieScreenContainer, TVScreenContainer, WatchListScreenContainer } from '@/Containers'
import { 
  HomeIcon,
  DesktopComputerIcon,
  VideoCameraIcon,
  UserCircleIcon,
  ViewListIcon
} from "react-native-heroicons/outline";
import { Text } from '@/Components';
import { navigate } from '@/Services/Common/RootNavigation';

const Tab = createBottomTabNavigator()

const BottomNavigator = ({navigation}: any) => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreenContainer}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity style={{alignItems: 'center'}}
              onPress={() => {navigation.navigate('MainMenu')}}
            >
              <HomeIcon color={'#0d253f'} />
              <Text style={{color: '#0d253f'}}>{'Beranda'}</Text>
            </TouchableOpacity>
          )
        }}
      />
      <Tab.Screen
        name="Movie"
        component={MovieScreenContainer}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity style={{alignItems: 'center'}}
              onPress={() => {navigation.navigate('movieList')}}
            >
              <VideoCameraIcon color={'#0d253f'} />
              <Text style={{color: '#0d253f'}}>{'Movie'}</Text>
            </TouchableOpacity>
          )
        }}
      />
      <Tab.Screen
        name="Tv"
        component={TVScreenContainer}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity style={{alignItems: 'center'}}
              onPress={() => {navigate('Home', null)}}
            >
              <DesktopComputerIcon color={'#0d253f'} />
              <Text style={{color: '#0d253f'}}>{'TV'}</Text>
            </TouchableOpacity>
          )
        }}
      />
      <Tab.Screen
        name="WatchList"
        component={WatchListScreenContainer}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity style={{alignItems: 'center'}}
              onPress={() => {navigation.navigate('watchList', null)}}
            >
              <ViewListIcon color={'#0d253f'} />
              <Text style={{color: '#0d253f'}}>{'Watch List'}</Text>
            </TouchableOpacity>
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={WatchListScreenContainer}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity style={{alignItems: 'center'}}
              // onPress={() => {navigate('Home', null)}}
            >
              <UserCircleIcon color={'#0d253f'} />
              <Text style={{color: '#0d253f'}}>{'Beranda'}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomNavigator