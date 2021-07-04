import { Data } from "../../model/product";
import Types from "../types";

export function addProductFromApi(data: Data) {
    return {
        type: 'ADD_PRODUCT_FROM_API',
        payload: data
    }
}

export function addProductFromApiListener(data: string) {
    return {
        type: Types.ADD_PRODUCT_FROM_API_LISTENER,
        payload: data
    }
}