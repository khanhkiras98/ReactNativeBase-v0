import { all } from '@redux-saga/core/effects'
import productSaga from './productSaga'

function* helloSaga() {
  console.log('Hello Saga')
}

export default function* rootSaga() {
  console.log('Create Root saga') 
  yield all([helloSaga(), productSaga()])
} 