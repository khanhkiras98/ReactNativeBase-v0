import axios from 'axios'

import config from '../configs'
import { store } from '../redux/store'
export function getListProducts() {

    
    const body = {
        "drug_barcode": "",
        "drug_name": "",
        "company": "",
        "status": null,
        "quantity": 1,
        "exp_date": true
    }
    const header = {
        headers: {
            'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjQ5LTAiLCJpYXQiOjE2MjUzOTI5MzIsImV4cCI6MTYyNTQ3OTMzMn0.l_z2ABgvD51hDJmI-mOGM9gOpBTlhyp3UPUNDTbsdWAcZ0KTzeLmJXhV81HdH2S3_mtmM_bGlHCnPi_wHueBkw'
        }
    }

    const baseURL = config.axiosConfig().baseURL
    const url = `${baseURL}/inventory/product?page=1&size=10`
    return axios.post(url, body, header)
        .then(response => {
            let resJson = response.data
            return resJson
        })
} 