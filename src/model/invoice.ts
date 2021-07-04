export type Invoice = {
    invoice_type: number,
    amount: number,
    amount_paid: number,
    amount_debt: number,
    amount_vat: number,
    discount_amount: number,
    status: number,
    currency: string,
    pay_method: string,
    note: string,
    customer_code: string,
    customer_name: string,
    pay_reference: string,
    customer_phone_no: string,
    ecoin_minus: number,
    ecoin_plus: number,
    issue_datetime: string,
    customer_id: number
}

export type Product = {

    inv_id: number,
    drug_id: number,
    drg_drug_cd: string,
    lot: string,
    drg_drug_name: string,
    quantity: number,
    base_quantity: number,
    price: number,
    dosage: string,
    discount: number,
    unit_id: number,
    unit_name: string,
    promotion_flg: number,
    employee_commissions: number,
    import_price: number
}