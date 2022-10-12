import { View, Text, Modal } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks';
import { LoadingTypes } from '@/Services/Common/Types';
import LottieView from 'lottie-react-native';

export const LoadingComponent:React.FC<LoadingTypes> = ({isLoading}) => {
  const { Layout, Gutters, Colors, Images} = useTheme();
  return (
    <Modal visible={isLoading} transparent>
      <View style={[Layout.fill,Layout.alignItemsCenter,Layout.justifyContentCenter, {backgroundColor: Colors.black4}]}>
        <View 
          style={[
            Gutters.regularPadding,
            Layout.radius12,
            {
              backgroundColor: Colors.white,
            }
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
      </View>
    </Modal>
  )
}