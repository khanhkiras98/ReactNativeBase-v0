import axios from "axios";
import config from "../configs"

const revenueRequest = async () => {
    const body = {
        "from_time": "2021-07-01T00:00:00", "to_time": "2021-07-31T24:00:00", "type": "day", "employee_id": 0
    }
    const header = {
        headers: {
            'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjQ5LTAiLCJpYXQiOjE2MjUwNTMxNDAsImV4cCI6MTYyNTEzOTU0MH0.57_ShCN58-4ZkX7BrIQUViY5E9JaTD9IqWPNzvHI7Lw94FTRpmzOgLApK4XH9_JqsyTmHByq7s1wB7PY7Fdw6Q'
        }
    }
    const baseURL = config.axiosConfig().baseURL
    try {
        const response = await axios.post(`${baseURL}/report/revenue`, body, header)
        console.log('Total Revenue',response.data.data[0].total_revenue)
        console.log('total', response.data.total)
        return response
    } catch (error) {
        if (axios.isAxiosError(error)) {
            handleAxiosError(error);
        } else {
            handleUnexpectedError(error);
        }
    }
}

const handleAxiosError = (error: object) => {
    console.log(error)
}
const handleUnexpectedError = (error: object) => {
    console.log(error)
}
// export default revenueRequest

const dashboardRequest = async (token:string) => {
    const body = {
    }
    const header = {
        headers: {
            'Authorization': token
        }
    }
    const baseURL = config.axiosConfig().baseURL
    try {
        const response = await axios.get(`${baseURL}/report/dashboard`, header)
        const res = response.data
        // const today_total_revenue = res.today_total_revenue
        // const this_month_revenue = res.this_month_revenue
        // const last_month_revenue = res.last_month_revenue
        // const today_total_invoice = res.today_total_invoice
        // const today_total_import = res.today_total_import
        // const today_total_export = res.today_total_export
        // const expire_time_products = res.expire_time_products
        // const total_drug_about_to_expire = res.total_drug_about_to_expire
        // const out_of_stock_product = res.out_of_stock_product

        console.log('Data: ',response.data)
        console.log('total: ', response.data.today_total_revenue)
        // return {today_total_revenue, this_month_revenue, last_month_revenue, 
        //     today_total_invoice, today_total_import, today_total_export, 
        //     expire_time_products, total_drug_about_to_expire, out_of_stock_product}
        return res
        
    } catch (error) {
        if (axios.isAxiosError(error)) {
            handleAxiosError(error);
        } else {
            handleUnexpectedError(error);
        }
    }

}

export default dashboardRequest