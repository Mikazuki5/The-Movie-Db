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

export type SearchTypesComponent = {
  placeholder?: string,
  styleContainer?: object | any,
  styleContainerTextInput?: object | any,
  placeholderTextColor?: string,
  onChangeText?:(values:any) => void,
  onEndEditing?:(values:any) => void,
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad',
  value?:string
  defaultValue?:string
}

export type interfaceAnimatedView = {
  children: any;
  customAnimatedStyle?: object | any;
  delay?: number,
  animated: boolean
}

export type Buttontypes = {
  color?: string | any,
  type: 'submit' | 'cancel',
  disable?: boolean,
  onSubmit: (values:any) => void,
  style?: object,
  children: any,
  animated: boolean,
  delay?: number
}

export type MappingDataWithScrollViewProps = { 
  renderItem: (item: object | any, index: number) => void
  data: any
  horizontal?: boolean
  style?: object,
  contentContainerStyle?: object
  refreshControl?: object | any,
  keyboardShouldPersistTaps?: boolean | 'always' | 'never' | 'handled' | undefined
  keyboardDismissMode?: 'none' | 'interactive' | 'on-drag' | undefined
  ListEmptyComponent?: React.ComponentType<any> | React.ReactElement | null | undefined;
  scrollEnabled?:boolean
}

export type CardTypes = {
  key?: number | string
  disable?: boolean
  onSubmit?: () => void
  CardStyle?: object
  width?: number | string
  height?: number | string
  children?: any
  color?: string
  dataImage?: string | any
}

export type LoadingTypes = {
  isLoading: any,
}

export type ModalFilterProps = {
  visible: boolean
  onSubmit: (mediaType?:any, timeWindow?:any) => void
  onClosed: () => void
}