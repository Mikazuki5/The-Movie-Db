import { ThemeVariables } from './theme'

export default function ({}: ThemeVariables) {
  return {
    ic_default: require('@/Assets/Icons/Icon/unknown.png'),
    base_logo: require('@/Assets/Icons/Logo/brand.png'),
    loading_blue: require('@/Assets/Animation/custom-loading.json'),
    background: require('@/Assets/Images/background.jpg'),
    avatar: require('@/Assets/Images/avatar.png')
  }
}
