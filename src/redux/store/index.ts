import rootReducer from '../reducers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
// const middleware = logger, sagaMiddleware);
const store = createStore(
  persistedReducer,
  applyMiddleware(logger, sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
const persistor = persistStore(store)


export { store, persistor }