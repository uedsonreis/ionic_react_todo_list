import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import reducer from './reducer';

const persistedReducer = persistReducer({ key: 'root', storage: AsyncStorage }, reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);