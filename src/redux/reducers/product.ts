import { AnyAction } from "redux";
import { Data } from "../../model/product";
import productSaga from '../sagas/productSaga';
import Types from '../types'



type InitStateProduct = {

  page: number,
  size: number,
  total_elements: number,
  total_pages: number,
  last: boolean,
  data: Data[],
};
const defaultUnit = {
  default_flg: 0,
  drug_id: 0,
  drug_unit_id: 0,
  price: 0,
  price_before_vat: 0,
  unit_id: 0,
  unit_name: '',
  unit_qty: 0,
}
const defaultData = {
  account_id: null,
  active_flg: 0,
  active_ingredient: '',
  company_code: '',
  company_name: '',
  created_date: '',
  direction_for_use: '',
  dosage: '',
  drg_barcode: '',
  drg_drug_cd: '',
  drg_drug_name: '',
  drg_store_id: 0,
  drug_id: 0,
  drug_unit_id: 0,
  employee_commissions: 0,
  exp_date: '',
  image_url: "https://medlinknhathuoclongdev.s3.ap-southeast-1.amazonaws.com/1625055046800_images.jpg",
  inv_id: '',
  lot: '',
  loyalty_flg: 0,
  mfg_date: '',
  package_desc: '',
  price: 0,
  quantity: 0,
  unit_cd: '',
  unit_name: '',
  updated_date: null,
  updated_user: '',
  vat_percent: 0,


  unit: [defaultUnit]
}


const initState: InitStateProduct = {
  page: 1,
  size: 10,
  total_elements: 0,
  total_pages: 1,
  last: true,
  data: [defaultData]
}

function invoiceReducer(state: InitStateProduct = initState, action: AnyAction) {
  const payload = action.payload
  switch (action.type) {
    case Types.ADD_PRODUCT_FROM_API:
      const data = state.data
      return {
        ...state,
        products: [payload, ...data],
      };
    case Types.ADD_PRODUCT_FROM_API_LISTENER:
      return state
    default:
      return state
  }
}


// export default authReducer
export default invoiceReducer