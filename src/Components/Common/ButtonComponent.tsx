import { useTheme } from "@/Hooks"
import { Buttontypes } from "@/Services/Common/Types"
import React from "react"
import { TouchableOpacity } from "react-native"
import { AnimatedScale } from "./AnimatedView"

const Button:React.FC<Buttontypes> = ({
  color,
  type,
  disable,
  onSubmit,
  style,
  children,
  animated,
  delay
}) => {
  const { Colors } = useTheme();
  return (
    <AnimatedScale animated={animated} delay={delay} >
      <TouchableOpacity
        key={type}
        onPress={onSubmit}
        disabled={disable}
        style={[
          style, 
          { backgroundColor: color ? color : Colors.blue1 , borderRadius: 10 }
        ]}
      >
        {children}
      </TouchableOpacity>
    </AnimatedScale>
  )
}

Button.defaultProps={
  animated: false
}

export { Button };