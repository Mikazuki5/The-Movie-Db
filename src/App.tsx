import 'react-native-gesture-handler';
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from '@/Store'
import ApplicationNavigation from './Navigators/AppNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <ApplicationNavigation />
      </PersistGate>
    </Provider>
  )
}

export default App