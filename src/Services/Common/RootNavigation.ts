import * as React from 'react';
import { StackActions } from '@react-navigation/native'

export const navigationRef = React.createRef();

export function getNavigationName() {
  return navigationRef.current?.getCurrentRoute().name
}

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function goBack(){
    navigationRef.current?.goBack()
}

export function reset(index, routes){
  navigationRef.current?.reset({
    index:index,
    routes:routes
  })
}

export function canGoBack() {
  return navigationRef.current?.canGoBack()
}

export function replace(name, params) {
  return navigationRef.current?.dispatch(
    StackActions.replace(name, params)
  )
}