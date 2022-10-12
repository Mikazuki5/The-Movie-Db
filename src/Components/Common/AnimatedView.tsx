import { interfaceAnimatedView } from "@/Services/Common/Types"
import React, { useEffect, useRef } from "react"
import { Animated } from "react-native"

const AnimatedScale = ({children, customAnimatedStyle, delay, animated}: interfaceAnimatedView) => {
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animated && handleAnimated()
  }, [])

  const handleAnimated = () => {
    Animated.sequence([
      Animated.timing(scale, {
        delay: delay,
        toValue: 0,
        useNativeDriver: true
      }),
      Animated.timing(scale, {
        delay: delay,
        toValue: 1.1,
        useNativeDriver: true
      }),
      Animated.timing(scale, {
        delay: delay,
        toValue: 1,
        useNativeDriver: true
      }),
    ]).start();
  }
  
  return(
    <Animated.View 
      style={[customAnimatedStyle, animated && {
        transform: [{scale}]
      }]}
    >
      {children}
    </Animated.View>
  )
}

AnimatedScale.defaultProps = {
  delay: 0
}

export { AnimatedScale }