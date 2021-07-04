import { takeEvery, put, call } from '@redux-saga/core/effects'
import { useSelector } from 'react-redux'
import { AnyAction } from 'redux'
import { getListProducts } from '../../api/listProduct'
import Types from '../types'
// import { ADD_PRODUCT, ADD_PRODUCT_API, ADD_PRODUCT_INVOICE } from '../actions/productAction'

function* fetchDataSaga(action:AnyAction) {
  
  console.log(action)
  try { 
    const data = yield call(getListProducts) 
    console.log('SAGA: ', data.data) //response: object chua data
    yield put({ type: Types.ADD_PRODUCT_FROM_API, payload: data })
  }
  catch (e) {
    console.log('ProductSaga/Reducer: ERROR! ', e) 
  }
}

export default function* productSaga() {
  console.log('Listening Request API Product') 
  yield takeEvery(Types.ADD_PRODUCT_FROM_API_LISTENER, fetchDataSaga)
} 