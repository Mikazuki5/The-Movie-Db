import { useTheme } from "@/Hooks"
import { Buttontypes } from "@/Services/Common/Types"
import React from "react"
import { TouchableOpacity } from "react-native"
import { AnimatedScale } from "./AnimatedView"

const ButtonWithAnimated:React.FC<Buttontypes> = ({
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
          { backgroundColor: color ? color : Colors.blue1  }
        ]}
      >
        {children}
      </TouchableOpacity>
    </AnimatedScale>
  )
}

const Button:React.FC<Buttontypes> = ({
  color,
  type,
  disable,
  onSubmit,
  style,
  children,
}) => {
  const { Colors } = useTheme();
  return (
    <TouchableOpacity
      key={type}
      onPress={onSubmit}
      disabled={disable}
      style={[
        style, 
        { backgroundColor: color ? color : Colors.blue1  }
      ]}
    >
      {children}
    </TouchableOpacity>
  )
}

ButtonWithAnimated.defaultProps={
  animated: false
}

export { Button, ButtonWithAnimated };