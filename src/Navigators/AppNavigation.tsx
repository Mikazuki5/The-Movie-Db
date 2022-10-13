import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useTheme from '@/Hooks/useTheme'
import { BootScreenContainer, MovieScreenContainer, MultiSearchContainer, WatchListScreenContainer } from '@/Containers'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomNavigator from './BottomNavigator'

const Stack = createNativeStackNavigator()

const ApplicationNavigation = () => {
  const { Layout, } = useTheme()
  
  return (
    <GestureHandlerRootView style={[Layout.fill]}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SplashScreen'>
          <Stack.Screen 
            name="SplashScreen" 
            component={BootScreenContainer} 
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name="MainMenu" 
            component={BottomNavigator} 
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name="movieList" 
            component={MovieScreenContainer} 
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name="watchList" 
            component={WatchListScreenContainer} 
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name="resultSearch" 
            component={MultiSearchContainer} 
            options={{headerShown: false}} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default ApplicationNavigation