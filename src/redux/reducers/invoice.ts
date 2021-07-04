import { AnyAction } from "redux";
import { Invoice, Product } from "../../model/invoice";
import productSaga from '../sagas/productSaga';
import Types from '../types'



type InitStateInvoice = {
    invoice: Invoice;
    products: Product[];
};

const defaultInvoice = {
    invoice_type: 0,
    amount: 0,
    amount_paid: 0,
    amount_debt: 0,
    amount_vat: 0,
    discount_amount: 0,
    status: 0,
    currency: "",
    pay_method: "CS",
    note: "",
    customer_code: "",
    customer_name: "",
    pay_reference: "",
    customer_phone_no: "",
    ecoin_minus: 0,
    ecoin_plus: 0,
    issue_datetime: "",
    customer_id: 0
}

const initState: InitStateInvoice = {
    invoice: defaultInvoice,
    products: []
}

function invoiceReducer(state: InitStateInvoice = initState, action: AnyAction) {
    const payload = action.payload
    switch (action.type) {
        case Types.ADD_PRODUCT_INVOICE:
            const products = state.products
            return {
                ...state,
                invoices: [action.payload, ...products],
            };
        default:
            return state
    }
}


// export default authReducer
export default invoiceReducer