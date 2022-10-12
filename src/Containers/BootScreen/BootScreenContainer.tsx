import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native';
import { useTheme } from '@/Hooks';
import Brand from '@/Components/Common/BrandComponent';
import { AnimatedScale } from '@/Components/Common/AnimatedScaleComponent';

const BootScreenContainer = ({navigation}: any) => {
  const { Images, Layout, Gutters, Colors } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainMenu')
    },5000)
  }, [])
  
  return (
    <SafeAreaView
      style={[
        Layout.fill,
        Layout.alignItemsCenter,
        Layout.justifyContentCenter,
        { backgroundColor: Colors.white}
      ]}
    >
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white}  />
      <AnimatedScale animated>
        <Brand width={120} height={120} />
      </AnimatedScale>
      <View
        style={[
          Layout.positionAbsolute,
          Gutters.largeBottom
        ]}
      >
        <LottieView 
          source={Images.loading_blue} 
          loop 
          autoPlay 
          resizeMode='contain'
          style={{width: '70%', height:120,}}
        />
      </View>
    </SafeAreaView>
  )
}

export default BootScreenContainer