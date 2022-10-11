/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { Platform } from "react-native"

/**
 * Colors
 */
export const Colors = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#212529',
  primary: '#E14032',
  success: '#28a745',
  error: '#dc3545',

  // Base
  baseHeaderColor: '#FFF5EE',

  // Apps
  black: '#000',
  black1: '#3d4048',
  black2: '#4e4e51',
  black3: '#173659',
  black4: '#00000050',
  black5: '#2E3A59',
  richBlack: '#414B54',
  richBlack1: '#101315',
  richBlack4: '#62717D',
  richBlack5: '#8896A2',
  richBlack6: '#A6B0B9',
  richBlack8: '#DBE0E3',
  richBlack10: '#F9FAFA',
  gray: '#a2b1c6',
  gray1: '#92a0af',
  gray2: '#9aa8ba',
  gray3: '#869399',
  gray4: '#F4F6F9',
  gray5: '#EAEFF1',
  gray6: '#E5E5E5',
  gray7: '#F2F4F7',
  gray8: '#D3D8D9',
  red: '#cf102d',
  red1: '#D22229',
  mono2: '#F4F5F6',
  mono3: '#E1E4E5',
  mono4: '#D3D8D9',
  mono5: '#BDC4C7',
  mono6: '#A7B1B4',
  mono7: '#919DA1',
  mono8: '#7B8A8E',
  mono9: '#667377',
  mono10: '#515C5F',
  mono11: '#3D4548',
  mono12: '#292E30',
  mono13: '#070808',
  mono14: '#141718',
  blueSky: '#0FC3FF',
  blueDark: '#007DAE',
  blue1: '#009DE5',
  blue2: '#009DE6',
  dodger: '#2B9DFF',
  dodger6: '#DCEFFF',
  orange: '#FF7C00',
  orange1: '#FF8D2B',
  orange2: '#FFC22B',
  tints1: '#54D4FF',
  tints2: '#6CDAFF',
  tints3: '#85E1FF',
  tints4: '#9DE7FF',
  tints5: '#B6EDFF',
  tints6: '#CEF3FF',
  tints7: '#E7F9FF',
  ebony1: '#151012',
  ebony06: '#8E6E76',
  ebony7: '#AB9298',
  neutarl4: '#A6B0B9',
  sapphire: '#0061C2',
  aqua1: '#CBFAFF',
  cantaloupe: '#FFF6F0',
  shades2: '#006B95',
  shades5: '#00354B',
  green: '#09A854',
  tiffany2: '#86F0D9',
  tiffany6: '#005D58',
  raspberry1: '#FFE2E4',
  raspberry6: '#730004',
  raspberry: '#D93535',
  grey: '#919DA1',
  shades: '#008BBA',
  cantaloupe1: '#FFEBDC',
  cantaloupe4: '#E1721D',
  cantaloupe5: '#A54D12',
  primary1: '#0AC2FF',
  blue: '#05A3DD',
  rasberry4: '#D93535',
  raisin7: '#A1ADBE',
  raisin9: '#E7EBEF',
  neutral6: '#62717D',
  mango1: '#FFEDCE',
  mango6: '#683C00',
  primary2: '#0AC2FF',
  primary3: '#008FC7'
}

export const NavigationColors = {
  primary: Colors.primary,
}

export const PlatformConfig = {
  android: Platform.OS == 'android',
  ios: Platform.OS == 'ios'
}

/**
 * FontSize
 */
export const FontSize = {
  extraSmall: 12,
  small: 16,
  regular: 20,
  large: 40,
}

export const FontBase = {
  reguler: PlatformConfig.ios ? 'TitilliumWeb-Regular' : 'NunitoSans-Regular',
  light: PlatformConfig.ios ? 'TitilliumWeb-Regular' : 'NunitoSans-Light',
  extraLight: PlatformConfig.ios ? 'TitilliumWeb-Regular' : 'NunitoSans-ExtraLight',
  italic: PlatformConfig.ios ? 'TitilliumWeb-Italic' : 'NunitoSans-Italic',
  bold: PlatformConfig.ios ? 'TitilliumWeb-SemiBold' : 'NunitoSans-Bold',
  semiBold: PlatformConfig.ios ? 'TitilliumWeb-SemiBold' : 'NunitoSans-SemiBold',
  extraBold: PlatformConfig.ios ? 'TitilliumWeb-SemiBold' : 'NunitoSans-ExtraBold',
}

/**
 * Metrics Sizes
 */
const tiny = 5 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2 // 30

const tinyPercent = '5%'
const smallPercent = '10%'
const regularPercent = '15%'
const largePercent = '30%'

export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
  tinyPercent,
  smallPercent,
  regularPercent,
  largePercent
}

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
  PlatformConfig,
  FontBase
}
