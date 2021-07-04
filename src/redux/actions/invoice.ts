import { Product } from "../../model/invoice";

export function addProductToInvoice(data: Product) {
    return {
        type: 'ADD_PRODUCT_INVOICE',
        payload: data
      }
  }