export type BrandTypes = {
  height?: number | string
  width?: number | string
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
}

export type AnimatedViewTypes = {
  children: any;
  customAnimatedStyle?: object | any;
  delay?: number,
  animated: boolean
}